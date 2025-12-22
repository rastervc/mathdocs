# Fixed points

Suppose $\Lambda$ is a $G$-set and let $x \in G$. Then we call $\lambda \in \Lambda$ a *fixed point* of $x$ if $x\lambda = \lambda$. In general, $\on{Fix}(x)$ will denote the set of fixed points of $x$ with respect to this action. We can also write $\on{Fix}_\Lambda(x)$ to emphasize which set $G$ acts on.

***Remark.*** Some people also write $\Lambda^x$ for $\on{Fix}_\Lambda(x)$.

## The lemma that is not Burnside's

<div class="compact" markdown>

***Theorem.*** (Cauchy-Frobenius) Let $G$ be a finite group acting on the non-empty set $\Lambda$. Then
<div>$$ |\Lambda/G| = \frac{1}{|G|}\sum_{x \in G}{|\on{Fix}(x)|} $$</div>

*Proof.* The sum $\sum_{x \in G}{|\on{Fix}(x)|}$ counts how many pairs $(x, \lambda)$ satisfy $x\lambda = \lambda$. The exact same value is computed by $\sum_{\lambda \in \Lambda}{|G_\lambda|}$, whence we get the following equality by the Orbit-Stabilizer theorem.
<div>$$\frac{1}{|G|}\sum_{x \in G}{|\on{Fix}(x)|} = \frac{1}{|G|}\sum_{\lambda \in \Lambda}{|G_\lambda|} = \sum_{\lambda \in \Lambda}{\frac{1}{|G\lambda|}}$$</div>
Let's fix an orbit $\mathcal{O}$ and see how many times the term $|\mathcal{O}|^{-1}$ appears in the above right sum. Obviously, it appears for every $\lambda$ whose orbit $G\lambda$ is $\mathcal{O}$ and hence precisely $|\mathcal{O}|$ times. Thus, we actually found out that each orbit contributes with a value of $1$ to the sum ($|\mathcal{O}|^{-1}$ is added $|\mathcal{O}|$ times), meaning it simply computes the number of orbits.
<span style="float: right;">$\square$</span>

</div>

***Remark.*** This theorem is often (wrongly) called Burnside's lemma, even though he did not contribute in any way to the result. In his defense, he is the one who popularized it.