import JSONTable from '@site/src/components/ui/JSONTable';
import erc from "/static/data/erc.json"

# Principles Layer
---

A Fungible Token is a vehicle to capture and transfer some kind of value. As a consequence, it must adhere to some fundamental principles. These principles apply to all fkind of Fungible Tokens.


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
