/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Multicall, MulticallInterface } from "../Multicall";

const _abi = [
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "target",
            type: "address",
          },
          {
            internalType: "bytes",
            name: "callData",
            type: "bytes",
          },
        ],
        internalType: "struct Multicall.Call[]",
        name: "calls",
        type: "tuple[]",
      },
    ],
    name: "aggregate",
    outputs: [
      {
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256",
      },
      {
        internalType: "bytes[]",
        name: "returnData",
        type: "bytes[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "c__0x9a9c1643",
        type: "bytes32",
      },
    ],
    name: "c_0x9a9c1643",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610b1a806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063201dcf381461003b578063252dba4214610057575b600080fd5b610055600480360381019061005091906106f1565b610088565b005b610071600480360381019061006c91906106b0565b61008b565b60405161007f929190610833565b60405180910390f35b50565b600060606100bb7f0ba97b8ddf423a6368167f6075c17bfc77ee79136526e4803447c8779db08da760001b610088565b6100e77faf534567a20777b56d1c5f8b0c2f91ce5a8544a98e1e20b70f00c024bfdaad9c60001b610088565b6101137fa9ff4661775111d449ecc355bc7bdc5630b98acf573584265192631348157c2f60001b610088565b4391506101427f9cff5e0d2f0a11257825f28a12af59acaba3733cd404c6d3c23b6df9f0a1e3f860001b610088565b61016e7f9823c25d71c3205ae839b7f8e5c5ac011ab17ac0dc10835703c6b90e5388a2dc60001b610088565b825167ffffffffffffffff8111156101af577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040519080825280602002602001820160405280156101e257816020015b60608152602001906001900390816101cd5790505b5090506102117f1b361f0b0942a7bbe6cf2c7da0c0021cee3886c559080c4f95deb6deb0aa748860001b610088565b61023d7fc844f5da89aa1758020df9206427488def0af16cc8d7d844c6d6aa0a833a1f3460001b610088565b60005b8351811015610504576102757f1550cd8af6392f8bf46566d4310975c9b20124cb2b4304b84c396a445b96d13260001b610088565b6102a17f20804a6bd5ee2d39adcce8442d29fe64482900eedc3878a9c39c207008348fe560001b610088565b6000808583815181106102dd577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200260200101516000015173ffffffffffffffffffffffffffffffffffffffff16868481518110610338577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002602001015160200151604051610351919061081c565b6000604051808303816000865af19150503d806000811461038e576040519150601f19603f3d011682016040523d82523d6000602084013e610393565b606091505b50915091506103c47fdf970e1469d586b2f6dd50987314416985dee80d445ecb9e645bddf0df6cc72960001b610088565b6103f07f781f1c8aa39035591d412623ef4fc8eab9f34444ff82ee4daacab38486311f1260001b610088565b61041c7f781ba44bfe651c64f0ea0b0dde2a5bb8e18a8a2433aca2878d2363c4202c3bb960001b610088565b8161042657600080fd5b6104527faa65bbd3aaa1911c58a65811bd4915534a427e22a77cc2b1c1f7eb7a40fb06b360001b610088565b61047e7f5b22736652d71bbaaae69d9f4cf442d3608d82541c310a009b3bc55947916f6e60001b610088565b6104aa7fea4918dcb20a1cc82e4441cbc0a0f30c92d4d9b15ff0bc30498fdf723161c43960001b610088565b808484815181106104e4577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020026020010181905250505080806104fc906109fe565b915050610240565b50915091565b600061051d61051884610888565b610863565b9050808382526020820190508285602086028201111561053c57600080fd5b60005b8581101561058657813567ffffffffffffffff81111561055e57600080fd5b80860161056b898261064c565b8552602085019450602084019350505060018101905061053f565b5050509392505050565b60006105a361059e846108b4565b610863565b9050828152602081018484840111156105bb57600080fd5b6105c684828561098b565b509392505050565b6000813590506105dd81610ab6565b92915050565b600082601f8301126105f457600080fd5b813561060484826020860161050a565b91505092915050565b60008135905061061c81610acd565b92915050565b600082601f83011261063357600080fd5b8135610643848260208601610590565b91505092915050565b60006040828403121561065e57600080fd5b6106686040610863565b90506000610678848285016105ce565b600083015250602082013567ffffffffffffffff81111561069857600080fd5b6106a484828501610622565b60208301525092915050565b6000602082840312156106c257600080fd5b600082013567ffffffffffffffff8111156106dc57600080fd5b6106e8848285016105e3565b91505092915050565b60006020828403121561070357600080fd5b60006107118482850161060d565b91505092915050565b600061072683836107a3565b905092915050565b6000610739826108f5565b6107438185610918565b935083602082028501610755856108e5565b8060005b858110156107915784840389528151610772858261071a565b945061077d8361090b565b925060208a01995050600181019050610759565b50829750879550505050505092915050565b60006107ae82610900565b6107b88185610929565b93506107c881856020860161099a565b6107d181610aa5565b840191505092915050565b60006107e782610900565b6107f1818561093a565b935061080181856020860161099a565b80840191505092915050565b61081681610981565b82525050565b600061082882846107dc565b915081905092915050565b6000604082019050610848600083018561080d565b818103602083015261085a818461072e565b90509392505050565b600061086d61087e565b905061087982826109cd565b919050565b6000604051905090565b600067ffffffffffffffff8211156108a3576108a2610a76565b5b602082029050602081019050919050565b600067ffffffffffffffff8211156108cf576108ce610a76565b5b6108d882610aa5565b9050602081019050919050565b6000819050602082019050919050565b600081519050919050565b600081519050919050565b6000602082019050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600081905092915050565b600061095082610961565b9050919050565b6000819050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b838110156109b857808201518184015260208101905061099d565b838111156109c7576000848401525b50505050565b6109d682610aa5565b810181811067ffffffffffffffff821117156109f5576109f4610a76565b5b80604052505050565b6000610a0982610981565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415610a3c57610a3b610a47565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b610abf81610945565b8114610aca57600080fd5b50565b610ad681610957565b8114610ae157600080fd5b5056fea2646970667358221220fec4649d5f20658f71a84d8af5ebbc78ab18d4b277c6b03806435844609976fa64736f6c63430008040033";

export class Multicall__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Multicall> {
    return super.deploy(overrides || {}) as Promise<Multicall>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Multicall {
    return super.attach(address) as Multicall;
  }
  connect(signer: Signer): Multicall__factory {
    return super.connect(signer) as Multicall__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MulticallInterface {
    return new utils.Interface(_abi) as MulticallInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Multicall {
    return new Contract(address, _abi, signerOrProvider) as Multicall;
  }
}
