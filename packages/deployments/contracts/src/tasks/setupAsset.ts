import { hexlify } from "ethers/lib/utils";
import { task } from "hardhat/config";

import { canonizeId } from "../nomad";

export default task("setup-asset", "Configures an asset")
  .addParam("canonical", "Canonical token address")
  .addParam("domain", "Canonical domain of token")
  .addParam("adopted", "Addopted token address")
  .addParam("pool", "Stable swap pool for adopted <> local asset")
  .addOptionalParam("connextAddress", "Override connext address")
  .setAction(
    async (
      { pool, adopted, canonical, domain, connextAddress: _connextAddress },
      { deployments, getNamedAccounts, ethers },
    ) => {
      const namedAccounts = await getNamedAccounts();

      console.log("pool: ", pool);
      console.log("adopted: ", adopted);
      console.log("canonical: ", canonical);
      console.log("domain: ", domain);
      console.log("namedAccounts: ", namedAccounts);

      let connextAddress = _connextAddress;
      if (!connextAddress) {
        const connextDeployment = await deployments.get("Connext");
        connextAddress = connextDeployment.address;
      }
      console.log("connextAddress: ", connextAddress);

      const canonicalTokenId = {
        id: hexlify(canonizeId(canonical)),
        domain: +domain,
      };

      const connext = await ethers.getContractAt("Connext", connextAddress);
      const approved = await connext.approvedAssets(canonicalTokenId.id);
      if (approved) {
        console.log("approved, no need to add");
        return;
      }
      const tx = await connext.setupAsset(canonicalTokenId, adopted, pool, { from: namedAccounts.deployer });

      console.log("setupAsset tx: ", tx);
      const receipt = await tx.wait();
      console.log("setupAsset tx mined: ", receipt.transactionHash);

      const isAssetApproved = await connext.approvedAssets(canonicalTokenId.id);
      console.log("isAssetApproved: ", isAssetApproved);
    },
  );
