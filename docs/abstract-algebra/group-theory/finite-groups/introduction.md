# Introduction to Finite Groups


## Cauchy's Theorem

<div class="compact" markdown>
***Theorem.*** Let $G$ be a finite group and $p$ a prime factor of $|G|$. Then, there is $x \in G$ such that $|x| = p$.

*Proof 1.* We will first prove the theorem for abelian groups. Proceed by induction on $|G|$. The result is clearly true for $|G| = p$ since $G \cong C_p$. Now, assume the result is true for all abelian groups of smaller order. Choose a random non-identity element $x \in G \setminus \{e\}$. If $x$ generates $G$, then $x^{|G|/p}$ has order $p$, and we are done. Otherwise, let $C = \langle x \rangle$ and apply the induction hypothesis to $G/C$. Thus, we find some $y \in G$ such that $|yC| = p$, whence $p$ divides $|y|$. Finally, $y^{|y|/p}$ has the required property.

Now, we will prove Cauchy's theorem in the general setting. Again, we will proceed by induction on the order of $G$. Let's jump directly to the induction step, assuming Cauchy's theorem is true for groups of smaller order. If $p \mid |Z(G)|$, we may simply apply the abelian case to $Z(G)$ to get an element of order $p$. Otherwise, consider the class equation modulo $p$.
<div>$$ 0 \equiv |G| = |Z(G)| + \sum{|G : C(x)|} \pmod p $$</div>
Since $|Z(G)|$ is not congruent to $0$ modulo $p$, there must be some term $|G : C(x)|$ that is not a multiple of $p$ either. This means that $p \mid |C(x)|$, and hence we may apply the induction hypothesis to $C(x)$ to obtain an element of order $p$.
<span style="float: right">$\square$</span>

*Proof 2.* Consider the set of $p$-tuples whose product is the identity.
<div>$$ S = \{ (x_1, \ldots, x_p) \in G^p \mid x_1 \ldots x_p = e\} $$</div>
Since cyclic permutations preserve order, $(x_1, \ldots, x_p) \in S$ implies that $(x_2, \ldots, x_p, x_1)$ is in $S$ as well. Thus, we may let $\Z/p\Z$ act on $S$ by cyclic permutations to the left, where the element $\hat{x}$ cycles the tuple $x$ positions to the left (indeed, adding a multiple of $p$ to $x$ makes no difference since the tuples are of size $p$). The class equation gives 
<div>$$ |S| \equiv |S^G| + \sum{|G : \Stab(x)|} \pmod p $$</div>
<span style="float: right">$\square$</span>
</div>