# Groups and Primes

## Introduction



***Definition.*** A group $G$ is called a *$p$-group* if the order of every element is a power of $p$. In other words, for any $x \in G$ there is some $n > 0$ such that $x^{p^n} = e$. Abelian $p$-groups are sometimes called *$p$-primary* or just *primary* in light of the primary decomposition from the theory of rings and modules.

The following result will be our first application of Cauchy's theorem.

<div class="compact" markdown>
***Theorem.*** A finite group is a $p$-group if and only if its order is a power of $p$.
    
*Proof.* Let $G$ be a finite $p$-group and suppose there is some other prime $q$ dividing $|G|$. By Cauchy's theorem, there is an element $x \in G$ such that $|x| = q$, contradicting the fact that $G$ is a $p$-group.

For the converse, note that the order of any element divides the order of $G$, and hence must be a power of $p$ if $|G|$ is. 
<span style="float: right">$\square$</span>
</div>

In order to understand $p$-groups better, let's look at how they interact with the concepts one commonly encounters when working with groups. It should be pretty clear that being a $p$-group is preserved under the subgroup relation.

***Theorem.*** Suppose $G$ is a $p$-group. Then, every subgroup of $G$ is a $p$-group too.

What about quotients?

<div class="compact" markdown>
***Theorem.*** Let $G$ be a $p$-group and $N$ a normal subgroup. Then, $G/N$ is a $p$-group as well. In particular, if the index of $N$ is finite, it must be a power of $p$.

*Proof.* Consider the projection map $\pi: G \to G/N$. Every $y \in G/N$ is the image of some $x \in G$, i.e., $\pi(x) = y$. Moreover, there is a power $p^n$ of $p$ such that $x^{p^n} = e$, whence 
<div>$$ y^{p^n} = \pi(x)^{p^n} = \pi(x^{p^n}) = \pi(e) = e $$</div>
It easily follows that $G/N$ is a $p$-group.
<span style="float: right">$\square$</span>
</div>

<div class="compact" markdown>
***Corollary.*** Let $G$ be a $p$-group and $H$ a subgroup of finite index. Then, the index of $H$ is a power of $p$.

*Proof.* Let $K = H_G$ be the normal core of $H$. Since the index of $H$ is finite, so is the index of $K$. Moreover, $K$ is a normal subgroup and hence $|G : K|$ is a power of $p$. However, $|G : H|$ divides $|G : K|$, therefore $|G : H|$ is a power of $p$ as well. 
<span style="float: right">$\square$</span>
</div>

Taking quotients is the same as looking at images of homomorphisms (according to the first isomorphism theorem). Thus, we automatically get the following result as well.

***Corollary.*** Let $f: G \to G'$ be a group homomorphism such that $G$ is a $p$-group. Then, its image $\im(f)$ is a $p$-group too.

So far we have looked at ways of restricting $p$-groups to other $p$-groups (subgroups and quotients). Can we extend them to $p$-groups just as easily? The answer is yes.

<div class="compact" markdown>
***Theorem.*** Suppose that in the following exact sequence, $K$ and $H$ are $p$-groups.
<div>$$ 1 \to K \to G \to H \to 1$$</div>
Then, $G$ must be a $p$-group as well.

*Proof.* Let $g$ be any element of $G$ and $f$ the epimorphism from $G$ to $H$. Then, $f(g) \in H$ and hence there is some $p^a$ such that $f(g)^{p^a} = e$, whence $g^{p^a} \in K$. However, $K$ is a $p$-group, and therefore there is some $p^b$ such that $(g^{p^a})^{p^b} = g^{p^{a + b}} = e$ as desired. 
<span style="float: right">$\square$</span>
</div>

***Corollary.*** Direct products, semidirect products, and all other group extensions we hold dear neatly preserve $p$-groups.

### The $p$-group action lemma
<div class="compact" markdown>
***Lemma.*** Suppose $G$ is a $p$-group acting on a non-empty finite set $\Lambda$. Then,
<div>$$ |\Lambda^G| \equiv |\Lambda| \pmod p $$</div>
In particular, if $p \nmid \Lambda$, then $\Lambda^G$ is non-empty.

*Proof.* Remember the class formula
<div>$$ |\Lambda| = |\Lambda^G| + \sum{|G : \Stab_G(\lambda)|} $$</div> where the sum is taken over a transversal of the non-trivial orbits. Since $\Lambda$ is finite, so are the indices $|G : \Stab_G(\lambda)|$. Using the fact that $G$ is a $p$-group, the previous theorem shows that all $|G : \Stab_G(\lambda)|$ are divisible by $p$. Applying this to the class equation, we conclude
<div>$$ |\Lambda^G| \equiv |\Lambda| \pmod p $$</div>
as desired.
<span style="float: right">$\square$</span>
</div>

