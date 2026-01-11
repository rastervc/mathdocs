# The Sylow Theorems

***Definition.*** Let $G$ be a finite group with $|G| = p^nm$, $p \nmid m$. We will call $p^n$ the *$p$-part* of $|G|$, and any subgroup $H \le G$ having $|H| = p^n$ a *Sylow $p$-subgroup* of $G$.

## The first Sylow theorem

<div class="compact" markdown>
***Theorem.*** Let $G$ be a finite group. Then, $G$ has Sylow $p$-subgroups for all primes $p$.

*Proof 1.* We will proceed by induction on the order of $G$, assuming that $p$ is a prime factor. If $|G| = p$, the result is obvious since $G \cong C_p$. Otherwise, assume the theorem holds for all groups having order smaller than $|G|$. Let's look at the class equation.
<div>$$ |G| = |Z(G)| + \sum |G : C(x)| $$</div>
If there is some $x$ such that $p \nmid |G : C(x)|$, simply consider any Sylow $p$-subgroup of $C(x)$, since it must be a Sylow $p$-subgroup of $G$ as well. If there is no such $x$, all terms $|G : C(x)|$ in the class equation are divisible by $p$, and hence so is $|Z(G)|$. Thus, we find an element $g \in Z(G)$ having $|g| = p$. Letting $N = \langle g \rangle$, we easily get $N \triangleleft G$ since $g$ is central. Applying the induction hypothesis to $G/N$, we get a subgroup $S$ of $G/N$ with $|S| = p^{n - 1}$, where $n = v_p(|G|)$. At the same time, there is some $S' \le G$ such that $S'/N = S$, and hence $|S'| = |S||N| = p^n$. Thus, $S'$ is a Sylow $p$-subgroup of $G$.
<span style="float: right">$\square$</span>

*Proof 2.* Suppose there are finite groups with $p$-part $p^n$ which do not have Sylow $p$-subgroups. Let $G$ be minimal with respect to this property and consider the family of subsets of size $p^n$.
<div>$$ A = \{S \subset G \mid |S| = p^n\} $$</div>
Since $|A| = {|G| \choose p^n}$, the lemma below tells us that $|A|$ is not divisible by $p$. Moreover, 
<div>$$ |A| = \sum |\mathcal{O}| $$</div>
where the sum is taken over all orbits. Consequently, there must be some orbits whose cardinals are not multiples of $p$. Let $\Orb(S)$ be one one of them, where $S \in A$. By the Orbit-Stabilizer theorem,
<div>$$ |\Stab(S)| = \frac{|G|}{|\Orb(S)|} = p^nd $$</div>
where $p \nmid d$, meaning $\Stab(S)$ also has $p$-part $p^n$. Moreover, the stabilizer is strictly contained in $G$ (Fix some $s \in S$. If $xS = S$, then $xs \in S$. When this happens for every $x \in G$, it follows that $xs \in S$ for every $x \in G$, whence $G = S$). Since $G$ was chosen to be minimal, the stabilizer of $S$ must contain Sylow $p$-subgroups. However, these subgroups are Sylow $p$-subgroups for $G$ as well, contradicting our assumption! In conclusion, all finite groups with $p$-part $p^n$ have Sylow $p$-subgroups, and since both $p$ and $n$ are arbitrary, this holds in all settings.
<span style="float: right">$\square$</span>
</div>



<div class="compact" markdown>
***Lemma.*** Let $p$ be a prime and $n, m$ positive integers such that $p \nmid m$. Then
<div>$$ {p^nm \choose p^n} \equiv m \pmod p $$</div>
*Proof.*
<span style="float: right">$\square$</span>
</div>

## The second Sylow theorem

## The third Sylow theorem

## Sylow for infinite groups

I'm sorry. This chapter is supposed to be about finite groups.

***Definition.*** A subgroup $H$ of a group $G$ is called a *Sylow $p$-subgroup* if it is a maximal $p$-subgroup, i.e., it is a $p$-subgroup and is maximal with respect to inclusion among all $p$-subgroups in $G$.

<div class="compact" markdown>
***Theorem.*** If $H$ is a Sylow $p$-subgroup of $G$, and $n_p = |\Cl(H)|$ is finite, then every Sylow $p$-subgroup is conjugate to $H$, and $n_p \equiv 1 \pmod p$.

*Proof.*
<span style="float: right">$\square$</span>
</div>