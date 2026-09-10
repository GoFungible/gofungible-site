# ERC-7786 Gateways

## Crosschain MessagingTechnologies

Blockchains are inherently isolated, they cannot independently listen to external networks.

### Relayers are Centralized by Design

Cross-chain message passing is asynchronous, one-way by design using a fire-and-forget pattern. Once a transaction is successfully sent and the MessageBus contract on the source chain emits the message event, the source chain considers its job done. General Message Passing protocols does not automatically notify the sender contract on the source chain if a message fails or is "lost" on the destination chain. 

Most of relayers accept losing messages

Solve the problem with manual intervention leads to non atomic transactions and destroys decentralization.

### The ERC-7786 Proposal (2024-10-14)


### The ERC-7683 Proposal (Intents, 2024-04-11)

