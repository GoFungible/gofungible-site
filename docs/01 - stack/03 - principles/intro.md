import JSONTable from '@site/src/components/ui/JSONTable';
import erc from "/static/data/erc.json"

# Principles Layer
---

A Fungible Token is a instrument to capture and transfer some kind of value. As a consequence, it must adhere to some fundamental principles. These principles apply to all fkind of Fungible Tokens.


## I. Capture Value Faithfully

* **MUST Capture value as expected**: (Token Value)<br/>
** token should be able to capture the underlying value: speculative, reputational, external price, intrinsic value<br/>
** token should be able to protect against whales manipulation<br/>

## II. Protect Holders Value

* **MUST Protect value restricted to marked forces** (Token Integrity): <br/>
** **Protect investor from Issuer Misuse**<br/>
**** prevent issuer minting unexpected tokens <br/>
**** prevent issuer creating tokens in networks out of expected scope<br/>
**** manage the token variables to reflect the reality of the aggregated token<br/>
**** notify users in changes of token behaviour and allow withdraw witout lose of value<br/>
** **Token Security**: Protect stakeholders from attack<br/>
**** protect token ownership<br />
**** prevent attacks and vulnerabilities<br/>
**** protect provder disaster recovery mechanisms<br />

## III. Friedly Access to Value

* **MUST Make value available** (Token Usability)<br/>
** **Token Distribution**: Provide the desired network presence to issuer<br/>
**** token should be able to be created in any EVM enhanced network<br/>
**** allow issuers moving to the desired network<br/>
**** allow holders moving to the desired network<br/>
**** allow decentralized intertoken communications<br/>

## IV. Inform Token Holders

* **MUST allow holders about governance decisions**<br/>
** **Token Transparency**: Provide to holders all details about the token<br/>
**** provide consolidated data <br/>
** **Token Reporting**: Provide to holders all details about the token<br/>

<div style={{overflowX : 'auto'}}>
	<table style={{textAlign: 'left'}}>
		<tr>
			<td>Type</td>
			<td>Feature</td>
			<td>Capture</td>
			<td>Protect</td>
			<td>Accessible</td>
			<td>Disclosure</td>
		</tr>
		<tr>
			<td>Contract</td>
			<td>Open Source</td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
		<tr>
			<td>Contract</td>
			<td>Verified contract source</td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
		<tr>
			<td>Contract</td>
			<td>Proxy contract</td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
		<tr>
			<td>Contract</td>
			<td>source does not contain an owner contract</td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
		<tr>
			<td>Contract</td>
			<td>Creator not authorized for special permission</td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
		<tr>
			<td>Contract</td>
			<td>Has suspicious functions</td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
		<tr>
			<td>Contract</td>
			<td>External call</td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
		<tr>
			<td>Creator</td>
			<td>Creator address</td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
		<tr>
			<td>Creator</td>
			<td>Creator balance</td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
		<tr>
			<td>Supply</td>
			<td>Mintable</td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
		<tr>
			<td>Supply</td>
			<td>Burnable</td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
		<tr>
			<td>Supply</td>
			<td>Creator wallet contains less than 5% of circulating token supply (0%)</td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
		<tr>
			<td>Supply</td>
			<td>All other holders possess less than 5% of circulating token supply</td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
		<tr>
			<td>Supply</td>
			<td>Top 10 token holders possess less than 70% of circulating token supply (12.23%)</td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
		<tr>
			<td>Supply</td>
			<td>At least 95% of largest pool's liquidity burned/locked for 15 days or longer (99.99%)</td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
		<tr>
			<td>Supply</td>
			<td>Adequate current liquidity</td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
		<tr>
			<td>Owner</td>
			<td>Owner address</td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
		<tr>
			<td>Owner</td>
			<td>Owner balance</td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
		<tr>
			<td>Owner</td>
			<td>Hidden owner</td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
		<tr>
			<td>Owner</td>
			<td>Has obfuscated address</td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
		<tr>
			<td>Owner</td>
			<td>Ownership renounced</td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
		<tr>
			<td>Owner</td>
			<td>Owner can change balance</td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
		<tr>
			<td>Transfer</td>
			<td>Transfer pausable</td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
		<tr>
			<td>Transfer</td>
			<td>Honeypot</td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
		<tr>
			<td>Transfer</td>
			<td>Trading cooldown</td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
		<tr>
			<td>Transfer</td>
			<td>Can't sell all</td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
		<tr>
			<td>Tax</td>
			<td>Buy tax</td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
		<tr>
			<td>Tax</td>
			<td>Sell tax</td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
		<tr>
			<td>Tax</td>
			<td>Tax modifiable</td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
		<tr>
			<td>Holders</td>
			<td>Has blacklist</td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
		<tr>
			<td>Holders</td>
			<td>Has whitelist</td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
		<tr>
			<td>Holders</td>
			<td>Is anti whale</td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
		<tr>
			<td>Holders</td>
			<td>Holder count</td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
		<tr>
			<td>Holders</td>
			<td>LP Holder count</td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
	</table>
</div>
<br/>
