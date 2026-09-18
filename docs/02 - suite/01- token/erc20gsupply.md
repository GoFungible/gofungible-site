# ERC-20g Multichain Supply 

Especially important for any tokens is management of its supply. Fungible Standard aims to comply with Fungible Principles regarding Supply Management and backups supply snapshots on Bitcoin blockchain.

## Managing Supply

<br/>
<div style={{textAlign: 'center'}}>
	<img src="/img/drawings/patterns_supplyx.svg" width="80%"></img>
</div>
<br/>

## Execution Model

<br/>
<div style={{textAlign: 'center'}}>
	<img src="/img/drawings/patterns_messaging_2way_idempotent.svg" width="80%"></img>
</div>
<br/>

## Atomic Operations

### Successful Transfer

<br/>
<div style={{textAlign: 'center'}}>
```mermaid
sequenceDiagram
    participant Master@{ "type" : "collections" }
    participant Slave
    Master->>Slave: bridge() / pay() / transfer()
```
</div>
<br/>

### Failed Request with Retry

<br/>
<div style={{textAlign: 'center'}}>
```mermaid
sequenceDiagram
    participant Master@{ "type" : "collections" }
    participant Slave
    Master-xSlave: bridge() / pay() / transfer()
    Master->>Slave: bridge() / pay() / transfer()
```
</div>
<br/>

## Supply Transfer Mechanisms

### Transfer

### Bridge

### Pay

## Supply by Network