# ERC-7786x Messaging

Crosschain messaging is the more critical component of a decentralized multichain token. fungible standard is designed to deal with failure.


## Sending Messages with Fire and Forget / One Way

Blockchains are inherently isolated, they cannot independently listen to external networks. Cross-chain message passing is asynchronous, one-way by design using a fire-and-forget pattern. Once a transaction is successfully sent and the MessageBus contract on the source chain emits the message event, the source chain considers its job done. General Message Passing protocols does not automatically notify the sender contract on the source chain if a message fails or is "lost" on the destination chain. 

Most of relayers accept losing messages




### Relayers Centralized by Design

Solve the problem with manual intervention leads to non atomic transactions and destroys decentralization.

### The ERC-7786 Standard (2024-10-14)


### The ERC-7683 Standard (Intents, 2024-04-11)




## Sending Messages with Async Callback / Two Way

fungible standard needs to be designed for failure to guarantee consistency and decentralation

Fungible Standard features a custom crosschain message implementation as shown below.

<br/>
<div style={{textAlign: 'center'}}>
	<img src="/img/drawings/patterns_messaging.svg" width="100%"></img>
</div>
<br/>

### Storing Sent Message Data


### Storing Received Message Data


### Idempotent Messaging




## Recovery Mechanisms

### Retrying a Message


### Rolling Back a Message


### Pruning Message Data





## Recovery Scenarios

Putting contingency mechanisms in practice


### Message loss in Direct Flow


### Message lost in Callback




