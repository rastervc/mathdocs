# Introduction to Algebraic Structures

## Identities

***Definition.*** Let $X$ be a magma and $e \in X$ one of its elements. We will call $e$ a *left identity* in $X$ if and only if $ex = x$ for all $x \in X$. We similarly define *right identities*. An element $e \in X$ that is both a left and a right identity is called a *two-sided identity*.

***Definition.*** Let $X$ be a magma and $e \in X$ one of its elements. Suppose that for every $x \in X$, at least one of the equalities $ex = x$ and $xe = x$ holds. Then we call $e$ an *ultraweak identity* in $X$.

***Theorem.*** Suppose $X$ is a magma and $e$ is a left identity and $e'$ is a right identity. Then $e = e'$, and together they are a two-sided identity in $X$.

*Proof.* Using $ex = x$ we find $ee' = e'$. Using $xe' = x$ we find $ee' = e$. We now easily get the desired equality $e = ee' = e'$. <span style="float:right;">$\square$</span>

***Theorem.*** Suppose $X$ is a magma, $e$ is an identity, and $e'$ is an ultraweak identity. Then $e = e'$.

*Proof.* We know that at least one of $ee' = e$ and $e'e = e$ is true since $e'$ is an ultraweak identity. Using the fact that $e$ is an identity, we find $ee' = e'e = e'$ and therefore $e = e'$ as desired. <span style="float:right;">$\square$</span>

This is a very important result. If a magma contains a two-sided identity, then there are no other identities. Not even one-sided or ultraweak.

***Definition.*** A semigroup which contains a two-sided identity is called a *monoid*.

## Inverses

***Definition.*** Let $X$ be a magma and suppose $e$ is an ultraweak identity in $x$. We call $y \in X$ a *two-sided $e$-inverse* of $x \in X$ iff $xy = yx = e$. In this case, we say $x$ is *two-sided e-invertible*.

***Definition.*** Let $X$ be a magma and suppose $e$ is an ultraweak identity in $X$. We call $y \in X$ a *left $e$-inverse* of $x \in X$ iff $yx = e$. In this case, we say $x$ is *left $e$-invertible*. We define *right inverses* and *right invertability* in a similar fashion.

<div class="center-table" markdown>

|                        |  two-sided inverses  |  one-sided inverses  |  ultraweak inverses  |
| ---------------------- | :------------------: | :------------------: | :------------------: |
| **two-sided identity** | :lucide-check:       | :lucide-check:       | :lucide-check:       |
| **one-sided identity** | :lucide-check:       | If same side         | :lucide-x:           |
| **ultraweak identity** | :lucide-check:       | :lucide-x:           | :lucide-x:           |

</div>

## Weak inverses

***Definition.***
Let $S$ be a semigroup and $x \in S$ an element. We call $y \in S$ a *weak inverse* of $x$ if and only if $xyx = x$. In this case, we say $x$ is *regular*.

***Definition.***
Let $S$ be a semigroup and $x \in S$ an element. We call $y \in S$ a *weak left inverse* of $x$ if and only if $yx^2 = x$. In this case, we say $x$ is *left regular*. We define *weak right inverses* and *weak right invertability* in a similar fashion.

***Theorem.*** Let $S$ be a semigroup and $x, y, z \in S$ such that $y$ is a weak left inverse of $x$ and $z$ is a weak right inverse of $x$. Then $x$ is regular, and $y$ and $z$ are both weak inverses of $x$. 

*Proof.* From $yx^2 = x$ we find $yx^2z = xz$ by multiplying with $z$ on the right side. Then we find $xz = y(x^2z) = yx$ using the fact that $z$ is a weak right inverse. Consequently, we get $xyx = xxz = x$, that is, $x$ is regular and $y$ is a weak inverse. Similarly, we find $xzx = yxx = x$, which means that $z$ is a weak inverse too. <span style="float:right;">$\square$</span>

For this reason, left/right regularity is sometimes called *strong regularity*.

***Theorem.*** Let $S$ be a semigroup and $x, y \in S$ such that $y$ is the weak inverse of $x$. Then $xy$ and $yx$ are idempotent elements of $S$.

***Theorem.*** Let $M$ be a monoid and $x$ one of its elements.

1. If $x$ is left regular and right cancellable, then it is left invertible.
2. If $x$ is right regular and left cancellable, then it is right invertible.
3. If $x$ is regular and cancellable, then it is invertible.

*Proof.* In the first case, suppose $y$ is the weak left inverse of $x$. Then $yx^2 = x$, whence $yx = e$ by right cancellability. The second result may be proven similarly. For the third proposition, suppose $y$ is a weak inverse of $x$. Then $xyx = x$. Cancelling on the left side gives us $yx = e$, whereas cancelling on the right side outputs $xy = e$. Together, the two relations show that $y$ is the inverse of $x$,

## Cancellable Elements

## Idempotent Elements

## Nilpotent Elements

## Roots of Unity