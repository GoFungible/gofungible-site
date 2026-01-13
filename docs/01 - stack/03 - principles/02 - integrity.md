

# II - Protect Holders Value
---

## Statement

The token must keep supply integrity according to maker operation. This means that there must not be manipulations on the supply by the token issuer or any third party as these manipulations would create price distortions that can benefit some stakeholder at the expense of another.

## Non-compliant Use Cases

import TOCInline from '@theme/TOCInline';

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

