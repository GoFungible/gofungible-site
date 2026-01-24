import CardsRow from '@site/src/components/basic/cardrow/CardsRow';
import TOCInline from '@theme/TOCInline';

# II - Protect Holders Value
---

## Statement

The token must keep supply integrity according to maker operation. This means that there must not be manipulations on the supply by the token issuer or any third party as these manipulations would create price distortions that can benefit some stakeholder at the expense of another.

## Scope

<CardsRow
	columns={2}
	cards={[
		{
			variant: "primary",
			image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmLav7s_5yeEZcwNyxf5DeD-F-gYt9FxFm8uvtvem8NNXLofDE6jFFx6r0_YgeNrqqf6U&usqp=CAU",
			imageHeight: "120px",
			title: "Decentralization",
			description: "Protect value from issuer manipulation.",
			buttonText: "More",
			href: "/docs/stack/ecosystem/dlts/intro",
		},
		{
			variant: "primary",
			image: "https://cdn-icons-png.flaticon.com/512/2092/2092663.png",
			imageHeight: "120px",
			title: "Security",
			description: "With billions stolen every year, ensuring security is a must or any cryptocurrency. This includes audits, testing, backups or any possible mechanism to guarantee that your funds are safu..",
			buttonText: "More",
			href: "/docs/stack/ecosystem/wallets",
		}
	]}
/>

## Non-compliant Use Cases

<TOCInline toc={toc} 
	 minHeadingLevel={3}
  maxHeadingLevel={3}/>

## Solutions

### II - 1. Token ownership must be protected

### II - 2. Token supply must be protected and managed in a predictable way

### II - 3. Token should be protected against the known attack vectors and vulnerabilities


### II - 4. Token issuer cannot move tokens between networks outside the declared bridge

Level 4 title

### II - 5. Tokens units added to an existing network must be discounted from other existing network

Neither the issuer nor a third party can add the token to an existing network without impacting in the existing deployments because this would be increasing the supply at the expense of holders and therefore devaluating holders value.

This requirement makes mandatory a track record of deployed networks per token as well as the supply deployed per network.

### II - 6. Tokens units added in a new network must be discounted from other existing network

Neither the issuer nor a third party can add the token to a new network without impacting in the existing deployments because this would be increasing the supply at the expense of holders and therefore devaluating holders value.

This requirement makes mandatory a track record of deployed networks per token as well as the supply deployed per network.

### II - 7. Token must provide disastre recovery mechanisms managed by the holders

