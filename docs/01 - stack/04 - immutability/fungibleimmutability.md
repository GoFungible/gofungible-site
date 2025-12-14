---
sidebar_position: 1
---

# Fungible Immutability
---

## Intro

A blockchain guarantees by definition the immutability of the smart contracts deployed on its nodes. Compose enables to build composable smart contracts as an aggregation of immutable features. However, this is the typical architecture of a Upgradeable Smart Contract.

<div style={{textAlign: 'center'}}>
	<img src="https://compose.diamonds/img/svg/diamond-diagram-light.svg" width="60%"></img>
</div>
<br />

In order the whole structure immutable, or at least, transparently mutable, we need to ensure that the features composed in the DiamondCut can not be changed without the previous approval of the holder.