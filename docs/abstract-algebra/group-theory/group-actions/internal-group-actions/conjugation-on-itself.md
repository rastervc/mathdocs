# The action of a group on itself by conjugation

## Introduction

Suppose $G$ is a group and define $c_g: G \to G, x \to gxg^{-1}$. This map is called the *left conjugation* action of $g$, and it is clear that the assignment $g \mapsto c_g$ defines a left action of $G$ on itself.

<div class="compact" markdown>

***Theorem.*** All maps $c_g$ are automorphisms, and $g \mapsto c_g$ is indeed a left action.

*Proof.* Since $c_g(xy) = gxyg^{-1} = gxg^{-1}gyg^{-1} = c_g(x)c_g(y)$, the map $c_g$ must be a homomorphism. To prove it is an automorphism, note that $c_{g^{-1}}$ is its inverse. It remains to show $g \mapsto c_g$ is a left action, in other words that $c_{ab} = c_{a}c_{b}$. Indeed, $c_{ab}(x) = abxb^{-1}a^{-1} = c_a(c_b(x))$ as desired.
<span style="float: right;">$\square$</span>

</div>

These automorphisms are important enough to deserve a name of their own.

***Definition.*** The maps $c_g$ are called the *inner automorphisms* of $G$. They form a subgroup of $\Aut(G)$ which is denoted by $\Inn(G)$ and called the *inner automorphism group* of $G$. All other automorphisms are called *outer automorphisms*.

<div class="compact" markdown>

***Theorem.*** The inner automorphism group $\Inn(G)$ is a normal subgroup of $\Aut(G)$.

*Proof.* Consider an inner automorphism $c_g$ and fix some $\sigma \in \Aut(G)$. It will suffice to prove that the automorphism $\sigma c_g \sigma^{-1}$ is also inner. Indeed, evaluation at $x$ gives <div>$$ (\sigma c_g \sigma^{-1})(x) = \sigma(g\sigma^{-1}(x)g^{-1}) = \sigma(g)x\sigma(g)^{-1} $$</div> and hence this map is equal to $c_{\sigma(g)}$, clearly a member of $\Inn(G)$.
<span style="float: right;">$\square$</span>

</div>

***Remark.*** The quotient group $\Aut(G)/\Inn(G)$ is often denoted by $\Out(G)$ and called the *outer automorphism group* of $G$.

The next natural step is to study the kernel of this group action, since it helps us describe the action as a quotient group.

***Definition.*** Let $G$ act on itself by left conjugation. We define the *center* of $G$ to be 
<div>$$Z(G) = \ker(G \acts G)$$</div>
The elements of $Z(G)$ are called *central*.

We naturally find that $Z(G)$ is a normal subgroup of $G$ since it is a kernel. The first isomorphism theorem gives us our much-needed isomorphism.

***Theorem.*** Let $G$ be a group. Then $\Inn(G) \cong G/Z(G)$.

Still, this definition of $Z(G)$ is somewhat abstract and not the one we will usually use. The next theorem provides a more intuitive description.

<div class="compact" markdown>

***Theorem.*** The set $Z(G)$ consists of the $g$ that commute with every element in the group.
<div>$$ Z(G) = \{g \in G \mid \forall x \in G, gx = xg\} $$</div>

*Proof.* Since $Z(G) = \ker(G \acts G)$, its elements are the $g \in G$ for which $c_g$ is the identity, that is, $gxg^{-1} = x$ for all $x$. This is equivalent to $gx = xg$ for all $x$ as desired.
<span style="float: right;">$\square$</span>

</div>

Let's see what the orbits and stabilizers are.

***Definition.*** The orbits are called *conjugacy classes*, denoted by $\Cl_G(x)$ or just $\Cl(x)$ for simplicity.

***Definition.*** The stabilizer of $x$ is called its *centralizer*, denoted by $C_G(X)$ or just $C(x)$.

Just like the center, centralizers have a nicer interpretation using commutativity.

<div class="compact" markdown>

***Theorem.*** The set $C_G(x)$ consists of the $g$ that commute with $x$.
<div>$$ C_G(x) = \{g \in G \mid gx = xg\} $$</div>

*Proof.* An element $g \in G$ is in the stabilizer (centralizer) of $x$ if and only if $gxg^{-1} = x$, which is equivalent to $gx = xg$ as desired.
<span style="float: right;">$\square$</span>

</div>

Finally, we look at the following relationship between the center of a group and the centralizers.

***Theorem.*** The folowing equality holds in any group $G$.
<div>$$ Z(G) = \bigcap_{x \in G}C(x)$$</div>

## The strong class equation

<div class="compact" markdown>

***Theorem.*** Let $G$ be a finite group. Then we may rewrite the class equation as
<div>$$|G| = |Z(G)| + \sum_{x}{|G : C(x)|}$$</div>
where the sum is taken over a set of representatives for the non-trivial conjugacy classes.

*Proof.* We start by writing $|G| = \sum{|\mathcal{C}|}$ where the sum is taken over the conjugacy classes. How many of these classes are singletons? Precisely $|Z(G)|$, i.e., the classes corresponding to central elements since $gxg^{-1} = x$ is equivalent to $gx = xg$. All other terms may be written as $|G : C(x)|$ by the Orbit-Stabilizer theorem.
<span style="float: right;">$\square$</span>

</div>

This seems a little complicated since the sum is taken over a weird set of $x$'s. Indeed, the formula works best in combination with modular arithmetic, when most of those terms disappear. The following theorem is the perfect example.

<div class="compact" markdown>

***Theorem.*** Let $G$ be a finite $p$-group. Then $Z(G)$ is non-trivial.

*Proof.* Begin by writing the class equation and considering it modulo $p$. 
<div>$$ 0 \equiv |G| = |Z(G)| + \sum_{x}{|G : C(x)|} \equiv |Z(G)| \pmod{p} $$</div>
Clearly, $|G|$ and all terms of the type $|G : C(x)|$ are divisible by $p$, and so we are left with $|Z(G)|$. Since it is a multiple of $p$ too, the center cannot be trivial. 
<span style="float: right;">$\square$</span>

</div>

## A commutativity criterion

<div class="compact" markdown>

***Theorem.*** Let $G$ be a group such that $\Inn(G)$ is cyclic. Then $G$ is abelian and $\Inn(G)$ is trivial.

*Proof.* Let $gZ(G)$ be a generator of $\Inn(G)$. Then any element of $G$ is of the form $g^kz$ where $k \in \Z$ and $z$ is central. Since any power of $g$ commutes with any other of its power and $z$ commutes with anything, $G$ must be abelian. 
<span style="float: right;">$\square$</span>

</div>

<div class="compact" markdown>

***Corollary.*** Let $G$ be a finite group such that $Z(G) > \frac{1}{4}|G|$. Then $G$ is abelian.

*Proof.* Since $|\on{Inn}(G)| = |G : Z(G)| < 4$, it is cyclic, whence $G$ is abelian.
<span style="float: right;">$\square$</span>

</div>

<div class="compact" markdown>

***Corollary.*** Let $G$ be a group and $N \le Z(G)$ such that $G/N$ is cyclic. Then $G$ is abelian.

*Proof.* By the third isomorphism theorem,
<div>$$G/Z(G) \cong \frac{G/N}{Z(G)/N}$$</div>
and hence $G/Z(G)$ must be cyclic since $G/N$ is.
<span style="float: right;">$\square$</span>

</div>

## Application to normal subgroups

<div class="compact" markdown>

***Theorem.*** Let $G$ be a group. Then a subgroup $H \leq G$ is normal if and only if it is the union of some conjugacy classes.

*Proof.* Suppose $H$ is normal and let $x \in H$. Since $gHg^{-1} \subset H$, we find $gxg^{-1} \in H$ and hence $\Cl(x) \subset H$. Thus, we may write $H$ as the union of the conjugacy classes of its elements.

Now suppose $H$ is a subgroup that is also the union of some conjugacy classes. If $x \in H$, then $x$ must also be part of some conjugacy class $\mathcal{C} \subset H$. Thus $gxg^{-1}$ is in $\mathcal{C}$ and consequently in $H$ for any $g \in G$, proving $H$ is normal. 
<span style="float: right;">$\square$</span>

</div>

This normalcy condition might look pretty random, but it becomes very strong when we also use the fact that $|\Cl(x)|$ divides $|G|$.

<div class="compact" markdown>

***Corollary.*** Let $G$ be a finite group and $N$ a proper normal subgroup. Then there exist divisors $d_1, \ldots, d_n$ of $|G|$ such that $|N| = d_1 + \ldots + d_n$.

*Proof.* Write $N$ as a union of conjugacy classes and take the cardinal. Since the classes are pairwise disjoint, we simply need to add their sizes.
<span style="float: right;">$\square$</span>

</div>

***Remark.*** Note that at least one of those divisors must be $1$, corresponding to the conjugacy class of $\{e\}$. In general, each $1$ in that sum corresponds to a central element.

## Commutativity in magmas

While conjugation requries the existence of inverses, centers and centralizers have an inverse-free definition using just commutativity.

***Definition.*** Let $X$ be a magma. We define its *center* to be the subset consisting of the elements which commute with every value in $X$.
<div>$$ Z(X) = \{ x \in X \mid \forall y \in X, xy = yx \} $$</div>

We define the centralizer similarly.

***Definition.*** Let $X$ be a magma and $A \subset X$. We define the *centralizer* of $A$ to be 
<div>$$ C_X(A) = C(A) = \{ x \in X \mid \forall a \in A, xa = ax \} $$</div>
We can also write $C(x)$ instead of $C(\{x\})$ for singletons.

Wait, centralizers of subsets? Although this is the first time we introduce them (and perhaphs they would be better suited in the next section), centralizers of subsets aren't all that different.

<div class="compact" markdown>

***Theorem.*** Let $A$ be a subset of a magma. Then 
<div>$$ C(A) = \bigcap_{a \in A}{C(a)} $$</div>

*Proof.* This should be pretty clear. An $x$ is in $C(A)$ iff it commutes with every element of $A$, that is, if it is in $C(A)$ for every $a \in A$. Thus, it is enough to take the intersection of these singleton-centralizers to find $C(A)$.
<span style="float: right;">$\square$</span>

</div>

Let's explore some basic properties of centralizers. First of all, how does it behave under set inclusion (since this is pretty much the only interesting relation between sets).

<div class="compact" markdown>

***Theorem.*** Let $A \subset B$ be two subsets of a magma. Then $C(A) \supset C(B)$.

*Proof.* Fix some element $x$ of $C(B)$. Then $x$ commutes with every element of $B$, and hence with every element of $A$ since $A \subset B$. Thus $x \in C(A)$, whence $C(A) \supset C(B)$ as desired.
<span style="float: right;">$\square$</span>

</div>

Let's not forget that $C(\cdot)$ is a map. How does it behave when iterated?

***Definition.*** We define the *bicentralizer* of a subset $A$ of a magma to be the set $B(A) = C(C(A))$.

<div class="compact" markdown>

***Theorem.*** Let $A$ be a subset of a magma. Then $A \subset B(A)$.

*Proof.* The bicentralizer $B(A)$ consists of the values which commute with every element of $C(A)$. But the elements of $C(A)$ were made to commmute with everything in $A$, and saying this in reverse shows that the elements of $A$ commute with everything in $C(A)$, whence $A \subset B(A)$.
<span style="float: right;">$\square$</span>

</div>

<div class="compact" markdown>

***Theorem.*** Let $A$ be a subset of a magma. Then $C(B(A)) = B(C(A)) = C(A)$.

*Proof.* Let $S = C(C(C(A))) = C(B(A)) = B(C(A))$. Since $A \subset B(A)$, we find the inclusion $C(A) \supset C(B(A)) = S$. To get the reverse direction, note that $S = B(C(A))$ contains $C(A)$.
<span style="float: right;">$\square$</span>

</div>

Thus, by iterating $C(\cdot)$ as many times as we want we can only get the centralizer or the bicentralizer depending on the parity.