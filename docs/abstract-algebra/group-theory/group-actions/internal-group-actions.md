# Interal group actions

## G acts on itself by translation

***Definition.***

## G acts on subgroups by translation

## G acts on itself by conjugation

Suppose $G$ is a group and define $c_g: G \to G, x \to gxg^{-1}$ for every $g \in G$. This map is called the *left conjugation* action of $g$, and it is clear that the assignment $g \mapsto c_g$ defines a left action of $G$ on itself.

***Definition.*** The automorphisms $c_g$ are called the *inner automorphisms* of $G$. They form a subgroup of $\Aut(G)$ which is denoted by $\Inn(G)$ ad called the *inner automorphism group* of $G$. All other automorphisms are called *outer automorphisms*.

<div class="compact" markdown>

***Theorem.*** The inner automorphism group $\Inn(G)$ is a normal subgroup of $\Aut(G)$.

*Proof*.
<span style="float: right;">$\square$</span>

</div>

***Remark.*** The quotient group $\Aut(G)/\Inn(G)$ is often denoted by $\Out(G)$, the *outer automorphism group* of $G$.

The next natural step is to study the kernel of this group action, since it helps us "embed" our action in a symmetric group, which should be easier to understand.

***Definition.*** Let $G$ act on itself by left conjugation. We define the *center* of $G$ to be the 
<div>$$Z(G) = \ker(G \acts G)$$</div>
Thus, the center is precisely the kernel of this group action. The elements of $Z(G)$ are called *central elements*.

We naturally find that $Z(G)$ is a normal subgroup of $G$ since it is a kernel. The first isomorphism theorem gives us our much-needed embedding.

***Theorem.*** Let $G$ be a group. Then $\Inn(G) \cong G/Z(G)$.

Still, this definition of $Z(G)$ is somewhat abstract and not the one we will usually use. The next theorem provides a more intuitive description.

<div class="compact" markdown>

***Theorem.*** The set $Z(G)$ consists of the $g$ that commute with every element in the group.
<div>$$ Z(G) = \{g \in G \mid \forall x \in G, gx = xg\} $$</div>

*Proof.* Since $Z(G) = \ker(G \acts G)$, its elements are the $g \in G$ for which $c_g$ is the identity, that is, $gxg^{-1} = x$ for all $x$. This is equivalent to $gx = xg$ for all $x$, as desired.
<span style="float: right;">$\square$</span>

</div>


### The strong class equation

<div class="compact" markdown>

***Theorem.*** Let $G$ be a finite group. Then we may rewrite the class equation as
<div>$$|G| = |Z(G)| + \sum_{x}{|G : C(x)|}$$</div>
where the sum is taken over the representatives of the non-trivial conjugacy classes.

*Proof.*
<span style="float: right;">$\square$</span>

</div>

This seems a little complicated since the sum is taken over a weird set of $x$'s. Indeed, the formula works best in combination with modular arithmetic, when most of those terms disappear. The following theorem is the perfect example.

<div class="compact" markdown>

***Theorem.*** Let $G$ be a finite $p$-group. Then $Z(G)$ is non-trivial.

*Proof.* Begin by writing the strong class equation and considering it modulo $p$. 
<div>$$ 0 \equiv |G| = |Z(G)| + \sum_{x}{|G : C(x)|} \equiv |Z(G)| \pmod{p} $$</div>
Clearly, $|G|$ and all terms of the type $|G : C(x)|$ are divisible by $p$, and so we are left with $|Z(G)|$. Since it is a multiple of $p$ too, the center cannot be trivial. 
<span style="float: right;">$\square$</span>

</div>

### A commutativity criterion

<div class="compact" markdown>

***Theorem.*** Let $G$ be a group such that $\Inn(G)$ is cyclic. Then $G$ is abelian and $\Inn(G)$ is trivial.

*Proof.* Let $gZ(G)$ be a generator of $\Inn(G)$. Then any element of $G$ is of the form $g^kz$ where $k > 0$ and $z$ is central. Since any power of $g$ commutes with any other of its power and $z$ commutes with anything, $G$ must be abelian. 
<span style="float: right;">$\square$</span>

</div>

<div class="compact" markdown>

***Corollary.*** Let $G$ be a finite group such that $Z(G) > \frac{1}{4}|G|$. Then $G$ is abelian.

*Proof.* Since $|\on{Inn}(G)| = |G : Z(G)| < 4$, it is cyclic, whence $G$ is abelian.
<span style="float: right;">$\square$</span>

</div>

<div class="compact" markdown>

***Corollary.*** Let $G$ be a group and $N \le Z(G)$ such that $G/N$ is cyclic. Then $G$ is abelian.

*Proof.* Note that $G/Z(G)$ is a quotient of the cyclic group $G/N$, whence it is cyclic as well.
<span style="float: right;">$\square$</span>

</div>

### Properties of normal subgroups

<div class="compact" markdown>

***Theorem.*** Let $G$ be a group. Then a subgroup $H \leq G$ is normal if and only if it is the union of some conjugacy classes.

*Proof.* Suppose $H$ is normal and let $x \in H$. Since $gHg^{-1} \subseteq H$, we find $gxg^{-1} \in H$ and hence $\Cl(x) \subseteq H$. Thus, we may write $H$ as the union of the conjugacy classes of its elements.

Now suppose $H$ is a subgroup that is also the union of some conjugacy classes. If $x \in H$, then $x$ must also be part of some conjugacy class $\mathcal{C} \subseteq H$. Thus $gxg^{-1}$ is in $\mathcal{C}$ and consequently in $H$ for any $g \in G$, proving $H$ is normal. 
<span style="float: right;">$\square$</span>

</div>

This normalcy condition might look pretty random, but it becomes very strong when we also use the fact that $|\Cl(x)|$ divides $|G|$.

<div class="compact" markdown>

***Corollary.*** Let $G$ be a finite group and $N$ a proper normal subgroup. Then there exist divisors $d_1, \ldots, d_n$ of $|G|$ such that $|N| = d_1 + \ldots + d_n$.

*Proof.* Write $N$ as a union of conjugacy classes and take the cardinal. Since the classes are pairwise disjoint, we simply need to add their sizes.
<span style="float: right;">$\square$</span>

</div>

***Remark.*** Note that at least one of those divisors must be $1$, corresponding to the conjugacy class of $\{e\}$. In general, each $1$ in that sum corresponds to a central element.

## G acts on subgroups by conjugation