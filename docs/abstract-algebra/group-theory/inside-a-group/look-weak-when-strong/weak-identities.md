# Weak Inverses

## Lateral and ultraweak identities

***Definition.*** Let $X$ be a magma and $e \in X$ one of its elements. We will call $e$ a *left identity* in $X$ if and only if $ex = x$ for all $x \in X$. We similarly define *right identities*. Left and right identities are called *lateral identities*. An element $e \in X$ that is both a left and a right identity is called a *two-sided* or *bilateral identity*.

***Definition.*** Let $X$ be a magma and $e \in X$ one of its elements. Suppose that for every $x \in X$, at least one of the equalities $ex = x$ and $xe = x$ holds. Then, $e$ is said to be an *ultraweak identity* in $X$.

<div class="compact" markdown>
***Theorem.*** Consider a magma $X$ and suppose $e$ is a left identity, whereas $e'$ is a right identity. Then, we find $e = e'$, and so they must both be (equal) two-sided identities.

*Proof.* Using $ex = x$ we get $ee' = e'$. Using $xe' = x$ we get $ee' = e$. Thus, $e = e'$ is both a left and right identity, making it two-sided.
<span style="float:right;">$\square$</span>
</div>

<div class="compact" markdown>
***Theorem.*** Suppose $X$ is a magma, $e$ is an identity, and $e'$ is an ultraweak identity. Then, $e = e'$.

*Proof.* We know that at least one of $ee' = e$ and $e'e = e$ is true since $e'$ is an ultraweak identity. Using the fact that $e$ is an identity, we find $ee' = e'e = e'$, and therefore $e = e'$ as desired. 
<span style="float:right;">$\square$</span>
</div>

## Idempotent elements

***Defintion.*** Suppose $X$ is a magma. Then, an element $x \in X$ is *idempotent* if $x^2 = x$.

<div class="compact" markdown>
***Theorem.*** Let $X$ be a finite magma and $a$ an element of $X$. Then, there is a power of $a$ that is idempotent, i.e., there exists some $n > 0$ such that $a^{2n} = a^n$.

*Proof.* Consider the powers of $a$. Since $X$ is finite, they must repeat at some point. In other words, there exist $s > t > 0$ such that $a^s = a^t$. Moreover, we get $a^{s^k} = a^{t^k}$ for any $k > 0$. Choose $k$ such that $s^k \ge 2t^k$ and define $u = a^k$, $v = b^k$. We will prove that $a^{u - v}$ is idempotent. Indeed, 
<div>$$a^{2(u - v)} = a^{u - 2v} \cdot a^u = a^{u - 2v} \cdot a^v = a^{u - v}$$</div>
as desired.
<span style="float: right;">$\square$</span>
</div>
