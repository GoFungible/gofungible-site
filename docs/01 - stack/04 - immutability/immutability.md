---
sidebar_position: 1
---

# Composable Immutability
---

## Intro

## Smart Contracts Immutability

Once deployed on a blockchain, the code of an Smart Contract is fixed and can't be changed, ensuring trust, transparency, and security by preventing tampering,

<div style={{textAlign: 'center'}}>
	<img src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*0WQJxLMXG9vbCAj3oGPrrQ.png" width="60%"></img>
</div>

## Contract To Contract Call

A smart contract to smart contract call is an interaction where some source contract sends a message to a target smart contract on a blockchain. This interaction triggers one the target smart contract functions to execute specific code, transfer data, or change the blockchain's state. Contract To Contract Calls can be either read-only (free) or state-changing (costing gas).

<div style={{textAlign: 'center'}}>
	<img src="https://miro.medium.com/v2/1*He06InBVDEbp9PbLmZ8LxA.png" width="60%"></img>
</div>
<br/>

 Calls are essentially transactions that carry input data, specifying which function to run and with what parameters. 
 
A call executes target contract's code in its own target context (storage/state), which is independent of the caller's state.

## DelegateCall

A delegatecall preserves the context of the calling contract, allowing the called contract to modify the storage of the calling contract. 

<div style={{textAlign: 'center'}}>
	<img src="https://miro.medium.com/v2/resize:fit:1200/1*1L0OvTXxCkF7J5YMXJIVaQ.png" width="60%"></img>
</div>

In the context of a delegatecall in Solidity, "context" refers to the state and storage of the calling contract that is passed on to the called contract during the execution. When a contract executes a delegatecall to another contract, the called contract can access the state variables and storage of the calling contract as if it were executing in the calling contract's own context.

This means that any changes made to the state variables and storage by the called contract during the delegatecall will directly affect the calling contract's state. The called contract can read, write, and modify the calling contract's storage.

However, it is important to note that the code execution and behaviour of the called contract itself remain unchanged. Only the storage and state accessed by the called contract are affected by the context of the calling contract.

## Diamond Standard (ERC-2535)

The Diamond standard is a finalized Ethereum Improvement Proposal (EIP-2535) that aims to make it easier for developers to modularize and upgrade their smart contracts.

A Diamond is a smart contract that uses other smart contracts (aka Facets) to make delegatecall calls.

<div style={{textAlign: 'center'}}>
	<img src="https://compose.diamonds/img/svg/diamond-diagram-light.svg" width="60%"></img>
</div>

## Compose

Compose is a smart contract library that helps developers build smart contract systems using the ERC-2535 Diamond standard. It's designed from the ground up for code clarity, reusability, and on-chain composability. Different fatures can be aggregated into a smart contract by using composition pattern.

Compose provides implementation of a set of features.

## Compose On-chain

Taking advantage of Smart Contract immutability feature, Compose provides the Facets already deployed onchain. 

This enables any tokenization tool to create a Diamond contract by aggregating onchain Facets already deployed, tested and validated by another contracts.

## Beyond Compose

As a library, Compose, provides a mechiams for composing technical capabilities.

But Compose does not include built-in principles. Therefore a particularization of Compose is required.

Whereas immutability of the facets is guaranteed by the blockchain, further requirements must be applied:

* We must guarantee immutability of the Diamond to prevent changes on the features included in the Diamond.

* We must guarantee that Features provided by the Facets comply with Fungible Standard principles.