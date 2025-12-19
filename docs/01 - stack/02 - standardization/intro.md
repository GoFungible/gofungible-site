import JSONTable from '@site/src/components/ui/JSONTable';
import erc from "/static/data/erc.json"

# Standardization Layer
---

## ERC-20 Extensions

<table>
	<tr style={{ textAlignVertical: "center", textAlign: "center", 'color': '#000000', 'backgroundColor': '#f0f0f0' }}>
		<th>ERC</th>
		<th>Title</th>
		<th>Description</th>
	</tr>
	{erc.map((data, index) => {
		if (data.keywords == 'standardization.erc20') {
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



## Dual Tokens

<table>
	<tr style={{ textAlignVertical: "center", textAlign: "center", 'color': '#000000', 'backgroundColor': '#f0f0f0' }}>
		<th>ERC</th>
		<th>Title</th>
		<th>Description</th>
	</tr>
	{erc.map((data, index) => {
		if (data.keywords == 'standardization.dual') {
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



## MultiAssets

<table>
	<tr style={{ textAlignVertical: "center", textAlign: "center", 'color': '#000000', 'backgroundColor': '#f0f0f0' }}>
		<th>ERC</th>
		<th>Title</th>
		<th>Description</th>
	</tr>
	{erc.map((data, index) => {
		if (data.keywords == 'standardization.multiassets') {
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


## Factory

<table>
	<tr style={{ textAlignVertical: "center", textAlign: "center", 'color': '#000000', 'backgroundColor': '#f0f0f0' }}>
		<th>ERC</th>
		<th>Title</th>
		<th>Description</th>
	</tr>
	{erc.map((data, index) => {
		if (data.keywords == 'standardization.factory') {
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




## Registry

<table>
	<tr style={{ textAlignVertical: "center", textAlign: "center", 'color': '#000000', 'backgroundColor': '#f0f0f0' }}>
		<th>ERC</th>
		<th>Title</th>
		<th>Description</th>
	</tr>
	{erc.map((data, index) => {
		if (data.keywords == 'standardization.registry') {
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

