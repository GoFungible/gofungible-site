# ERC-20g Multichain Structure

Backed by ERC-7786 adapters and Fungible Standard messaging protocol, a suite of use cases for multichain expansion are embedded in the Fungible Standard Framework.

## Token Perimeter

<br/>
<div style={{textAlign: 'center'}}>
	<img src="/img/drawings/patterns_perimeter.svg" width="80%"></img>
</div>
<br/>

## Execution Model

<br/>
<div style={{textAlign: 'center'}}>
	<img src="/img/drawings/patterns_messaging_1way_idempotent.svg" width="80%"></img>
</div>
<br/>

## Atomic Operations

### Sucessful Bind

<br/>
<div style={{textAlign: 'center'}}>
```mermaid
sequenceDiagram
    participant Master@{ "type" : "collections" }
    participant Slave
    Master->>Slave: bind()
    Slave-->>Master: OK!
```
</div>
<br/>

### Failed Request

<br/>
<div style={{textAlign: 'center'}}>
```mermaid
sequenceDiagram
    participant Master@{ "type" : "collections" }
    participant Slave
    Master-xSlave: bind()
```
</div>
<br/>


### Failed Response

<br/>
<div style={{textAlign: 'center'}}>
```mermaid
sequenceDiagram
    participant Master@{ "type" : "collections" }
    participant Slave
    Master->>Slave: bind()
    Slave--xMaster: NOK!
```
</div>
<br/>

### Failed Response with Retry

<br/>
<div style={{textAlign: 'center'}}>
```mermaid
sequenceDiagram
    participant Master@{ "type" : "collections" }
    participant Slave
    Master-xSlave: bind()
    Master->>Slave: bind()
    Slave--xMaster: NOK!
    Master->>Slave: bind()
    Slave-->>Master: OK!
```
</div>
<br/>