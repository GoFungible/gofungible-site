
import JSONTable from '@site/src/components/ui/JSONTable';
import erc from "/static/data/erc.json"

# IV - Operational Transparency
---

## Statement

The token must include provision to disclose its operations to any stakeholder at any time.

## Non-compliant Use Cases

import TOCInline from '@theme/TOCInline';

<TOCInline toc={toc} 
	 minHeadingLevel={3}
  maxHeadingLevel={3}/>

## Solutions


### IV - 1. Token source code as well as accessory dependencies must be easily available and leave not room for interpretation


### IV - 2. Operations performed by the Token Issuer over the token deployment must be recorded and disclosed

Description 1

<table>
	<tr style={{ textAlignVertical: "center", textAlign: "center", 'color': '#000000', 'backgroundColor': '#f0f0f0' }}>
		<th>ERC</th>
		<th>Title</th>
		<th>Description</th>
	</tr>
	{erc.map((data, index) => {
		if (data.keywords == 'principles.inform') {
			return (
				<tr>
					<td><a href={data.url} target="_blank">{data.erc}</a></td>
					<td>{data.title}</td>
					<td>{data.desc}</td>
				</tr>
			)
		}
	})}
</table>

### IV - 3. Users must be notified beforehand about changes in token behaviour and allowed withdraw without lose of value before these changes are applied


### IV - 4. The issuer can hide the operations as long as token integrity is guaranteed

Description 2

### IV - 5. The issuer can hide the identity of holders under his compliance responsibility

The level of privacy is determined by the underlying networks where the token is deployed. This is a configuration issue for the Token Issuer. Privacy on token holders must not be in jeopardy with Transparency on token operations

<table>
	<tr style={{ textAlignVertical: "center", textAlign: "center", 'color': '#000000', 'backgroundColor': '#f0f0f0' }}>
		<th>ERC</th>
		<th>Title</th>
		<th>Description</th>
	</tr>
	{erc.map((data, index) => {
		if (data.keywords == 'principles.privacy') {
			return (
				<tr>
					<td><a href={data.url} target="_blank">{data.erc}</a></td>
					<td>{data.title}</td>
					<td>{data.desc}</td>
				</tr>
			)
		}
	})}
</table>

### IV - 6. The issuer can include compliance mechanisms at his reputational risk

Different juristictions apply different levels of compliance. the token issuer must have the tools, out of the box, to decide what level of compliance is suitable for his token.

<table>
	<tr style={{ textAlignVertical: "center", textAlign: "center", 'color': '#000000', 'backgroundColor': '#f0f0f0' }}>
		<th>ERC</th>
		<th>Title</th>
		<th>Description</th>
	</tr>
	{erc.map((data, index) => {
		if (data.keywords == 'principles.compliance') {
			return (
				<tr>
					<td><a href={data.url} target="_blank">{data.erc}</a></td>
					<td>{data.title}</td>
					<td>{data.desc}</td>
				</tr>
			)
		}
	})}
</table>