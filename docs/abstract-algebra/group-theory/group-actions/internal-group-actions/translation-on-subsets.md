# The action of a group on its subsets by translation

## Introduction

We have already defined the translations as maps from a group to itself. They are easily extend them to maps $t_g: \P(G) \to \P(G)$ according to a well-known definition from set theory.
<div>$$ t_g(A) = \{ t_g(a) \in G \mid a \in A \} $$</div>
The assigment $g \mapsto t_g$ gives us an action of $G$ on $\P(G)$.

<div class="compact" markdown>

***Theorem.*** The translations $t_g$ are bijective and $g \mapsto t_g$ is indeed a left action on $\P(G)$.

*Proof.* 
<span style="float: right;">$\square$</span>

</div>

## Action on the cosets of a subgroup

Suppose $G$ acts on a set $\Lambda$, and say we are trying to extend this action to a larger set $\Lambda'$. Here, "extension" means that $\Lambda \subset \Lambda'$ and that this new action gives the old one when we restrict it to $\Lambda$. It should be clear that the orbits and stabilizers should not change when we go from $\Lambda$ to $\Lambda'$. Similarly, they should not change when we restrict our view to a smaller set $\Lambda'' \subset \Lambda$, as long as the action is well-defined. For this to work, we only require that $\Lambda''$ is a union of orbits (otherwise $\Lambda''$ would not be closed under the action of $G$).

Kernels, however, are a completely different story. Requiring an element of $G$ to behave like the identity on a large set is much stronger than requiring the same thing on a smaller one.

This suggest a change in strategy. Rather than studying how $G$ acts on all of its subsets, we will do so on each orbit individually. This way, the kernels are less likely to be trivial and hence will provide more useful information.

<div class="compact" markdown>

***Theorem.*** Let $G$ be a finite group and $p$ the smallest prime divisor of $|G|$. If $H$ is a subgroup of index $p$, then $H$ is a normal subgroup.

*Proof.* Let $G$ act on the left cosets of $H$ and let $K$ be the kernel of this action. Then $G/K$ is isomorphic to a subgroup of $S_p$, and hence has order dividing $p!$. At the same time, its order divides $|G|$ and therefore it divides their greatest common divisor $p$. The action clearly isn't trivial, therefore the index of $K$ must be $p$. Noting, however, that $K \subset H$, we find $H = K$. Since $K$ is a kernel, it is normal, and so is $H$.
<span style="float: right;">$\square$</span>

</div>