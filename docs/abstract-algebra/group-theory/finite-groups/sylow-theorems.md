# Groups and Prime Powers

## Introduction

***Definition.*** A group $G$ is called a *$p$-group* if the order of every element is a power of $p$. In other words, for any $x \in G$ there is some $n > 0$ such that $x^{p^n} = e$. Abelian $p$-groups are sometimes called *$p$-primary* or just *primary* in light of the primary decomposition from the theory of rings and modules.

<div class="compact" markdown>
***Theorem.*** A finite group is a $p$-group if and only if its order is a power of $p$.
    
*Proof.* Let $G$ be a finite $p$-group and suppose there is some other prime $q$ dividing $|G|$. By Cauchy's theorem, there is an element $x \in G$ such that $|x| = q$, contradicting the fact that $G$ is a $p$-group.

For the converse, note that the order of any element divides the order of $G$, and hence must be a power of $p$ if $|G|$ is. 
<span style="float: right">$\square$</span>
</div>

Clearly, every subgroup of a $p$-group is a $p$-group as well. What about quotients?

<div class="compact" markdown>
***Theorem.*** Let $G$ be a $p$-group and $N$ a normal subgroup. Then, $G/N$ is a $p$-group as well. In particular, if the index of $N$ is finite, it must be a power of $p$.

*Proof.* Consider the projection map $\pi: G \to G/N$. Every $y \in G/N$ is the image of some $x \in G$, i.e., $\pi(x) = y$. Moreover, there is a power $p^n$ of $p$ such that $x^{p^n} = e$, whence 
<div>$$ y^{p^n} = \pi(x)^{p^n} = \pi(x^{p^n}) = \pi(e) = e $$</div>
It easily follows that $G/N$ is a $p$-group.
<span style="float: right">$\square$</span>
</div>

<div class="compact" markdown>
***Corollary.*** Let $G$ be a $p$-group and $H$ a subgroup of finite index. Then, the index of $H$ is a power of $p$.

*Proof.* Let $K = H_G$ be the core of $H$. Since the index of $H$ is finite, so is the index of $K$. Moreover, $K$ is a normal subgroup and hence $|G : K|$ is a power of $p$. However, $|G : H|$ divides $|G : K|$, therefore $|G : H|$ is a power of $p$ as well. 
<span style="float: right">$\square$</span>
</div>

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

## The Sylow Theorems

***Definition.*** Let $N$ be a positive integer and $N = p^nm$ such that $p$ is prime, $m$ is a positive integer, and $p \nmid m$. We will call $p^n$ the $p$-part of $N$, and it is the highest power of $p$ that divides $N$. 

***Definition.*** Suppose $G$ is a finite group and $H$ is a subgroup such that $|H|$ is the $p$-part of $|G|$. Then, we will call $H$ a *Sylow $p$-subgroup* of $G$. The family of all such subgroups is denoted by $\Syl_p(G)$.

### The first Sylow theorem

<div class="compact" markdown>
***Theorem.*** Any finite group $G$ has Sylow $p$-subgroups for all prime factors $p \mid |G|$. 

*Proof.* We will proceed by induction on the order of $G$, assuming that $p$ is a prime factor. If $|G| = p$, the result is obvious since $G \cong C_p$. Otherwise, assume the theorem holds for all groups having order smaller than $|G|$. Let's look at the class equation.
<div>$$ |G| = |Z(G)| + \sum |G : C(x)| $$</div>
If there is some $x$ such that $p \nmid |G : C(x)|$, simply consider any Sylow $p$-subgroup of $C(x)$, since it must be a Sylow $p$-subgroup of $G$ as well. If there is no such $x$, all terms $|G : C(x)|$ in the class equation are divisible by $p$, and hence so is $|Z(G)|$. Thus, we find an element $g \in Z(G)$ having $|g| = p$. Letting $N = \langle g \rangle$, we easily get $N \triangleleft G$ since $g$ is central. Applying the induction hypothesis to $G/N$, we get a subgroup $S$ of $G/N$ with $|S| = p^{n - 1}$, where $n = v_p(|G|)$. At the same time, there is some $S' \le G$ such that $S'/N = S$, and hence $|S'| = |S||N| = p^n$. Thus, $S'$ is a Sylow $p$-subgroup of $G$.
<span style="float: right">$\square$</span>
</div>

### The second Sylow theorem

<div class="compact" markdown>
***Theorem.*** Let $G$ be a finite group, $H$ a $p$-subgroup of $G$ and $S$ a Sylow $p$-subgroup. Then, there exists an element $g \in G$ such that $g^{-1}Hg \le S$. In particular, all Sylow $p$-subgroups of $G$ are conjugate to eachother, and therefore isomorphic.

*Proof.* Let $H$ act by left translation on $G/S$, the family of left cosets of $S$. Moreover, define $A$ to be the subfamily of cosets fixed by every element of $H$. Since $H$ is a $p$-subgroup, it follows that
<div>$$ |A| \equiv |G/S| \equiv |G : S| \pmod p $$</div> 
Naturally, the index of $S$ is not divisible by $p$ because $S$ is Sylow. Consequently, $A$ is non-empty, and hence there is some coset $gS$ such that $hgS = gS$ for all $h \in H$. This relation is equivalent to $g^{-1}hgS = S$, that is, $g^{-1}hg \in S$ for all $h \in H$. In conclusion, $g^{-1}Hg \le S$ for some $g \in G$.

It remains to prove that any two Sylow $p$-subgroups are conjugate. If $S_1, S_2 \in \Syl_p(G)$, then there is some $g \in G$ such that $g^{-1}S_1g \le S_2$. Note, however, that $|g^{-1}S_1g| = |S_1| = |S_2|$, and therefore we get $g^{-1}S_1g = S_2$.
<span style="float: right">$\square$</span>
</div>


### The third Sylow theorem


<div class="compact" markdown>
***Theorem.*** Let $G$ be a finite group of order $|G| = p^nm$, where $p \nmid m$, and $n_p = |\Syl_p(G)|$. Then
<ol>
    <li> $n_p = |G : N_G(S)|$, where $S$ is any Sylow $p$-subgroup. </li>
    <li> $n_p \mid m = |G : S|$, where $S$ is any Sylow $p$-subgroup. </li>
    <li> $n_p \equiv 1 \pmod p$ </li>
</ol>

*Proof.* For the first result, note that the Sylow $p$-subgroups are precisely the conjugates of $S$, and hence $n_p$ is equal to $|\Cl(S)| = |G : N_G(S)|$. The second proposition follows from
<div>$$ |G : S| = |G : N_G(S)||N_G(S) : S| = n_p \cdot |N_G(S) : S| $$</div>
<span style="float: right">$\square$</span>
For the last result, fix an element $P \in \Syl_p(G)$ and let $P$ act on $\Syl_p(G)$ by conjugation. Moreover, define $X$ to be $\Syl_p(G)^P$, the set of Sylow $p$-subgroups fixed by all elements of $P$ under conjugation. Then, we know 
<div>$$ |X| \equiv |\Syl_p(G)| \pmod p $$</div>
and hence it suffices to prove that $|X| = 1$.
</div>


### Sylow for infinite groups

I'm sorry. This chapter is supposed to be about finite groups.

***Definition.*** A subgroup $H$ of a group $G$ is called a *Sylow $p$-subgroup* if it is a maximal $p$-subgroup, i.e., it is a $p$-subgroup and is maximal with respect to inclusion among all $p$-subgroups in $G$.

<div class="compact" markdown>
***Theorem.*** If $H$ is a Sylow $p$-subgroup of $G$, and $n_p = |\Cl(H)|$ is finite, then every Sylow $p$-subgroup is conjugate to $H$, and $n_p \equiv 1 \pmod p$.

*Proof.*
<span style="float: right">$\square$</span>
</div>