# Introduction to Finite Groups

## Introduction

Groups can get pretty weird. This is even more true when they are infinite, since all kinds of awkward behaviors can fit in that infinity.

## Cauchy's Theorem

Cauchy's theorem provides a partial converse to Lagrange's theorem, for the case when the order is prime. We will see that it is a very powerful result nonetheless.

***Theorem.*** Let $G$ be a finite group and $p$ a prime factor of $|G|$. Then, there is an element of $G$ such that its order is $p$.

Let's look at two different proofs of Cauchy's theorem. The first uses group actions in a classic way, showing how versatile even the basic tools are. The second proof is short (It looks the same size as the first because I was verbose. Conceptually, it is much more compact.) and elegant, but uses group actions in a creative, non-trivial way.

<div class="compact" markdown>
*Proof 1.* We will first prove the theorem for abelian groups. Proceed by induction on $|G|$. The result is clearly true for $|G| = p$ since $G \cong C_p$. Now, assume the result is true for all abelian groups of smaller order. Choose a random non-identity element $x \in G \setminus \{e\}$. If $x$ generates $G$, then $x^{|G|/p}$ has order $p$, and we are done. Otherwise, let $C = \langle x \rangle$ and apply the induction hypothesis to $G/C$. Thus, we find some $y \in G$ such that $|yC| = p$, whence $p$ divides $|y|$. Finally, $y^{|y|/p}$ has the required property.

Now, we will prove Cauchy's theorem in the general setting. Again, we will proceed by induction on the order of $G$. Let's jump directly to the induction step, assuming Cauchy's theorem is true for groups of smaller order. If $p \mid |Z(G)|$, we may simply apply the abelian case to $Z(G)$ to get an element of order $p$. Otherwise, consider the class equation modulo $p$.
<div>$$ 0 \equiv |G| = |Z(G)| + \sum{|G : C(x)|} \pmod p $$</div>
Since $|Z(G)|$ is not congruent to $0$ modulo $p$, there must be some term $|G : C(x)|$ that is not a multiple of $p$ either. This means that $p \mid |C(x)|$, and hence we may apply the induction hypothesis to $C(x)$ to obtain an element of order $p$.
<span style="float: right">$\square$</span>
</div>

<div class="compact" markdown>
*Proof 2.* Consider the set of $p$-tuples whose product is the identity.
<div>$$ S = \{ (x_1, \ldots, x_p) \in G^p \mid x_1 \ldots x_p = e\} $$</div>
Since cyclic permutations preserve order, $(x_1, \ldots, x_p) \in S$ implies that $(x_2, \ldots, x_p, x_1)$ is in $S$ as well. Thus, we may let $\Z/p\Z$ act on $S$ by cyclic permutations to the left, where the element $\hat{x}$ cycles the tuple $x$ positions to the left (indeed, adding a multiple of $p$ to $x$ makes no difference since the tuples are of size $p$). Now, we should note that any orbit has size either $p$ or $1$. Indeed, if all cyclic permutations are different, there are exactly $p$. Otherwise, say some $p$-tuple is equal to its $k$-th cyclic shift, where $p \nmid k$. Then, the multiples of $k$ form a complete residue system modulo $p$ and hence any two cyclic shifts are equal, that is, the orbit is a singleton. In this case, the corresponding $p$-tuple must be of the form $(x, x, \ldots, x)$. From the equality
<div>$$ |S| = \sum_{\mathcal{O} \in S/G}{|\mathcal{O}|} $$</div>
we find there must be at least $p - 1$ singleton orbits other than the one corresponding to $e$. Any one of these gives an element whose order must be $p$, since $(x, \ldots, x) \in S$ implies $x^p = e$.
<span style="float: right">$\square$</span>
</div>