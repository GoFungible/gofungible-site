# ERC-7786 Messaging

Crosschain messaging is the more critical component of a decentralized multichain token. fungible standard is designed to deal with failure.


## Sending 1-Way Messages

Fire and Forget

Blockchains are inherently isolated, they cannot independently listen to external networks. Cross-chain message passing is asynchronous, one-way by design using a fire-and-forget pattern. Once a transaction is successfully sent and the MessageBus contract on the source chain emits the message event, the source chain considers its job done. General Message Passing protocols does not automatically notify the sender contract on the source chain if a message fails or is "lost" on the destination chain. 

Most of relayers accept losing messages

<br/>
<div style={{textAlign: 'center'}}>
	<img src="/img/drawings/patterns_messaging_1way.svg" width="100%"></img>
</div>
<br/>

Specially suitable to business operations that can be executed on iterations so retry is a valid use case for this pattern.

Sending to wrong or null destination must be supported by the use case.

This pattern does not support rolling back messages in a consistent way.

Optionally ids can be stored to memorize the transactions done. Optionally pruned.


## Sending 2-Way Messages

Async Callback

fungible standard needs to be designed for failure to guarantee consistency and decentralation

Fungible Standard features a custom crosschain message implementation as shown below.

<br/>
<div style={{textAlign: 'center'}}>
	<img src="/img/drawings/patterns_messaging_2way.svg" width="100%"></img>
</div>
<br/>

Description

Specially suitable to business operations that can be executed on iterations so retry is a valid use case for this pattern but sender needs guarantee of destination execution.
This pattern does not support rolling back messages in a consistent way.


## Sending 2-Way Idempotent Messages


<br/>
<div style={{textAlign: 'center'}}>
	<img src="/img/drawings/patterns_messaging_recovery.svg" width="100%"></img>
</div>
<br/>

Description:
* Storing Sent Message Data
* Storing Received Message Data
* Idempotent Messaging

This pattern allows retrying a message

This pattern allows rolling back a message

