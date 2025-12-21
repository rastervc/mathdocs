# Introduction

***Definition.*** Let $G$ be a group and $\Lambda$ a nonempty set. We define a *group action* of $G$ on $\Lambda$ to be a group homomorphism $\mu: G \to \on{Sym}(\Lambda)$. It is common to use the notations 
<div>$$x\lambda \quad\quad x \cdot \lambda \quad\quad ^x\lambda$$</div> to mean $\mu(x)(\lambda)$, the *action* of $x$ on $\lambda$. If $\mu$ is injective, we call it a *faithful* action.

## G-Set morphisms

While the above proof might look somewhat technical, it can be summarized in a simple way. We proved that there is some sort of equivalence between the elements of $G\lambda$ and the left cosets of $G_\lambda$ in $G$. Why the left cosets? Because we're working with a left action. Putting that aside, it might be helpful to formalize this idea of equivalence in the context of group actions.

***Definition.*** Let $G$ be a group and suppose $\Lambda$ and $\Lambda'$ are two $G$-sets. We define a *$G$-set morphism* between them to be a map $f: \Lambda \to \Lambda'$ satisfying $f(x\lambda) = xf(\lambda)$ for every $x \in G$ and $\lambda \in \Lambda$.