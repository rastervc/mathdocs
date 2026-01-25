# Nilpotent Groups

## Introduction

***Definition.*** Let $G$ be a group. A normal series $1 = G_0 \le \cdots \le G_n = G$ is said to be a *central series* if $G_{k + 1}/G_k \le Z(G/G_k)$ for all $0 \le k < n$. If $G$ has a central series, it is said to be *nilpotent*. The length of its shortest central series is called the *nilpotency class* of the group.

<div class="compact" markdown>
***Theorem.*** Suppose $G$ is a group. Then, a normal series $1 = G_0 \le \cdots \le G_n = G$ is central if and only if $[G, G_{k + 1}] \le G_k$ for all $0 \le k < n$.

*Proof.* We need to show that the conditions $G_{k + 1}/G_k \le Z(G/G_k)$ and $[G, G_{k + 1}] \le G_k$ are equivalent. The first condition is equivalent to every $xG_k$ with $x \in G_{k + 1}$ commuting with every element of $G/G_k$, that is, every commutator of the form $[xG_k, yG_k]$ with $x \in G_{k + 1}$ and $y \in G$ being trivial. This is the same as $[xG_k, yG_k] = G_k$, which is equivalent to $[x, y] \in G_k$. This holds for all of the aforementioned $x$ and $y$, hence the first condition is equivalent to $[G, G_{k + 1}] \le G_k$ as desired.
<span style="float: right">$\square$</span>
</div>

<div class="compact" markdown>
***Theorem.*** Every nilpotent group is solvable.

*Proof.* Suppose $G$ is a nilpotent group and $1 \le G_0 \le \cdots \le G_n = G$ is a central series. Then, it is subnormal, and since $[G_{k + 1}, G_{k + 1}] \le [G, G_{k + 1}] \le G_k$, we find all factors are abelian. Thus, it must be an abelian series for $G$.
<span style="float: right">$\square$</span>
</div>

<div class="compact" markdown>
***Theorem.*** Every abelian group is nilpotent.

*Proof.* This is trivial; the series $1 \le G$ is central, since $G = Z(G)$.
<span style="float: right">$\square$</span>
</div>

The following fact is ocassionaly useful.

<div class="compact" markdown>
***Theorem.*** Suppose $G$ is a nilpotent group, and $N$ is a non-trivial normal subgroup of $G$. Then, the intersection $N \cap Z(G)$ is non-trivial. In particular, the center of $G$ is non-trivial.

*Proof.* We will prove by contradiction. Suppose, on the contrary, that $N \cap Z(G) = 1$. Let's consider a central series $1 = G_0 \le \cdots \le G_n = G$, and show by induction that $N \cap G_k = 1$ for all $0 \le k \le n$. The base case $N \cap G_0 = 1$ is obvious. Now, suppose the statement is true for a fixed value $0 \le k < n$. Let $x \in N \cap G_{k + 1}$ and $g \in G$. Since $G_{k + 1}/G_k \le Z(G/G_k)$, we have 
<div>$$xgG_k = xG_kgG_k = gG_kxG_K = gxG_k$$</div>
whence $[x, g] \in G_k$. At the same time, $[x, g]$ must be in $N$ since $x$ is $N$, thus $[x, g] = 1$. It follows that $x \in Z(G) \cap N = 1$, and hence $N \cap G_{k + 1}$ as desired. Thus, the induction step holds as well, and for $k = n$ we find $G \cap N = 1$. This clearly is a contradiction. 
<span style="float: right">$\square$</span>
</div>

## Other Central Series Conditions

The following boring fact will be the main theme of lower and upper central series.

<div class="compact" markdown>
***Theorem.*** Let $G$ be a nilpotent group and $1 = G_0 \le \cdots \le G_n = G$ a central series. Then, we find $G_1 \le Z(G)$ and $G' \le G_{n - 1}$.

*Proof.* By the definition of central series, $G_1/G_0 \le Z(G/G_0)$. Since $G_0$ is trivial, this simplifies to $G_1 \le Z(G)$ as desired. For the second inclusion, the other interpretation of central series gives us $[G, G_{n}] \le G_{n - 1}$, that is, $[G, G] = G' \le G_{n - 1}$. 
<span style="float: right">$\square$</span>
</div>

### The Lower Central Series

### The Upper Central Series

## The Frattini Subgroup

## The Fitting Subgroup