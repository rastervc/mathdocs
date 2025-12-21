# Orbits and stabilizers

## Orbits

***Definition.*** Suppose $\Lambda$ is a non-empty set and $G$ is a group acting on it. We define the *orbit* of an element $\lambda \in \Lambda$ to be the set
<div>$$ G\lambda = \{ x\lambda \in \Lambda \mid x \in G \} $$</div> 
You can think of $G\lambda$ as the set of values reachable from $\lambda$ by letting $G$ act on it in every way possible.  We let $\Lambda/G$ denote the set of orbits $\{ G\lambda \mid \lambda \in \Lambda\}$.

***Definition.*** If there is only one orbit, the group action is called *transitive*. This happens precisely when all elements of $\Lambda$ are reachable from one another using the group action.

There is another way to interpret orbits. Define the binary relation $\sim$ on $\Lambda$ as $\lambda_1 \sim \lambda_2$ if and only if there is some $x \in G$ such that $\lambda_2 = x\lambda_1$. It is easy to verify that this is an equivalence relation.

<div class="compact" markdown>

***Theorem.*** The relation $\sim$, defined as above, is indeed an equivalence relation.

*Proof.* The relation is clearly reflexive since $\lambda = e \cdot \lambda$. To prove it is symmetric, suppose $\lambda_1 \sim \lambda_2$, i.e., there is some $x \in G$ such that $\lambda_2 = x\lambda_1$. Then $\lambda_1 = x^{-1}\lambda_2$, whence $\lambda_2 \sim \lambda_1$. Transitivity follows similarly: if $\lambda_1 \sim \lambda_2$ and $\lambda_2 \sim \lambda_3$, there are some $x, y \in G$ such that $\lambda_2 = x\lambda_1$ and $\lambda_3 = y\lambda_2$, and therefore $\lambda_3 = yx\lambda_1$. We now easily get $\lambda_1 \sim \lambda_3$. 
<span style="float: right;">$\square$</span>

</div>

This theorem gives us an extremely important corollary.

<div class="compact" markdown>

***Corollary.*** The set $\Lambda/G$ is a partition for $\Lambda$, i.e., the orbits are pairwise disjoint and their union is precisely $\Lambda$. In particular, if $\Lambda$ is finite, we get the class equation 
<div>$$ |\Lambda| = \sum_{\mathcal{O} \text{ orbit}}{|\mathcal{O}|} $$</div> 

*Proof.* The orbits are the equivalence classes defined by $\sim$, and hence they partition $\Lambda$.
<span style="float: right;">$\square$</span>

</div>

***Remark.*** The class equation is true for infinite $\Lambda$ too, but it doesn't give much information.

## Stabilizers

***Definition.*** Suppose $\Lambda$ is a non-empty set and $G$ is a group acting on it. We define the *stabilizer* of an element $\lambda \in \Lambda$ to be the set
<div>$$ G_\lambda = \{ x \in G \mid x\lambda = \lambda \} $$</div>
In other words, $G_\lambda$ is the set of group elements which *fix* or *stabilize* $\lambda$. 

***Remark.*** Some people also write $\on{Stab}_G(\lambda)$ for $G_\lambda$. Although it's pretty verbose, it has the advantage of being clearer.

<div class="compact" markdown>

***Theorem.*** The stabilizer $G_\lambda$ is a subgroup of $G$.

*Proof.* If $x, y \in G_\lambda$, then $xy\lambda = x\lambda = x$ and hence $xy \in G_\lambda$. Similarly, if $x \in G_\lambda$, then $x^{-1}x\lambda = x^{-1}\lambda$ and therefore $x^{-1}\lambda = \lambda$, whence $x^{-1} \in G_\lambda$. Since the subset $G_\lambda$ contains the identity and is closed under multiplication and inverses, it must be a subgroup. 
<span style="float: right;">$\square$</span>

</div>

## The Orbit-Stabilizer theorem

<div class="compact" markdown>

***Theorem.*** Let $G$ be a group acting on a non-empty set $\Lambda$. Then $|G\lambda| = |G : G_\lambda|$ for any $\lambda \in \Lambda$.

*Proof.* Consider the surjective map $f: G \to G\lambda$ defined by $x \mapsto x\lambda$. We will prove that every $f^{-1}(\nu)$ is a left coset of $G_\lambda$ and that any coset can be obtained in this way.

Indeed, let $\nu \in G\lambda$ and fix some $x_0 \in G$ such that $f(x_0) = \nu$. Then $f(x) = \nu$ if and only if $x\lambda = x_0\lambda$, which is equivalent to $x_0^{-1}x = \lambda$. In other words, $f^{-1}(\nu)$ is precisely $x_0G_\lambda$, the left coset whose representative is $x_0$. Similarly, if $y_0G_\lambda$ is some random left coset, we can obtain it as the preimage of $y_0\lambda$, ensuring that our "process" is reversible.

Thus, we have proven that there is a bijection between $G/G_\lambda$ and $G\lambda$. This is exactly what we needed if we consider their cardinals.

<span style="float: right;">$\square$</span>

</div>

***Remark.*** In [Internal Group Actions](internal-group-actions.md), we will see that this proof has a much nice interpretation using $G$-set morphisms. 

The following corollary is of utmost importance.

<div class="compact" markdown>
***Corollary.*** Let a finite group $G$ act on some non-empty set $\Lambda$. Then not only is every orbit $\mathcal{O}$ finite, but its cardinal $|\mathcal{O}|$ must divide $|G|$.

*Proof.* Fix some $\lambda \in \mathcal{O}$. Then $|O| = |G : G_\lambda|$, and hence $|O||G_\lambda| = |G|$, proving that $|\mathcal{O}|$ is finite and a divisor of $|G|$.
<span style="float: right;">$\square$</span>

</div>

