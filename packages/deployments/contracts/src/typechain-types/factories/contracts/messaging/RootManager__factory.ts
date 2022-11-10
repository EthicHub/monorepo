/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  RootManager,
  RootManagerInterface,
} from "../../../contracts/messaging/RootManager";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_delayBlocks",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_merkle",
        type: "address",
      },
      {
        internalType: "address",
        name: "_watcherManager",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "ProposedOwnable__acceptProposedOwner_delayNotElapsed",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnable__onlyOwner_notOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnable__onlyProposed_notProposedOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnable__proposeNewOwner_invalidProposal",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnable__proposeNewOwner_noOwnershipChange",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnable__renounceOwnership_delayNotElapsed",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnable__renounceOwnership_invalidProposal",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnable__renounceOwnership_noProposal",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint32",
        name: "domain",
        type: "uint32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "connector",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint32[]",
        name: "domains",
        type: "uint32[]",
      },
      {
        indexed: false,
        internalType: "address[]",
        name: "connectors",
        type: "address[]",
      },
    ],
    name: "ConnectorAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint32",
        name: "domain",
        type: "uint32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "connector",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint32[]",
        name: "domains",
        type: "uint32[]",
      },
      {
        indexed: false,
        internalType: "address[]",
        name: "connectors",
        type: "address[]",
      },
      {
        indexed: false,
        internalType: "address",
        name: "caller",
        type: "address",
      },
    ],
    name: "ConnectorRemoved",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "previous",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "updated",
        type: "uint256",
      },
    ],
    name: "DelayBlocksUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "message",
        type: "string",
      },
    ],
    name: "Log",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "proposedOwner",
        type: "address",
      },
    ],
    name: "OwnershipProposed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "aggregateRoot",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "count",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint32[]",
        name: "domains",
        type: "uint32[]",
      },
    ],
    name: "RootPropagated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint32",
        name: "domain",
        type: "uint32",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "receivedRoot",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "queueIndex",
        type: "uint256",
      },
    ],
    name: "RootReceived",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "aggregateRoot",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "count",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes32[]",
        name: "aggregatedMessageRoots",
        type: "bytes32[]",
      },
    ],
    name: "RootsAggregated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "watcherManager",
        type: "address",
      },
    ],
    name: "WatcherManagerChanged",
    type: "event",
  },
  {
    inputs: [],
    name: "DEQUEUE_MAX",
    outputs: [
      {
        internalType: "uint128",
        name: "",
        type: "uint128",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MERKLE",
    outputs: [
      {
        internalType: "contract MerkleTreeManager",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "acceptProposedOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_domain",
        type: "uint32",
      },
      {
        internalType: "address",
        name: "_connector",
        type: "address",
      },
    ],
    name: "addConnector",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_domain",
        type: "uint32",
      },
      {
        internalType: "bytes32",
        name: "_inbound",
        type: "bytes32",
      },
    ],
    name: "aggregate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "connectors",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "connectorsHash",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "delay",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "delayBlocks",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "dequeue",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "domains",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "domainsHash",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_domain",
        type: "uint32",
      },
    ],
    name: "getConnectorForDomain",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_domain",
        type: "uint32",
      },
    ],
    name: "getDomainIndex",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getPendingInboundRootsCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_domain",
        type: "uint32",
      },
    ],
    name: "isDomainSupported",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pendingInboundRoots",
    outputs: [
      {
        internalType: "uint128",
        name: "first",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "last",
        type: "uint128",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32[]",
        name: "_domains",
        type: "uint32[]",
      },
      {
        internalType: "address[]",
        name: "_connectors",
        type: "address[]",
      },
    ],
    name: "propagate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newlyProposed",
        type: "address",
      },
    ],
    name: "proposeNewOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "proposed",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "proposedTimestamp",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_domain",
        type: "uint32",
      },
    ],
    name: "removeConnector",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounced",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_delayBlocks",
        type: "uint256",
      },
    ],
    name: "setDelayBlocks",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_watcherManager",
        type: "address",
      },
    ],
    name: "setWatcherManager",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32[]",
        name: "_domains",
        type: "uint32[]",
      },
      {
        internalType: "address[]",
        name: "_connectors",
        type: "address[]",
      },
    ],
    name: "validateDomains",
    outputs: [],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60a06040523480156200001157600080fd5b50604051620023023803806200230283398101604081905262000034916200015d565b600380546001600160a81b0319166101006001600160a01b038416021790556200005e33620000db565b6001600160a01b038216620000a85760405162461bcd60e51b815260206004820152600c60248201526b217a65726f206d65726b6c6560a01b604482015260640160405180910390fd5b6001600160a01b0382166080526009839055620000d2600a6200013a602090811b62000fc517901c565b5050506200019e565b600080546001600160a01b038381166001600160a01b0319808416821785556002859055600180549091169055604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b60019055565b80516001600160a01b03811681146200015857600080fd5b919050565b6000806000606084860312156200017357600080fd5b83519250620001856020850162000140565b9150620001956040850162000140565b90509250925092565b608051612141620001c1600039600081816103a80152610aea01526121416000f3fe608060405234801561001057600080fd5b50600436106101e55760003560e01c80638456cb591161010f578063b1f8100d116100a2578063d232c22011610071578063d232c22014610432578063d2a3cc7114610444578063db0f016914610457578063e6f1208d1461046a57600080fd5b8063b1f8100d146103f3578063b904670f14610406578063c5b350df14610419578063d1851c921461042157600080fd5b8063957908d1116100de578063957908d114610386578063a01892a5146103a3578063aa0d60a3146103ca578063ad9c0c2e146103ea57600080fd5b80638456cb59146103525780638da5cb5b1461035a5780638e7d93fa1461036b578063909907cb1461037e57600080fd5b8063498c2c2e11610187578063715018a611610156578063715018a6146102f05780637bc24d99146102f85780637d434e91146103015780637d5343081461031457600080fd5b8063498c2c2e146102ab5780635c975abb146102b457806366cf8fab146102bf5780636a42b8f8146102e757600080fd5b80633c4baaf8116101c35780633c4baaf8146102675780633cf52ffb146102885780633f4ba83a1461029057806344833ca31461029857600080fd5b806313ede1a1146101ea5780631eeaabea1461021a57806324ec5d051461022f575b600080fd5b6101fd6101f83660046119c7565b61047d565b6040516001600160a01b0390911681526020015b60405180910390f35b61022d6102283660046119c7565b6104a7565b005b61025761023d3660046119f9565b63ffffffff16600090815260086020526040902054151590565b6040519015158152602001610211565b61027a6102753660046119f9565b610559565b604051908152602001610211565b60025461027a565b61022d6105bd565b61022d6102a6366004611a60565b6105fa565b61027a60075481565b60035460ff16610257565b6102d26102cd3660046119c7565b6107cd565b60405163ffffffff9091168152602001610211565b62093a8061027a565b61022d610807565b61027a60055481565b6101fd61030f3660046119f9565b6108c4565b600a54610332906001600160801b0380821691600160801b90041682565b604080516001600160801b03938416815292909116602083015201610211565b61022d6108fc565b6000546001600160a01b03166101fd565b61022d610379366004611acc565b6109b3565b61027a610a6e565b61038e610a7f565b60408051928352602083019190915201610211565b6101fd7f000000000000000000000000000000000000000000000000000000000000000081565b6103d2606481565b6040516001600160801b039091168152602001610211565b61027a60095481565b61022d610401366004611b0d565b610bbf565b61022d610414366004611b28565b610c67565b61022d610cdf565b6001546001600160a01b03166101fd565b6000546001600160a01b031615610257565b61022d610452366004611b0d565b610d3a565b61022d610465366004611a60565b610e07565b61022d6104783660046119f9565b610ed8565b6006818154811061048d57600080fd5b6000918252602090912001546001600160a01b0316905081565b6000546001600160a01b031633146104d2576040516311a8a1bb60e31b815260040160405180910390fd5b60095481036105175760405162461bcd60e51b815260206004820152600c60248201526b2164656c6179426c6f636b7360a01b60448201526064015b60405180910390fd5b6009546040805183815260208101929092527fef322fd61cb3d8514326f0b28140a92a29cd10996ad80d0671e43d2483464c1d910160405180910390a1600955565b63ffffffff81166000908152600860205260408120548082036105ab5760405162461bcd60e51b815260206004820152600a602482015269085cdd5c1c1bdc9d195960b21b604482015260640161050e565b6105b6600182611b71565b9392505050565b6000546001600160a01b031633146105e8576040516311a8a1bb60e31b815260040160405180910390fd5b6105f0610fcb565b6105f8611014565b565b610602611066565b828181146106445760405162461bcd60e51b815260206004820152600f60248201526e696e76616c6964206c656e6774687360881b604482015260640161050e565b61065085858585610e07565b60008061065b610a7f565b9150915060005b838163ffffffff1610156107865785858263ffffffff1681811061068857610688611b88565b905060200201602081019061069d9190611b0d565b6001600160a01b03166382646a58846040516020016106be91815260200190565b6040516020818303038152906040526040518263ffffffff1660e01b81526004016106e99190611b9e565b600060405180830381600087803b15801561070357600080fd5b505af1925050508015610714575060015b61077e577fcf34ef537ac33ee1ac626ca1587a0a7e8e51561e5514f8cb36afa1c5102b3bab604051610775906020808252818101527f4661696c656420746f2073656e64206d65737361676520746f20646f6d61696e604082015260600190565b60405180910390a15b600101610662565b507f579770d5d8d3f9bcf578ba7bf3cbe05f38a626e4a16967aa3c2fd9aacd01954d828289896040516107bc9493929190611c37565b60405180910390a150505050505050565b600481815481106107dd57600080fd5b9060005260206000209060089182820401919006600402915054906101000a900463ffffffff1681565b6000546001600160a01b03163314610832576040516311a8a1bb60e31b815260040160405180910390fd5b60025460000361085557604051630e4b303f60e21b815260040160405180910390fd5b62093a80600254426108679190611b71565b11610885576040516386d4b3f160e01b815260040160405180910390fd5b6001546001600160a01b0316156108af576040516323295ef960e01b815260040160405180910390fd5b6001546105f8906001600160a01b03166110ac565b600060066108d183610559565b815481106108e1576108e1611b88565b6000918252602090912001546001600160a01b031692915050565b6003546040516384785ecd60e01b81523360048201526101009091046001600160a01b0316906384785ecd90602401602060405180830381865afa158015610948573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061096c9190611c61565b6109a35760405162461bcd60e51b815260206004820152600860248201526710bbb0ba31b432b960c11b604482015260640161050e565b6109ab611066565b6105f861110b565b6109bb611066565b81336109c6826108c4565b6001600160a01b031614610a095760405162461bcd60e51b815260206004820152600a60248201526910b1b7b73732b1ba37b960b11b604482015260640161050e565b6000610a16600a84611148565b6040805163ffffffff87168152602081018690526001600160801b0383168183015290519192507f1daad24ee1bf0bcc72ab681d29df86ec2794361b223da31f148b9f826cd135a8919081900360600190a150505050565b6000610a7a600a6111ba565b905090565b600080610a8a611066565b600954600090610a9e90600a9060646111e4565b90508051600003610ae55760405162461bcd60e51b81526020600482015260116024820152706e6f20766572696669656420726f6f747360781b604482015260640161050e565b6000807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166334a55ee6846040518263ffffffff1660e01b8152600401610b349190611cb3565b60408051808303816000875af1158015610b52573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b769190611cc6565b915091507f41b13c36968d02a1fd71e0f5db55ba2fb043c215a4d1e17633293ff273a77cd4828285604051610bad93929190611cea565b60405180910390a19093509150509091565b6000546001600160a01b03163314610bea576040516311a8a1bb60e31b815260040160405180910390fd5b6001546001600160a01b038281169116148015610c0f57506001600160a01b03811615155b15610c2d576040516311bc066560e11b815260040160405180910390fd5b6000546001600160a01b03808316911603610c5b57604051634a2fb73f60e11b815260040160405180910390fd5b610c64816114b2565b50565b6000546001600160a01b03163314610c92576040516311a8a1bb60e31b815260040160405180910390fd5b610c9c8282611500565b7f95ef69787290b89c35a092c89db1b283b43724d01263e683cfb560c758cdbe70828260046006604051610cd39493929190611ed8565b60405180910390a15050565b6001546001600160a01b03163314610d0a576040516311a7f27160e11b815260040160405180910390fd5b62093a8060025442610d1c9190611b71565b116108af5760405163d39c12bb60e01b815260040160405180910390fd5b6000546001600160a01b03163314610d65576040516311a8a1bb60e31b815260040160405180910390fd5b6003546001600160a01b03610100909104811690821603610dc85760405162461bcd60e51b815260206004820152601760248201527f616c72656164792077617463686572206d616e61676572000000000000000000604482015260640161050e565b6040516001600160a01b03821681527fc16d059e43d7f8e29ccb4e001a2f249d3c59e274925d6a6bc3912943441d9f6c9060200160405180910390a150565b6005548484604051602001610e1d929190611f25565b6040516020818303038152906040528051906020012014610e6b5760405162461bcd60e51b815260206004820152600860248201526721646f6d61696e7360c01b604482015260640161050e565b6007548282604051602001610e81929190611f39565b6040516020818303038152906040528051906020012014610ed25760405162461bcd60e51b815260206004820152600b60248201526a21636f6e6e6563746f727360a81b604482015260640161050e565b50505050565b6003546040516384785ecd60e01b81523360048201526101009091046001600160a01b0316906384785ecd90602401602060405180830381865afa158015610f24573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f489190611c61565b610f7f5760405162461bcd60e51b815260206004820152600860248201526710bbb0ba31b432b960c11b604482015260640161050e565b6000610f8a8261164b565b90507f6a1097f391a37dc63e0860e64ec34442971eeed2fda4d1a90141fa9ce25eb7eb82826004600633604051610cd3959493929190611f85565b60019055565b60035460ff166105f85760405162461bcd60e51b815260206004820152601460248201527314185d5cd8589b194e881b9bdd081c185d5cd95960621b604482015260640161050e565b61101c610fcb565b6003805460ff191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa335b6040516001600160a01b03909116815260200160405180910390a1565b60035460ff16156105f85760405162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b604482015260640161050e565b600080546001600160a01b038381166001600160a01b0319808416821785556002859055600180549091169055604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b611113611066565b6003805460ff191660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a2586110493390565b81546000904390849060109061116d90600160801b90046001600160801b0316611fdb565b82546001600160801b038083166101009490940a84810291021990911617909255600090815260018601602090815260408083209690965560029096019095529290932092909255919050565b80546000906001600160801b03600160801b8204811691166111dc8282611867565b949350505050565b82546060906001600160801b0380821691600160801b9004168181101561123b5760405162461bcd60e51b815260206004820152600b60248201526a717565756520656d70747960a81b604482015260640161050e565b816001600160801b03166000036112845760405162461bcd60e51b815260206004820152600d60248201526c1c5d595d5948085a5b9a5d09d9609a1b604482015260640161050e565b6000846001600160801b0316116112cf5760405162461bcd60e51b815260206004820152600f60248201526e042c2c6c6cae0e8c2c4d8ca40dac2f608b1b604482015260640161050e565b600060016112dd8685612001565b6112e7919061202c565b9050806001600160801b0316826001600160801b03161115611307578091505b5060006113148643611b71565b905060005b826001600160801b0316846001600160801b03161161136b576001600160801b038316600090815260028901602052604090205482811161135e57600191505061136b565b5060001990920191611319565b8061138b57505060408051600081526020810190915292506105b6915050565b600084611399856001612001565b6113a3919061202c565b6001600160801b031667ffffffffffffffff8111156113c4576113c4612054565b6040519080825280602002602001820160405280156113ed578160200160208202803683370190505b50905060005b846001600160801b0316866001600160801b03161161147d576001600160801b038616600090815260018b016020526040902054825183908390811061143b5761143b611b88565b6020908102919091018101919091526001600160801b03871660009081526001808d018352604080832083905560028e019093529181205595860195016113f3565b5088546fffffffffffffffffffffffffffffffff19166001600160801b03959095169490941788555091925050509392505050565b42600255600180546001600160a01b0319166001600160a01b0383169081179091556040517f6ab4d119f23076e8ad491bc65ce85f017fb0591dce08755ba8591059cc51737a90600090a250565b63ffffffff82166000908152600860205260409020541561154c5760405162461bcd60e51b815260206004820152600660248201526565786973747360d01b604482015260640161050e565b6001600160a01b03811661158f5760405162461bcd60e51b815260206004820152600a60248201526910b1b7b73732b1ba37b960b11b604482015260640161050e565b600480546001818101835560088083047f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b01805463ffffffff808916600790961687026101000a8681029102199091161790556006805492830190557ff652222313e28459528d920b65115c16c04f3efc82aaedc97be59f3f377c0d3f90910180546001600160a01b0386166001600160a01b0319909116179055915460009182526020929092526040902081905561164661188f565b505050565b60008061165783610559565b905060006006828154811061166e5761166e611b88565b6000918252602090912001546001600160a01b03169050806116c65760405162461bcd60e51b8152602060048201526011602482015270636f6e6e6563746f72202165786973747360781b604482015260640161050e565b6004546000906116d890600190611b71565b9050808310156117cf57600481815481106116f5576116f5611b88565b90600052602060002090600891828204019190066004029054906101000a900463ffffffff166004848154811061172e5761172e611b88565b90600052602060002090600891828204019190066004026101000a81548163ffffffff021916908363ffffffff1602179055506006818154811061177457611774611b88565b600091825260209091200154600680546001600160a01b0390921691859081106117a0576117a0611b88565b9060005260206000200160006101000a8154816001600160a01b0302191690836001600160a01b031602179055505b60048054806117e0576117e061206a565b600082815260209020600860001990920191820401805463ffffffff600460078516026101000a02191690559055600680548061181f5761181f61206a565b60008281526020808220830160001990810180546001600160a01b031916905590920190925563ffffffff8716825260089052604081205561185f61188f565b509392505050565b600081611875846001612001565b61187f919061202c565b6001600160801b03169392505050565b6000600480548060200260200160405190810160405280929190818152602001828054801561190957602002820191906000526020600020906000905b82829054906101000a900463ffffffff1663ffffffff16815260200190600401906020826003010492830192600103820291508084116118cc5790505b505050505090506000600680548060200260200160405190810160405280929190818152602001828054801561196857602002820191906000526020600020905b81546001600160a01b0316815260019091019060200180831161194a575b50505050509050816040516020016119809190612080565b60408051601f198184030181529082905280516020918201206005556119a8918391016120ca565b60408051601f1981840301815291905280516020909101206007555050565b6000602082840312156119d957600080fd5b5035919050565b803563ffffffff811681146119f457600080fd5b919050565b600060208284031215611a0b57600080fd5b6105b6826119e0565b60008083601f840112611a2657600080fd5b50813567ffffffffffffffff811115611a3e57600080fd5b6020830191508360208260051b8501011115611a5957600080fd5b9250929050565b60008060008060408587031215611a7657600080fd5b843567ffffffffffffffff80821115611a8e57600080fd5b611a9a88838901611a14565b90965094506020870135915080821115611ab357600080fd5b50611ac087828801611a14565b95989497509550505050565b60008060408385031215611adf57600080fd5b611ae8836119e0565b946020939093013593505050565b80356001600160a01b03811681146119f457600080fd5b600060208284031215611b1f57600080fd5b6105b682611af6565b60008060408385031215611b3b57600080fd5b611b44836119e0565b9150611b5260208401611af6565b90509250929050565b634e487b7160e01b600052601160045260246000fd5b600082821015611b8357611b83611b5b565b500390565b634e487b7160e01b600052603260045260246000fd5b600060208083528351808285015260005b81811015611bcb57858101830151858201604001528201611baf565b81811115611bdd576000604083870101525b50601f01601f1916929092016040019392505050565b8183526000602080850194508260005b85811015611c2c5763ffffffff611c19836119e0565b1687529582019590820190600101611c03565b509495945050505050565b848152836020820152606060408201526000611c57606083018486611bf3565b9695505050505050565b600060208284031215611c7357600080fd5b815180151581146105b657600080fd5b600081518084526020808501945080840160005b83811015611c2c57815187529582019590820190600101611c97565b6020815260006105b66020830184611c83565b60008060408385031215611cd957600080fd5b505080516020909101519092909150565b838152826020820152606060408201526000611d096060830184611c83565b95945050505050565b805480835260008281526020808220940193909190825b82600782011015611da157815463ffffffff8082168852602082811c821690890152604082811c821690890152606082811c821690890152608082811c82169089015260a082811c82169089015260c082811c9091169088015260e090811c9087015261010090950194600190910190600801611d29565b90549082811015611dbf5763ffffffff821686526020909501946001015b82811015611ddf57602082901c63ffffffff168652602095909501946001015b82811015611dfe5763ffffffff604083901c1686526020909501946001015b82811015611e1d5763ffffffff606083901c1686526020909501946001015b82811015611e3c5763ffffffff608083901c1686526020909501946001015b82811015611e5b5763ffffffff60a083901c1686526020909501946001015b82811015611e7a5763ffffffff60c083901c1686526020909501946001015b82811015611e905760e082901c86526020860195505b5093949350505050565b6000815480845260208085019450836000528060002060005b83811015611c2c5781546001600160a01b031687529582019560019182019101611eb3565b63ffffffff851681526001600160a01b0384166020820152608060408201819052600090611f0890830185611d12565b8281036060840152611f1a8185611e9a565b979650505050505050565b6020815260006111dc602083018486611bf3565b60208082528181018390526000908460408401835b86811015611f7a576001600160a01b03611f6784611af6565b1682529183019190830190600101611f4e565b509695505050505050565b63ffffffff86168152600060018060a01b03808716602084015260a06040840152611fb360a0840187611d12565b8381036060850152611fc58187611e9a565b9250508084166080840152509695505050505050565b60006001600160801b03808316818103611ff757611ff7611b5b565b6001019392505050565b60006001600160801b0380831681851680830382111561202357612023611b5b565b01949350505050565b60006001600160801b038381169083168181101561204c5761204c611b5b565b039392505050565b634e487b7160e01b600052604160045260246000fd5b634e487b7160e01b600052603160045260246000fd5b6020808252825182820181905260009190848201906040850190845b818110156120be57835163ffffffff168352928401929184019160010161209c565b50909695505050505050565b6020808252825182820181905260009190848201906040850190845b818110156120be5783516001600160a01b0316835292840192918401916001016120e656fea2646970667358221220f5d092a6614390b784a2483f56c896e2e4f09ace8abaee540a57c4c9ff3464cb64736f6c634300080f0033";

type RootManagerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: RootManagerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class RootManager__factory extends ContractFactory {
  constructor(...args: RootManagerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _delayBlocks: PromiseOrValue<BigNumberish>,
    _merkle: PromiseOrValue<string>,
    _watcherManager: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<RootManager> {
    return super.deploy(
      _delayBlocks,
      _merkle,
      _watcherManager,
      overrides || {}
    ) as Promise<RootManager>;
  }
  override getDeployTransaction(
    _delayBlocks: PromiseOrValue<BigNumberish>,
    _merkle: PromiseOrValue<string>,
    _watcherManager: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _delayBlocks,
      _merkle,
      _watcherManager,
      overrides || {}
    );
  }
  override attach(address: string): RootManager {
    return super.attach(address) as RootManager;
  }
  override connect(signer: Signer): RootManager__factory {
    return super.connect(signer) as RootManager__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RootManagerInterface {
    return new utils.Interface(_abi) as RootManagerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): RootManager {
    return new Contract(address, _abi, signerOrProvider) as RootManager;
  }
}
