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
import type { PromiseOrValue } from "../../../../../../common";
import type {
  RelayerProxy,
  RelayerProxyInterface,
} from "../../../../../../contracts/core/connext/helpers/RelayerProxy.sol/RelayerProxy";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_connext",
        type: "address",
      },
      {
        internalType: "address",
        name: "_spokeConnector",
        type: "address",
      },
      {
        internalType: "address",
        name: "_gelatoRelayer",
        type: "address",
      },
      {
        internalType: "address",
        name: "_feeCollector",
        type: "address",
      },
      {
        internalType: "address",
        name: "_keep3r",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_proposeAggregateRootCooldown",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
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
    name: "ProposedOwnable__ownershipDelayElapsed_delayNotElapsed",
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
    name: "ProposedOwnable__renounceOwnership_invalidProposal",
    type: "error",
  },
  {
    inputs: [],
    name: "ProposedOwnable__renounceOwnership_noProposal",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_relayer",
        type: "address",
      },
    ],
    name: "RelayerProxy__addRelayer_relayerAdded",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
    ],
    name: "RelayerProxy__definedAddress_empty",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_sender",
        type: "address",
      },
    ],
    name: "RelayerProxy__isWorkableBySender_notWorkable",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_sender",
        type: "address",
      },
    ],
    name: "RelayerProxy__onlyRelayer_notRelayer",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "nextWorkable",
        type: "uint256",
      },
    ],
    name: "RelayerProxy__proposeAggregateRootCooledDown_notCooledDown",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_relayer",
        type: "address",
      },
    ],
    name: "RelayerProxy__removeRelayer_relayerNotAdded",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_sender",
        type: "address",
      },
    ],
    name: "RelayerProxy__validateAndPayWithCredits_notKeep3r",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "proposer",
        type: "address",
      },
    ],
    name: "RelayerProxy__validateProposeSignature_notProposer",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "updated",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "previous",
        type: "address",
      },
    ],
    name: "ConnextChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "updated",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "previous",
        type: "address",
      },
    ],
    name: "FeeCollectorChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "balance",
        type: "uint256",
      },
    ],
    name: "FundsDeducted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "balance",
        type: "uint256",
      },
    ],
    name: "FundsReceived",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "updated",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "previous",
        type: "address",
      },
    ],
    name: "GelatoRelayerChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "updated",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "previous",
        type: "address",
      },
    ],
    name: "Keep3rChanged",
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
        internalType: "uint256",
        name: "proposeAggregateRootCooldown",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "oldProposeAggregateRootCooldown",
        type: "uint256",
      },
    ],
    name: "ProposeAggregateRootCooldownChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "relayer",
        type: "address",
      },
    ],
    name: "RelayerAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "relayer",
        type: "address",
      },
    ],
    name: "RelayerRemoved",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "updated",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "previous",
        type: "address",
      },
    ],
    name: "SpokeConnectorChanged",
    type: "event",
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
        internalType: "address",
        name: "_relayer",
        type: "address",
      },
    ],
    name: "addRelayer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "allowedRelayer",
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
    name: "connext",
    outputs: [
      {
        internalType: "contract IConnext",
        name: "",
        type: "address",
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
    inputs: [
      {
        components: [
          {
            components: [
              {
                internalType: "uint32",
                name: "originDomain",
                type: "uint32",
              },
              {
                internalType: "uint32",
                name: "destinationDomain",
                type: "uint32",
              },
              {
                internalType: "uint32",
                name: "canonicalDomain",
                type: "uint32",
              },
              {
                internalType: "address",
                name: "to",
                type: "address",
              },
              {
                internalType: "address",
                name: "delegate",
                type: "address",
              },
              {
                internalType: "bool",
                name: "receiveLocal",
                type: "bool",
              },
              {
                internalType: "bytes",
                name: "callData",
                type: "bytes",
              },
              {
                internalType: "uint256",
                name: "slippage",
                type: "uint256",
              },
              {
                internalType: "address",
                name: "originSender",
                type: "address",
              },
              {
                internalType: "uint256",
                name: "bridgedAmt",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "normalizedIn",
                type: "uint256",
              },
              {
                internalType: "uint256",
                name: "nonce",
                type: "uint256",
              },
              {
                internalType: "bytes32",
                name: "canonicalId",
                type: "bytes32",
              },
            ],
            internalType: "struct TransferInfo",
            name: "params",
            type: "tuple",
          },
          {
            internalType: "address[]",
            name: "routers",
            type: "address[]",
          },
          {
            internalType: "bytes[]",
            name: "routerSignatures",
            type: "bytes[]",
          },
          {
            internalType: "address",
            name: "sequencer",
            type: "address",
          },
          {
            internalType: "bytes",
            name: "sequencerSignature",
            type: "bytes",
          },
        ],
        internalType: "struct ExecuteArgs",
        name: "_args",
        type: "tuple",
      },
      {
        internalType: "uint256",
        name: "_fee",
        type: "uint256",
      },
    ],
    name: "execute",
    outputs: [
      {
        internalType: "bytes32",
        name: "transferId",
        type: "bytes32",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "feeCollector",
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
    name: "gelatoRelayer",
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
    name: "keep3r",
    outputs: [
      {
        internalType: "contract IKeep3rV2",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "lastProposeAggregateRootAt",
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
    inputs: [
      {
        internalType: "bytes32",
        name: "_aggregateRoot",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "_rootTimestamp",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_signature",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "_fee",
        type: "uint256",
      },
    ],
    name: "proposeAggregateRoot",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "proposeAggregateRootCooldown",
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
        components: [
          {
            internalType: "bytes",
            name: "message",
            type: "bytes",
          },
          {
            internalType: "bytes32[32]",
            name: "path",
            type: "bytes32[32]",
          },
          {
            internalType: "uint256",
            name: "index",
            type: "uint256",
          },
        ],
        internalType: "struct ISpokeConnector.Proof[]",
        name: "_proofs",
        type: "tuple[]",
      },
      {
        internalType: "bytes32",
        name: "_aggregateRoot",
        type: "bytes32",
      },
      {
        internalType: "bytes32[32]",
        name: "_aggregatePath",
        type: "bytes32[32]",
      },
      {
        internalType: "uint256",
        name: "_aggregateIndex",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_fee",
        type: "uint256",
      },
    ],
    name: "proveAndProcess",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_relayer",
        type: "address",
      },
    ],
    name: "removeRelayer",
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
        internalType: "bytes",
        name: "_encodedData",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "_messageFee",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_relayerFee",
        type: "uint256",
      },
    ],
    name: "send",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_connext",
        type: "address",
      },
    ],
    name: "setConnext",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_feeCollector",
        type: "address",
      },
    ],
    name: "setFeeCollector",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_gelatoRelayer",
        type: "address",
      },
    ],
    name: "setGelatoRelayer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_keep3r",
        type: "address",
      },
    ],
    name: "setKeep3r",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_spokeConnector",
        type: "address",
      },
    ],
    name: "setSpokeConnector",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "spokeConnector",
    outputs: [
      {
        internalType: "contract ISpokeConnector",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040516200241438038062002414833981016040819052620000349162000412565b600160035562000044336200009d565b6200004f8662000102565b6200005a856200016b565b6200006584620001d4565b62000070836200023d565b6200007b82620002a6565b62000086816200030f565b620000918462000351565b5050505050506200048a565b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b039092166001600160a01b0319928316178155600255600180549091169055565b600754604080516001600160a01b03808516825290921660208301527f87539ad41983c0ecff8f321db8edf4dd9e830593562770bdacdda085b83e3bb2910160405180910390a1600780546001600160a01b0319166001600160a01b0392909216919091179055565b600854604080516001600160a01b03808516825290921660208301527f66948d99d8431a8416af2202bc301823b7cdd87beb9bddaa274aedac0611a5fd910160405180910390a1600880546001600160a01b0319166001600160a01b0392909216919091179055565b600454604080516001600160a01b03808516825290921660208301527f5db4a067a1f787c3269642464a2a1560868b50b0873e7dec83939ae2359f6128910160405180910390a1600480546001600160a01b0319166001600160a01b0392909216919091179055565b600554604080516001600160a01b03808516825290921660208301527f649c5e3d0ed183894196148e193af316452b0037e77d2ff0fef23b7dc722bed0910160405180910390a1600580546001600160a01b0319166001600160a01b0392909216919091179055565b600654604080516001600160a01b03808516825290921660208301527f711d2a81db157c0acede64f080708460163dfaddcd4266c2c609efb458d3e4c0910160405180910390a1600680546001600160a01b0319166001600160a01b0392909216919091179055565b6009546040805183815260208101929092527f289d6927dc5ba66abb928c5be9d3aecd2baf7c8e89f1faec6a791b8b21589a5d910160405180910390a1600955565b6001600160a01b0381166000908152600b602052604090205460ff16156200039b57604051633d85ded560e11b81526001600160a01b038216600482015260240160405180910390fd5b6001600160a01b0381166000818152600b6020908152604091829020805460ff1916600117905590519182527f03580ee9f53a62b7cb409a2cb56f9be87747dd15017afc5cef6eef321e4fb2c5910160405180910390a150565b80516001600160a01b03811681146200040d57600080fd5b919050565b60008060008060008060c087890312156200042c57600080fd5b6200043787620003f5565b95506200044760208801620003f5565b94506200045760408801620003f5565b93506200046760608801620003f5565b92506200047760808801620003f5565b915060a087015190509295509295509295565b611f7a806200049a6000396000f3fe6080604052600436106101bb5760003560e01c80639cadce00116100ec578063d1851c921161008a578063d9ef0bee11610064578063d9ef0bee146104f9578063dd39f00d14610519578063de4b054814610539578063e79457f11461055957600080fd5b8063d1851c92146104a6578063d232c220146104c4578063d6412ecb146104e357600080fd5b8063b1f8100d116100c6578063b1f8100d14610431578063c415b95c14610451578063c5b350df14610471578063caabc4c21461048657600080fd5b80639cadce00146103d15780639f645a03146103f1578063a42dce801461041157600080fd5b806360f0a5ac116101595780636eba787f116101335780636eba787f1461035e578063715018a61461037e5780638da5cb5b146103935780638efed127146103b157600080fd5b806360f0a5ac146102f0578063634c7bb5146103105780636a42b8f81461034857600080fd5b80634cc18e57116101955780634cc18e571461027a5780634d6f20131461029a57806352910039146102ba5780635e21966a146102d057600080fd5b80632f55b98d146101ff5780633ccfd60b146102445780633cf52ffb1461025b57600080fd5b366101fa57604080513481524760208201527f063d07ee72a7483b8e07ca09054bb686775c5c030f945dde3823a5257a0a93eb910160405180910390a1005b600080fd5b34801561020b57600080fd5b5061022f61021a3660046117bd565b600b6020526000908152604090205460ff1681565b60405190151581526020015b60405180910390f35b34801561025057600080fd5b50610259610579565b005b34801561026757600080fd5b506002545b60405190815260200161023b565b34801561028657600080fd5b506102596102953660046117bd565b6105fc565b3480156102a657600080fd5b506102596102b53660046117bd565b61066c565b3480156102c657600080fd5b5061026c60095481565b3480156102dc57600080fd5b506102596102eb3660046117bd565b6106d3565b3480156102fc57600080fd5b5061025961030b3660046117bd565b61073a565b34801561031c57600080fd5b50600654610330906001600160a01b031681565b6040516001600160a01b03909116815260200161023b565b34801561035457600080fd5b5062093a8061026c565b34801561036a57600080fd5b50600454610330906001600160a01b031681565b34801561038a57600080fd5b506102596107a1565b34801561039f57600080fd5b506000546001600160a01b0316610330565b3480156103bd57600080fd5b5061026c6103cc3660046117df565b610853565b3480156103dd57600080fd5b50600854610330906001600160a01b031681565b3480156103fd57600080fd5b5061025961040c3660046117bd565b61091b565b34801561041d57600080fd5b5061025961042c3660046117bd565b610982565b34801561043d57600080fd5b5061025961044c3660046117bd565b6109e9565b34801561045d57600080fd5b50600554610330906001600160a01b031681565b34801561047d57600080fd5b50610259610a8a565b34801561049257600080fd5b506102596104a13660046118cc565b610afa565b3480156104b257600080fd5b506001546001600160a01b0316610330565b3480156104d057600080fd5b506000546001600160a01b03161561022f565b3480156104ef57600080fd5b5061026c600a5481565b34801561050557600080fd5b50610259610514366004611924565b610c00565b34801561052557600080fd5b506102596105343660046117bd565b610cf5565b34801561054557600080fd5b50600754610330906001600160a01b031681565b34801561056557600080fd5b50610259610574366004611984565b610d5c565b6000546001600160a01b031633146105a4576040516311a8a1bb60e31b815260040160405180910390fd5b6105ac610e1b565b476105b73382610e74565b604080518281524760208201527f9826a73d0fd7186bda6a15195ac17571869cab151bfe9a8fed3f9407fffe5b18910160405180910390a1506105fa6001600355565b565b6000546001600160a01b03163314610627576040516311a8a1bb60e31b815260040160405180910390fd5b806001600160a01b03811661065f57604051633a930fdf60e01b81526001600160a01b03821660048201526024015b60405180910390fd5b61066882610f8d565b5050565b6000546001600160a01b03163314610697576040516311a8a1bb60e31b815260040160405180910390fd5b806001600160a01b0381166106ca57604051633a930fdf60e01b81526001600160a01b0382166004820152602401610656565b61066882610ff6565b6000546001600160a01b031633146106fe576040516311a8a1bb60e31b815260040160405180910390fd5b806001600160a01b03811661073157604051633a930fdf60e01b81526001600160a01b0382166004820152602401610656565b6106688261105f565b6000546001600160a01b03163314610765576040516311a8a1bb60e31b815260040160405180910390fd5b806001600160a01b03811661079857604051633a930fdf60e01b81526001600160a01b0382166004820152602401610656565b610668826110c8565b6000546001600160a01b031633146107cc576040516311a8a1bb60e31b815260040160405180910390fd5b62093a80600254426107de9190611a3c565b116107fc576040516324e0285f60e21b815260040160405180910390fd5b60025460000361081f57604051630e4b303f60e21b815260040160405180910390fd5b6001546001600160a01b031615610849576040516323295ef960e01b815260040160405180910390fd5b6105fa6000611164565b336000908152600b602052604081205460ff1661088557604051630981f7d560e21b8152336004820152602401610656565b61088d610e1b565b6007546040516331f1f3e960e11b81526001600160a01b03909116906363e3e7d2906108bd908690600401611bd8565b6020604051808303816000875af11580156108dc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109009190611dcb565b905061090b826111c9565b6109156001600355565b92915050565b6000546001600160a01b03163314610946576040516311a8a1bb60e31b815260040160405180910390fd5b806001600160a01b03811661097957604051633a930fdf60e01b81526001600160a01b0382166004820152602401610656565b61066882611240565b6000546001600160a01b031633146109ad576040516311a8a1bb60e31b815260040160405180910390fd5b806001600160a01b0381166109e057604051633a930fdf60e01b81526001600160a01b0382166004820152602401610656565b610668826112a9565b6000546001600160a01b03163314610a14576040516311a8a1bb60e31b815260040160405180910390fd5b6001546001600160a01b038281169116148015610a32575060025415155b15610a50576040516311bc066560e11b815260040160405180910390fd5b6000546001600160a01b03808316911603610a7e57604051634a2fb73f60e11b815260040160405180910390fd5b610a8781611312565b50565b6001546001600160a01b03163314610ab5576040516311a7f27160e11b815260040160405180910390fd5b62093a8060025442610ac79190611a3c565b11610ae5576040516324e0285f60e21b815260040160405180910390fd5b6001546105fa906001600160a01b0316611164565b336000908152600b602052604090205460ff16610b2c57604051630981f7d560e21b8152336004820152602401610656565b610b34610e1b565b610b3c611360565b610b735742600954600a54610b519190611de4565b604051631125eeef60e01b815260048101929092526024820152604401610656565b610b7e848484611379565b60085460405163111c183760e01b815260048101869052602481018590526001600160a01b039091169063111c183790604401600060405180830381600087803b158015610bcb57600080fd5b505af1158015610bdf573d6000803e3d6000fd5b50505050610bec816111c9565b42600a55610bfa6001600355565b50505050565b336000908152600b602052604090205460ff16610c3257604051630981f7d560e21b8152336004820152602401610656565b610c3a610e1b565b600854604051630aec6b9f60e21b81526001600160a01b0390911690632bb1ae7c908490610c6c908790600401611df7565b6000604051808303818588803b158015610c8557600080fd5b505af1158015610c99573d6000803e3d6000fd5b5050604080518681524760208201527f9826a73d0fd7186bda6a15195ac17571869cab151bfe9a8fed3f9407fffe5b189450019150610cd59050565b60405180910390a1610ce6816111c9565b610cf06001600355565b505050565b6000546001600160a01b03163314610d20576040516311a8a1bb60e31b815260040160405180910390fd5b806001600160a01b038116610d5357604051633a930fdf60e01b81526001600160a01b0382166004820152602401610656565b61066882611491565b336000908152600b602052604090205460ff16610d8e57604051630981f7d560e21b8152336004820152602401610656565b610d96610e1b565b60085460405163508a109b60e01b81526001600160a01b039091169063508a109b90610dce9089908990899089908990600401611e4f565b600060405180830381600087803b158015610de857600080fd5b505af1158015610dfc573d6000803e3d6000fd5b50505050610e09816111c9565b610e136001600355565b505050505050565b600260035403610e6d5760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606401610656565b6002600355565b80471015610ec45760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a20696e73756666696369656e742062616c616e63650000006044820152606401610656565b6000826001600160a01b03168260405160006040518083038185875af1925050503d8060008114610f11576040519150601f19603f3d011682016040523d82523d6000602084013e610f16565b606091505b5050905080610cf05760405162461bcd60e51b815260206004820152603a60248201527f416464726573733a20756e61626c6520746f2073656e642076616c75652c207260448201527f6563697069656e74206d617920686176652072657665727465640000000000006064820152608401610656565b600654604080516001600160a01b03808516825290921660208301527f711d2a81db157c0acede64f080708460163dfaddcd4266c2c609efb458d3e4c0910160405180910390a1600680546001600160a01b0319166001600160a01b0392909216919091179055565b600754604080516001600160a01b03808516825290921660208301527f87539ad41983c0ecff8f321db8edf4dd9e830593562770bdacdda085b83e3bb2910160405180910390a1600780546001600160a01b0319166001600160a01b0392909216919091179055565b600454604080516001600160a01b03808516825290921660208301527f5db4a067a1f787c3269642464a2a1560868b50b0873e7dec83939ae2359f6128910160405180910390a1600480546001600160a01b0319166001600160a01b0392909216919091179055565b6001600160a01b0381166000908152600b602052604090205460ff1661110c576040516309fbf0f560e31b81526001600160a01b0382166004820152602401610656565b6001600160a01b0381166000818152600b6020908152604091829020805460ff1916905590519182527f10e1f7ce9fd7d1b90a66d13a2ab3cb8dd7f29f3f8d520b143b063ccfbab6906b91015b60405180910390a150565b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b039092166001600160a01b0319928316178155600255600180549091169055565b806000036111d45750565b6004546001600160a01b03163303611201576005546111fc906001600160a01b031682610e74565b61120b565b61120b3382610e74565b604080518281524760208201527f9826a73d0fd7186bda6a15195ac17571869cab151bfe9a8fed3f9407fffe5b189101611159565b600854604080516001600160a01b03808516825290921660208301527f66948d99d8431a8416af2202bc301823b7cdd87beb9bddaa274aedac0611a5fd910160405180910390a1600880546001600160a01b0319166001600160a01b0392909216919091179055565b600554604080516001600160a01b03808516825290921660208301527f649c5e3d0ed183894196148e193af316452b0037e77d2ff0fef23b7dc722bed0910160405180910390a1600580546001600160a01b0319166001600160a01b0392909216919091179055565b42600255600180546001600160a01b0319166001600160a01b0383169081179091556040517f6ab4d119f23076e8ad491bc65ce85f017fb0591dce08755ba8591059cc51737a90600090a250565b6000600954600a546113729190611de4565b4211905090565b6040805160208082018690528183018590528251808303840181526060830184528051908201207f19457468657265756d205369676e6564204d6573736167653a0a3332000000006080840152609c8084018290528451808503909101815260bc90930190935281519101206000906113f2908461152a565b600854604051632516d8ed60e11b81526001600160a01b038084166004830152929350911690634a2db1da90602401602060405180830381865afa15801561143e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114629190611f11565b61148a57604051634810638b60e01b81526001600160a01b0382166004820152602401610656565b5050505050565b6001600160a01b0381166000908152600b602052604090205460ff16156114d657604051633d85ded560e11b81526001600160a01b0382166004820152602401610656565b6001600160a01b0381166000818152600b6020908152604091829020805460ff1916600117905590519182527f03580ee9f53a62b7cb409a2cb56f9be87747dd15017afc5cef6eef321e4fb2c59101611159565b6000806000611539858561154e565b9150915061154681611593565b509392505050565b60008082516041036115845760208301516040840151606085015160001a611578878285856116dd565b9450945050505061158c565b506000905060025b9250929050565b60008160048111156115a7576115a7611f2e565b036115af5750565b60018160048111156115c3576115c3611f2e565b036116105760405162461bcd60e51b815260206004820152601860248201527f45434453413a20696e76616c6964207369676e617475726500000000000000006044820152606401610656565b600281600481111561162457611624611f2e565b036116715760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e677468006044820152606401610656565b600381600481111561168557611685611f2e565b03610a875760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b6064820152608401610656565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08311156117145750600090506003611798565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa158015611768573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b03811661179157600060019250925050611798565b9150600090505b94509492505050565b80356001600160a01b03811681146117b857600080fd5b919050565b6000602082840312156117cf57600080fd5b6117d8826117a1565b9392505050565b600080604083850312156117f257600080fd5b823567ffffffffffffffff81111561180957600080fd5b830160a0818603121561181b57600080fd5b946020939093013593505050565b634e487b7160e01b600052604160045260246000fd5b600082601f83011261185057600080fd5b813567ffffffffffffffff8082111561186b5761186b611829565b604051601f8301601f19908116603f0116810190828211818310171561189357611893611829565b816040528381528660208588010111156118ac57600080fd5b836020870160208301376000602085830101528094505050505092915050565b600080600080608085870312156118e257600080fd5b8435935060208501359250604085013567ffffffffffffffff81111561190757600080fd5b6119138782880161183f565b949793965093946060013593505050565b60008060006060848603121561193957600080fd5b833567ffffffffffffffff81111561195057600080fd5b61195c8682870161183f565b9660208601359650604090950135949350505050565b80610400810183101561091557600080fd5b600080600080600080610480878903121561199e57600080fd5b863567ffffffffffffffff808211156119b657600080fd5b818901915089601f8301126119ca57600080fd5b8135818111156119d957600080fd5b8a60208260051b85010111156119ee57600080fd5b602092830198509650508701359350611a0a8860408901611972565b9250610440870135915061046087013590509295509295509295565b634e487b7160e01b600052601160045260246000fd5b8181038181111561091557610915611a26565b803563ffffffff811681146117b857600080fd5b8015158114610a8757600080fd5b80356117b881611a63565b6000808335601e19843603018112611a9357600080fd5b830160208101925035905067ffffffffffffffff811115611ab357600080fd5b80360382131561158c57600080fd5b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b6000808335601e19843603018112611b0257600080fd5b830160208101925035905067ffffffffffffffff811115611b2257600080fd5b8060051b360382131561158c57600080fd5b8183526000602080850194508260005b85811015611b70576001600160a01b03611b5d836117a1565b1687529582019590820190600101611b44565b509495945050505050565b81835260006020808501808196508560051b810191508460005b87811015611bcb578284038952611bac8288611a7c565b611bb7868284611ac2565b9a87019a9550505090840190600101611b95565b5091979650505050505050565b602081526000823561019e19843603018112611bf357600080fd5b60a060208401528301611c1660c08401611c0c83611a4f565b63ffffffff169052565b611c2260208201611a4f565b63ffffffff1660e0840152611c3960408201611a4f565b610100611c4d8186018363ffffffff169052565b611c59606084016117a1565b9150610120611c72818701846001600160a01b03169052565b611c7e608085016117a1565b9250610140611c97818801856001600160a01b03169052565b611ca360a08601611a71565b9350610160611cb58189018615159052565b611cc260c0870187611a7c565b95506101a061018081818c0152611cde6102608c018985611ac2565b975060e0890135828c0152611cf4878a016117a1565b6001600160a01b03166101c08c0152948801356101e08b015250509085013561020088015284013561022087015283013561024086015250611d396020860186611aeb565b9250601f1980868403016040870152611d53838584611b34565b9350611d626040880188611aeb565b9350915080868503016060870152611d7b848484611b7b565b9350611d89606088016117a1565b6001600160a01b03811660808801529250611da76080880188611a7c565b93509150808685030160a087015250611dc1838383611ac2565b9695505050505050565b600060208284031215611ddd57600080fd5b5051919050565b8082018082111561091557610915611a26565b600060208083528351808285015260005b81811015611e2457858101830151858201604001528201611e08565b506000604082860101526040601f19601f8301168501019250505092915050565b6104008183375050565b6104608082528101859052600061048080830190600588901b8401018883805b8a811015611ee55786840361047f190185528235368d900361043e19018112611e96578283fd5b8c01610440611ea58280611a7c565b828852611eb58389018284611ac2565b92505050602061040081840182890137610420928301359690920195909552948501949290920191600101611e6f565b5050508092505050846020830152611f006040830185611e45565b826104408301529695505050505050565b600060208284031215611f2357600080fd5b81516117d881611a63565b634e487b7160e01b600052602160045260246000fdfea2646970667358221220149554de8798afeca8e29317726911b7d1820d2a7ac9f94c9aee942c38db86f664736f6c63430008110033";

type RelayerProxyConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: RelayerProxyConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class RelayerProxy__factory extends ContractFactory {
  constructor(...args: RelayerProxyConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _connext: PromiseOrValue<string>,
    _spokeConnector: PromiseOrValue<string>,
    _gelatoRelayer: PromiseOrValue<string>,
    _feeCollector: PromiseOrValue<string>,
    _keep3r: PromiseOrValue<string>,
    _proposeAggregateRootCooldown: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<RelayerProxy> {
    return super.deploy(
      _connext,
      _spokeConnector,
      _gelatoRelayer,
      _feeCollector,
      _keep3r,
      _proposeAggregateRootCooldown,
      overrides || {}
    ) as Promise<RelayerProxy>;
  }
  override getDeployTransaction(
    _connext: PromiseOrValue<string>,
    _spokeConnector: PromiseOrValue<string>,
    _gelatoRelayer: PromiseOrValue<string>,
    _feeCollector: PromiseOrValue<string>,
    _keep3r: PromiseOrValue<string>,
    _proposeAggregateRootCooldown: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _connext,
      _spokeConnector,
      _gelatoRelayer,
      _feeCollector,
      _keep3r,
      _proposeAggregateRootCooldown,
      overrides || {}
    );
  }
  override attach(address: string): RelayerProxy {
    return super.attach(address) as RelayerProxy;
  }
  override connect(signer: Signer): RelayerProxy__factory {
    return super.connect(signer) as RelayerProxy__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RelayerProxyInterface {
    return new utils.Interface(_abi) as RelayerProxyInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): RelayerProxy {
    return new Contract(address, _abi, signerOrProvider) as RelayerProxy;
  }
}
