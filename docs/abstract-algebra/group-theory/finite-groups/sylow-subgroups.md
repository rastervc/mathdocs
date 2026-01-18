# Sylow Subgroups

## Introduction

***Definition.*** Let $N$ be a positive integer and $N = p^nm$ such that $p$ is prime, $m$ is a positive integer, and $p \nmid m$. We will call $p^n$ the $p$-part of $N$, and it is the highest power of $p$ that divides $N$. 

***Definition.*** Suppose $G$ is a finite group and $H$ is a subgroup such that $|H|$ is the $p$-part of $|G|$. Then, we will call $H$ a *Sylow $p$-subgroup* of $G$. The family of all such subgroups is denoted by $\Syl_p(G)$.

<div class="compact" markdown>
***Theorem.*** Let $f: G \to G'$ be an epimorphism and $S$ a Sylow $p$-subgroup of $G$. Then, $f(S)$ is a Sylow $p$-subgroup of $G'$.

*Proof.*
<span style="float: right">$\square$</span>
</div>


## The Sylow theorems

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
For the last result, fix an element $S \in \Syl_p(G)$ and let $S$ act on $\Syl_p(G)$ by conjugation. Moreover, define $X$ to be $\Syl_p(G)^S$, the set of Sylow $p$-subgroups fixed by all elements of $S$ under conjugation. Then, we know 
<div>$$ |X| \equiv |\Syl_p(G)| \pmod p $$</div>
and hence it suffices to prove that $|X| = 1$. Suppose $gSg^{-1}$ is fixed by every $x \in G$, that is, $xgS(xg)^{-1} = gSG^{-1}$. This is equivalent to $g^{-1}xgS(g^{-1}xg)^{-1} = S$, which happens iff every $g^{-1}xg$ is in the normalizer of $S$, i.e., $g^{-1}Sg \subset N_G(S)$. Note that $S$ and $gSg^{-1}$ are both Sylow $p$-subgroups of $N_G(S)$, and hence conjugate in $N_G(S)$ (this is not obvious because we don't know if $g$ is in the normalizer). However, $S$ is a normal subgroup of its normalizer, and therefore $S$ and $gSg^{-1}$ coincide. Thus, $S$ is the only element of $X$. 
<span style="float: right">$\square$</span>
</div>

### The secret Sylow theorem

<div class="compact" markdown>
***Lemma.*** Let $G$ be a finite $p$-group and $H$ a proper subgroup. Then, there is some subgroup $K$ such that $|H : K| = p$.

*Proof.* Let's start by proving that $H < N_G(H)$. Suppose the contrary happens, that is, $H = N_G(H)$. Letting $H$ act on $\Cl(H)$, the $p$-group action lemma shows that 
<div>$$ |\Cl(H)^H| \equiv |\Cl(H)| = |G : N_G(H)| = |G : H| \equiv 0 \pmod{p} $$</div>
A conjugate $xHx^{-1}$ is fixed by all $h \in H$ when $hxH(xh)^{-1} = xHx^{-1}$, that is, when 
<div>$$x^{-1}hxH(x^{-1}hx)^{-1} = H$$</div>
This is equivalent to $x^{-1}hx \in N_G(H) = H$ for all $h \in H$, whence $x^{-1}Hx \subset H$. But the two subgroups have the same cardinal, therefore we find $H = xHx^{-1}$. Thus, $H$ is the only element of $\Cl(H)$ fixed by all elements of $H$, and hence $1 \equiv 0 \pmod{p}$, a clear contradiction.

Now that we know $H$ is strictly contained in its normalizer, let $\pi: N_G(H) \to N_G(H)/H $ be the natural projection. Since $N_G(H)/H$ is a finite $p$-group, it has $C_p$ as a subgroup. Let's consider the group $K = \pi^{-1}(H)$. Then $|K| = |H||C_p| = p|H|$ as desired, and $H < K$ since $\ker(\pi) = H$.
<span style="float: right">$\square$</span>
</div>

<div class="compact" markdown>
***Theorem.*** Let $G$ be a finite group with $p$-part $p^n$ and consider a $p$-subgroup $H$, say of order $p^k$. Then, we find a tower of $p$-subgroups $H_0 \triangleleft H_1 \triangleleft \cdots \triangleleft H_n$ such that $H_k = H$ and $|H_i| = p^i$ for all $0 \le i \le n$. In particular, every $p$-subgroup is contained in a Sylow $p$-subgroup.

*Proof.* We will first prove the last statement, namely that $H$ is contained in a Sylow $p$-subgroup. Fix some $S \in \Syl_P(G)$, whose existence is assured by the first Sylow theorem. The second Sylow theorem shows there is some $g \in G$ such that $g^{-1}Hg \le S$, which is equivalent to $H \le gSg^{-1}$. Clearly, $gSg^{-1}$ is a Sylow $p$-subgroup, hence we can simply take it to be $H_n$. To find $H_{k + 1}$, simply apply the above lemma to $H_k$ as a subgroup of $H_n$. Proceed inductively to find all $H_i$ for $k < i < n$. To construct $H_i$ for $0 \le i < k$, repeatedly apply the lemma in $H_k$ starting from $H_0 = \{e\}$. In order to prove that $H_i \triangleleft H_{i + 1}$ for all $0 \le i < n$, note that $|H_{i + 1} : H_i| = p$, where $p$ is the single (and hence smallest prime) dividing $|H_{i + 1}|$.
<span style="float: right">$\square$</span>
</div>


## The $p$-core

***Definition.*** Let $G$ be a finite group. We define its *$p$-core* to be the intersection of all Sylow $p$-subgroups, denoted as below.
<div>$$ O_p(G) = \bigcap_{S \in \Syl_p(G)}{S} $$</div>

## Sylow stuff in infinite groups

I am deeply sorry. This chapter is supposed to be about finite groups. Let's start with some preliminaries.

***Definition.*** A subgroup $H$ of a group $G$ is called a *Sylow $p$-subgroup* if it is a maximal $p$-subgroup, i.e., it is a $p$-subgroup and is maximal with respect to inclusion among all $p$-subgroups in $G$.

***Remark.*** This definition generalizes the finite case, that is, it is compatible with the old definition.

A simple but useful property of Sylow subgroups in the finite case is that their index and orders are coprime. More precisely, if $G$ is a finite group and $|G| = p^nm$ with $p \nmid m$, then all Sylow $p$-subgroups are of order $p^n$ and all have index $m$, which is not multiple of $p$ by definition. It is natural to ask whether this is true in the infinite as well.

<div class="compact" markdown>
***Theorem.*** Let $G$ be a group and $S$ a Sylow $p$-subgroup with finite index. Then, $p$ does not divide the index $|G : S|$.

*Proof.* Let $K = S_G$ be the normal core of $S$. Then, $K$ is of finite index as well, and hence $|G : K|$ is a finite group. Let $\pi: G \to G/K$ be the projection map. We find that $\pi(S) = S/K$ is a Sylow $p$-subgroup of $G/K$. Indeed, if there were some $p$-subgroup $S' \supsetneq S/K$, then $\pi^{-1}(S')$ would have been a greater $p$-subgroup because it is the extension of $S'$ by $K$. Since $S/K$ is Sylow in the finite group $G/K$, its index is not divisible by $p$, and hence
<div>$$|G/K : S/K| = |G : S| \not\equiv 0 \pmod{p}$$</div>
as desired.
<span style="float: right">$\square$</span>
</div>

<div class="compact" markdown>
***Theorem.*** If $S$ is a Sylow $p$-subgroup of $G$, and $n_p = |\Cl(S)|$ is finite, then every Sylow $p$-subgroup is conjugate to $S$, and $n_p \equiv 1 \pmod p$.

*Proof.* TODO
<span style="float: right">$\square$</span>
</div>