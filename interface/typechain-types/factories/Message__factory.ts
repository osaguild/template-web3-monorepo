/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { Message, MessageInterface } from "../Message";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "message",
        type: "string",
      },
    ],
    name: "AddMessage",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "message",
        type: "string",
      },
    ],
    name: "addMessage",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getMessageLength",
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
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "selectMessage",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405161089a38038061089a833981810160405281019061003291906100dc565b80600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050610109565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006100a98261007e565b9050919050565b6100b98161009e565b81146100c457600080fd5b50565b6000815190506100d6816100b0565b92915050565b6000602082840312156100f2576100f1610079565b5b6000610100848285016100c7565b91505092915050565b610782806101186000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c806315409cf7146100465780636a226a4914610076578063f5701ede14610092575b600080fd5b610060600480360381019061005b919061037e565b6100b0565b60405161006d9190610444565b60405180910390f35b610090600480360381019061008b919061059b565b610155565b005b61009a61025c565b6040516100a791906105f3565b60405180910390f35b60606002600083815260200190815260200160002080546100d09061063d565b80601f01602080910402602001604051908101604052809291908181526020018280546100fc9061063d565b80156101495780601f1061011e57610100808354040283529160200191610149565b820191906000526020600020905b81548152906001019060200180831161012c57829003601f168201915b50505050509050919050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146101e5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101dc906106bb565b60405180910390fd5b6101ef600061026d565b80600260006101fe6000610283565b8152602001908152602001600020908051906020019061021f929190610291565b507fed27dea5fd5838aa3cca4f307879d60b0b3a58f7bdb8906d667fa8e44d255bf8338260405161025192919061071c565b60405180910390a150565b60006102686000610283565b905090565b6001816000016000828254019250508190555050565b600081600001549050919050565b82805461029d9061063d565b90600052602060002090601f0160209004810192826102bf5760008555610306565b82601f106102d857805160ff1916838001178555610306565b82800160010185558215610306579182015b828111156103055782518255916020019190600101906102ea565b5b5090506103139190610317565b5090565b5b80821115610330576000816000905550600101610318565b5090565b6000604051905090565b600080fd5b600080fd5b6000819050919050565b61035b81610348565b811461036657600080fd5b50565b60008135905061037881610352565b92915050565b6000602082840312156103945761039361033e565b5b60006103a284828501610369565b91505092915050565b600081519050919050565b600082825260208201905092915050565b60005b838110156103e55780820151818401526020810190506103ca565b838111156103f4576000848401525b50505050565b6000601f19601f8301169050919050565b6000610416826103ab565b61042081856103b6565b93506104308185602086016103c7565b610439816103fa565b840191505092915050565b6000602082019050818103600083015261045e818461040b565b905092915050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6104a8826103fa565b810181811067ffffffffffffffff821117156104c7576104c6610470565b5b80604052505050565b60006104da610334565b90506104e6828261049f565b919050565b600067ffffffffffffffff82111561050657610505610470565b5b61050f826103fa565b9050602081019050919050565b82818337600083830152505050565b600061053e610539846104eb565b6104d0565b90508281526020810184848401111561055a5761055961046b565b5b61056584828561051c565b509392505050565b600082601f83011261058257610581610466565b5b813561059284826020860161052b565b91505092915050565b6000602082840312156105b1576105b061033e565b5b600082013567ffffffffffffffff8111156105cf576105ce610343565b5b6105db8482850161056d565b91505092915050565b6105ed81610348565b82525050565b600060208201905061060860008301846105e4565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061065557607f821691505b602082108114156106695761066861060e565b5b50919050565b7f4f6e6c79206f776e65722063616e2063616c6c00000000000000000000000000600082015250565b60006106a56013836103b6565b91506106b08261066f565b602082019050919050565b600060208201905081810360008301526106d481610698565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610706826106db565b9050919050565b610716816106fb565b82525050565b6000604082019050610731600083018561070d565b8181036020830152610743818461040b565b9050939250505056fea2646970667358221220b471c6417db1fbdccf0feff86e316b45a75e94eee6bb92a1ed8bf6a84bcca6db64736f6c63430008090033";

type MessageConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MessageConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Message__factory extends ContractFactory {
  constructor(...args: MessageConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    owner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Message> {
    return super.deploy(owner, overrides || {}) as Promise<Message>;
  }
  override getDeployTransaction(
    owner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(owner, overrides || {});
  }
  override attach(address: string): Message {
    return super.attach(address) as Message;
  }
  override connect(signer: Signer): Message__factory {
    return super.connect(signer) as Message__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MessageInterface {
    return new utils.Interface(_abi) as MessageInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Message {
    return new Contract(address, _abi, signerOrProvider) as Message;
  }
}