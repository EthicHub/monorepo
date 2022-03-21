import { utils, BigNumber, Wallet } from "ethers";
import { createStubInstance, SinonStub, SinonStubbedInstance, stub } from "sinon";
import { AuctionsCache, TransactionsCache } from "@connext/nxtp-adapters-cache";
import { SubgraphReader } from "@connext/nxtp-adapters-subgraph";
import { ConnextContractDeployments, ConnextContractInterfaces, TransactionService } from "@connext/nxtp-txservice";
import { mkAddress, Logger, mock as _mock } from "@connext/nxtp-utils";
import { NxtpRouterConfig } from "../src/config";
import { AppContext } from "../src/lib/entities/context";
// Used for stubbing functions at the bottom of this file:
import * as router from "../src/router";
import * as helpers from "../src/lib/helpers";
import * as operations from "../src/lib/operations";

export const mock = {
  ..._mock,
  context: (): AppContext => {
    return {
      adapters: {
        wallet: mock.adapter.wallet(),
        subgraph: mock.adapter.subgraph(),
        cache: mock.adapter.cache(),
        txservice: mock.adapter.txservice(),
        contracts: mock.contracts.interfaces(),
      },
      config: mock.config(),
      chainData: mock.chainData(),
      routerAddress: mock.address.router,
      logger: new Logger({ name: "mock", level: process.env.LOG_LEVEL || "silent" }),
    };
  },
  config: (): NxtpRouterConfig => ({
    chains: {
      [mock.chain.A]: {
        assets: [mock.asset.A],
        confirmations: 1,
        providers: ["http://example.com"],
        subgraph: {
          runtime: ["http://example.com"],
          analytics: ["http://example.com"],
          maxLag: 10,
        },
        deployments: {
          transactionManager: mkAddress("0xabcdef123"),
        },
        gasStations: [],
      },
      [mock.chain.B]: {
        assets: [mock.asset.A],
        confirmations: 1,
        providers: ["http://example.com"],
        subgraph: {
          runtime: ["http://example.com"],
          analytics: ["http://example.com"],
          maxLag: 10,
        },
        deployments: {
          transactionManager: mkAddress("0xabcdef123"),
        },
        gasStations: [],
      },
    },
    mnemonic: "hello world",
    logLevel: "info",
    redisUrl: "redis://localhost:6379",
    sequencerUrl: "http://localhost:8081",
    server: {
      host: "0.0.0.0",
      port: 3000,
      requestLimit: 2000,
      adminToken: "blahblahblah",
    },
    network: "testnet",
    maxSlippage: 0,
    mode: {
      diagnostic: false,
      cleanup: false,
      priceCaching: false,
    },
  }),
  adapter: {
    wallet: (): SinonStubbedInstance<Wallet> => {
      const wallet = createStubInstance(Wallet);
      // need to do this differently bc the function doesnt exist on the interface
      (wallet as any).address = mock.address.router;
      wallet.getAddress.resolves(mock.address.router);
      wallet.signMessage.resolves(mock.signature);
      return wallet;
    },
    cache: (): any => {
      const transactions = createStubInstance(TransactionsCache);
      const auctions = createStubInstance(AuctionsCache);
      transactions.getLatestNonce.resolves(0);
      return {
        transactions,
        auctions,
      };
    },
    subgraph: (): SinonStubbedInstance<SubgraphReader> => {
      const subgraph = createStubInstance(SubgraphReader);
      subgraph.getPreparedTransactions.resolves([]);
      subgraph.getTransactionsWithStatuses.resolves([]);
      return subgraph;
    },
    txservice: (): SinonStubbedInstance<TransactionService> => {
      const txservice = createStubInstance(TransactionService);
      txservice.getBalance.resolves(utils.parseEther("1"));

      txservice.getDecimalsForAsset.resolves(18);
      txservice.getBlockTime.resolves(Math.floor(Date.now() / 1000));
      txservice.calculateGasFee.resolves(BigNumber.from(100));
      txservice.calculateGasFeeInReceivingToken.resolves(BigNumber.from(100));
      txservice.calculateGasFeeInReceivingTokenForFulfill.resolves(BigNumber.from(120));
      txservice.getTokenPrice.resolves(BigNumber.from(1));
      txservice.getGasEstimate.resolves(BigNumber.from(24001));

      const mockReceipt = mock.ethers.receipt();
      txservice.sendTx.resolves(mockReceipt);
      txservice.getTransactionReceipt.resolves(mockReceipt);
      return txservice;
    },
  },
  contracts: {
    interfaces: (): SinonStubbedInstance<ConnextContractInterfaces> => {
      const encodedDataMock = "0xabcde";

      const transactionManager = createStubInstance(utils.Interface);
      transactionManager.encodeFunctionData.returns(encodedDataMock);
      transactionManager.decodeFunctionResult.returns([BigNumber.from(1000)]);

      const priceOracle = createStubInstance(utils.Interface);
      priceOracle.encodeFunctionData.returns(encodedDataMock);
      priceOracle.decodeFunctionResult.returns([BigNumber.from(1000)]);

      const tokenRegistry = createStubInstance(utils.Interface);
      tokenRegistry.encodeFunctionData.returns(encodedDataMock);
      tokenRegistry.decodeFunctionResult.returns([BigNumber.from(1000)]);

      const stableSwap = createStubInstance(utils.Interface);
      stableSwap.encodeFunctionData.returns(encodedDataMock);
      stableSwap.decodeFunctionResult.returns([BigNumber.from(1000)]);

      return {
        transactionManager: transactionManager as unknown as ConnextContractInterfaces["transactionManager"],
        priceOracle: priceOracle as unknown as ConnextContractInterfaces["priceOracle"],
        tokenRegistry: tokenRegistry as unknown as ConnextContractInterfaces["tokenRegistry"],
        stableSwap: stableSwap as unknown as ConnextContractInterfaces["stableSwap"],
      };
    },
    deployments: (): ConnextContractDeployments => {
      return {
        transactionManager: (_: number) => ({
          address: mkAddress("0xbadcab"),
          abi: {},
        }),
        priceOracle: (_: number) => ({ address: mkAddress("0xbaddad"), abi: {} }),
      };
    },
  },
  helpers: {
    fulfill: {
      getReceiverAmount: stub(),
    },
    shared: {
      getDestinationTransactingAsset: stub(),
      getDestinationLocalAsset: stub(),
      getAmountIn: stub(),
      getAmountOut: stub(),
      getDecimalsForAsset: stub(),
      calculateGasFeeInReceivingToken: stub(),
    },
  },
  operations: {
    fulfill: stub(),
  },
};

// Stub getContext to return the mock context above.
let getContextStub: SinonStub;
export const stubContext = () => {
  const context = mock.context();
  if (!getContextStub) {
    getContextStub = stub(router, "getContext");
  }
  getContextStub.resetHistory();
  getContextStub.returns(context);
  return context;
};

let getHelpersStub: SinonStub;
export const stubHelpers = () => {
  if (!getHelpersStub) {
    getHelpersStub = stub(helpers, "getHelpers");
  }
  getHelpersStub.resetHistory();
  getHelpersStub.returns(mock.helpers);
};

let getOperationsStub: SinonStub;
export const stubOperations = () => {
  if (!getOperationsStub) {
    getOperationsStub = stub(operations, "getOperations");
  }
  getOperationsStub.resetHistory();
  getOperationsStub.returns(mock.operations);
};
