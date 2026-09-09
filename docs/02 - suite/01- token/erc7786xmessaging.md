# ERC-7786x Messaging

Crosschain messaging is the more critical component of a decentralized multichain token. fungible standard is designed to deal with failure.


## Fire and Forget

Cross-chain messaging protocols operate using an asynchronous, fire-and-forget pattern

most of relayers accept losing messages, their view is to solve the problem with manual intervention. this leads to non atomic transactions and destroys decentralization.


### Centralization by Design




## Async Callback

fungible standard is designed for failure to guarantee consistency and decentralation

Fungible Standard features a custom crosschain message implementation structured in 12 steps as shown below.

<br/>
<div style={{textAlign: 'center'}}>
	<img src="/img/drawings/patterns_messaging.svg" width="100%"></img>
</div>
<br/>

### Storing Sent Message Data


### Storing Received Message Data


### Idempotent Messaging



## Retrying a Message


## Rolling Back a Message


## Pruning Message Data


## Recovery Scenarios

Putting contingency mechanisms in practice


### Message loss in Direct Flow


### Message lost in Callback




