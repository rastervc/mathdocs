# Uncountable Sums

## Introduction

Thus far, we have seen that finite sums are easy, and countably infinite sums are manageable. What happens when we try summing uncountably many values? Perhaps surprisingly, there are multiple ways to answer this question, some are more useful than others: integration is one such solution, and a lucrative one indeed. In this section, we will focus on the most intuitive, if limited, approach, which also serves as a primer for a trick used in measure theory.

The idea will be to take a bottom-up approach, gradually building our notion of summation for larger and larger classes. Let's start with nonnegative real numbers, since they have a noteworthy property. The more terms you add, the bigger the sum should be. This means that we won't encounter any problems with existence, since the series will follow a stable pattern. This upward trend will also give us a natural way to define the sum as the supremum of its "sub-sums", obtained by selecting finitely many terms.

<div class="compact" markdown>
#### Definition. (Lebesgue sums, nonnegative case)
Let $\{a_i\}_{i \in I}$ be an indexed family of nonnegative real numbers. Then, we define their sum to be 
<div>$$ \sum_{i \in I}a_i = \sup_{J \subset I \text{ finite}}{ \sum_{j \in J} a_{j}} $$</div>
We will call this *Lebesgue summation*. The indexing set $I$ does not necessarily have to be uncountable for the definition to be valid.
</div>

<div class="compact" markdown>
#### Remark. (Naming convention)
I am not convinced the term *Lebesgue summation* is official. It is, however, reasonable, since we are basically following the definition of the Lebesgue integral, but applied to regular sums. Most mathematicians should understand what is meant by *Lebesgue summation* without detailed explanations. Moreover, the concepts we are studying in this section are indeed well-known; they just do not have a standardized name (that I know of).
</div>

Since the Lebesgue sum is just a supremum in the nonnegative case, it will always be well-defined. In the unfortunate event it equals infinity, we will say the sum *diverges*. If it's finite, it *converges*.

Suppose we allowed some $a_i$ to be negative in the above expression. Then, any sum excluding it would be greater, and hence the final sum wouldn't include it either. This makes the definition fundamentally incompatible with negative numbers. So, how will we add arbitrary real numbers? Here's the trick: we will extract the negative elements beforehand, sum the positive and negative parts independently, and then subtract the results.

<div class="compact" markdown>
#### Definition. (Lebesgue sums, real case)
Let $\{a_i\}_{i \in I}$ be an indexed family of real numbers. We define their *positive part* to be the sequence $a_i^+ = \max(a_i, 0)$, and their *negative part* to be $a_i^- = \max(-a_i, 0)$. Finally, we define
<div>$$ \sum_{i \in I}a_i = \sum_{i \in I}a_i^+ - \sum_{i \in I}a_i^{-} $$</div>
</div>

Intuitively, the indexed family $a_i^+$ is just $a_i$ with all negative numbers replaced by $0$, while $a_i^{-}$ replaces positive numbers with $0$, and takes the absolute value of the negative ones. For each $i$, we have $a_i = a_i^+ - a_i^-$, motivating this definition.

<div class="compact" markdown>
#### Remark. (Alternative definition)
There is another, perhaps cleaner way, to define Lebesgue sums of real numbers. Define the sets
<div>$$I^+ = \{i \in I \mid a_i > 0\} \quad\text{and}\quad I^- = \{i \in I \mid a_i < 0\}$$ </div>
Then, the final sum will have the cleaner expression
<div>$$ \sum_{i \in I^+}a_i - \sum_{i \in I^-}(-a_i) $$</div>
This is nicer because we no longer have redundant zero terms.
</div>

Unlike the nonnegative case, we must now worry about whether the sum exists. If both the positive and negative parts converge, all is well, and we say the Lebesgue sum *converges*, just as before. If exactly one part diverges, the sum can still interpreted: $\infty - a = \infty$ and $a - \infty = -\infty$ for real $a$. If both parts diverge, however, the sum is ill-defined. In general, we say a sum diverges whenever it does not converge.

Having defined addition for real numbers, we can extend it to larger classes such as complex numbers and vectors by performing addition component-wise. For example, we may define their sums as follows.
<div>$$ \sum_{s \in S}z_s = \sum_{s \in S}\Re(z_s) + i\sum_{s \in S}\Im(z_s) \\ \sum_{s \in S}v_s = \left(\sum_{s \in S}\pi_1(v_s), \ldots, \sum_{s \in S}\pi_n(v_s) \right) $$</div>

## Compatibility with Infinite Series

Naturally, we might wonder if there is any backwards compatibility between Lebesgue summation and infinite series. Indeed, any reasonable generalization should satisfy this property.

As usual, we will begin with the nonnegative case.

<div class="compact" markdown>
#### Theorem. (Compatibility with infinite series, nonnegative case)
Let $\{a_n\}_{n \ge 0}$ be a sequence of nonnegative real numbers. Then, $\sum_{n \in \N}a_n = \sum_{n = 0}^\infty a_n$, including when the sums diverge.
<details class="proof" markdown>
<summary>Proof.</summary>
<div class="proof-content" markdown>
Consider the partial sums $A_n = \sum_{k = 0}^na_k$. Since they are all sub-sums, we find 
<div>$$ \sum_{n = 0}^\infty a_n = \sup_{n \ge 0} A_n \le \sup_{J \subset \N}\sum_{j \in J}a_j = \sum_{n \in \N}a_n \tag{1}$$</div>
At the same time, any sub-sum $a_{i_1} + \ldots + a_{i_r}$ with indices $i_1 < \ldots < i_r$ must be at most $A_{i_r}$. Indeed, this partial sum contains all of its terms and maybe more. Taking the supremum, we find
<div>$$ \sum_{n = 0}^\infty a_n = \sup_{n \ge 0} A_n \ge \sup_{J \subset \N}\sum_{j \in J}a_j = \sum_{n \in \N}a_n \tag{2}$$</div>
Finally, by $(1)$ and $(2)$ we get that the two sums must be equal.
</div>
</details>
</div>

We can now extend this to the general statement. Like before, using the real case component-wise helps us generalize our results to complex numbers and vectors.

<div class="compact" markdown>
#### Theorem. (Compatibility with infinite series, real case)
Let $\{a_n\}_{n \ge 0}$ be a sequence of real numbers. Then, the sum $\sum_{n \in \N}a_n$ converges if and only if the infinite series $\sum_{n = 0}^{\infty}a_n$ is absolutely convergent, and in that case, their values coincide.
<details class="proof" markdown>
<summary>Proof.</summary>
<div class="proof-content" markdown>
Let's consider the positive and negative parts $a_n^+$ and $a_n^-$. Then, using [Theorem $\forall$](#theorem-compatibility-with-infinite-series-nonnegative-case) we find
<div>$$ \sum_{n = 0}^{\infty}|a_n| = \sum_{n = 0}^{\infty}(a_n^+ + a_n^-) = \sum_{n = 0}^{\infty}a_n^+ + \sum_{n = 0}^{\infty}a_n^- = \sum_{n \in \N}a_n^+ + \sum_{n \in \N}a_n^- $$</div>
Thus, the infinite series is absolutely convergent if and only if the positive and negative parts are finite, that is, if the sum $\sum_{n \in \N}a_n$ converges. When this happens, the two versions must render the same value because 
<div> $$ \sum_{n = 0}^{\infty}a_n =  \sum_{n = 0}^{\infty}(a_n^+ - a_n^-) = \sum_{n = 0}^{\infty}a_n^+ - \sum_{n = 0}^{\infty}a_n^- = \sum_{n \in \N}a_n^+ - \sum_{n \in \N}a_n^- = \sum_{n \in \N}a_n $$</div>
</div>
</details>
</div>

If only finitely many $a_n$ are nonzero, we immediately obtain the following corollary.

<div class="compact" markdown>
#### Corollary. (Compatibility with finite sums)
If $a_1, a_2, \ldots, a_n \in \R$, then $\sum_{k \in \{1, 2, \ldots, n\}}a_k = a_1 + a_2 + \ldots + a_n$.
</div>

Here, it makes sense to require absolute convergence because Lebesgue sums have no fixed order. On the other hand, conditionally convergent sums are highly order dependent.

## Uncountable Sums are Disappointing

We finally get to see why uncountable sums are not that interesting (when defined as above).

<div class="compact" markdown>
#### Theorem. (Uncountable sums are infinite)
Let $\{a_i\}_{i \in I}$ be an uncountable family of positive numbers. Then, $\sum_{i \in I}a_i = \infty$.

<details class="proof" markdown>
<summary>Proof.</summary>
<div class="proof-content" markdown>
For $n \in \N^*$, define $A_n$ to be the set of indicies $i \in I$ for which $\frac{1}{n} \le a_i < \frac{1}{n - 1}$. In particular, $A_0$ will contain all $i$ for which $a_i \ge 1$. It is easy to see that the sets $A_n$ partition $I$, and hence at least one of them must be infinite, say $A_k$. Then, we get the inequality
<div>$$ \sum_{i \in I}a_i \ge \sum_{i \in A_k}a_i \ge \sum_{i \in J}a_i \ge \frac{1}{k}|J|$$</div>
for any finite $J \subset A_k$. Taking the supremum across all subsets of $A_k$, which get arbitrarily big in size conidering $A_k$ is infinite, we find the Lebesgue sum must diverge.
</div>
</div>

<div class="compact" markdown>
#### Corollary. (Only at most countable sums are noteworthy)
Let $\{a_i\}_{i \in I}$ be an uncountable family of real numbers such that their sum is finite. Then, at most countably many of them are nonzero. Alternatively, if every element is nonzero, we find that $I$ must be at most countable.

<details class="proof" markdown>
<summary>Proof.</summary>
<div class="proof-content" markdown>
For the sum to be finite, the sums of the positive and negative parts must both be finite. Since they consist of positive terms, both are at most countable. Thus, their union, the set of nonzero terms, is at most countable.
</div>
</div>

## Some Applications

### Discontinuities of Monotonous Functiouns

<div class="compact" markdown>
#### Theorem. (Froda's theorem on a compact interval)
A monotonous map $f: [a, b] \to \R$ has at most countably many points of discontinuity.
<details class="proof" markdown>
<summary>Proof.</summary>
<div class="proof-content" markdown>
Without loss of generality, assume the function is increasing. Otherwise, we can substitute $f$ with $-f$, which obviously preserves the set of discontinuities and makes the map increasing.

An important observation is that any discontinuity must necessarily be a jump discontinuity, since the lateral limits can be expressed as follows
<div>$$ f(x_0-) = \sup_{x < x_0}f(x) \quad\quad f(x_0+) = \inf_{x > x_0}f(x) \tag{$1$} $$</div>
and must be finite, more precisely in the interval $[f(a), f(b)]$.

If $x < y$ are two points on $[a, b]$ and there is a discontinuity at $\lambda \in (x, y)$, then 
<div>$$ f(y) - f(x) \ge f(y) - f(\lambda-) \ge f(\lambda+) - f(\lambda-) \tag{$2$} $$</div>
thanks to the relations in $(1)$. More generally, suppose there are discontinuities at the points $\lambda_1 < \ldots < \lambda_n$ between $x$ and $y$. Then, considering the midpoints $c_k = \frac{\lambda_k + \lambda_{k + 1}}{2}$, $c_0 = x$ and $c_{n} = y$ we find 
<div>$$ f(y) - f(x) = f(c_n) - f(c_{n - 1}) + \ldots + f(c_1) - f(c_0) $$</div>
which, using the simpler case $(2)$, gives the inequality
<div>$$ f(y) - f(x) \ge f(\lambda_n+) - f(\lambda_n-) + \ldots + f(\lambda_1+) - f(\lambda_1-) $$</div>

We can finally move to the main dish. Suppose $D \subset [a, b]$ is a finite set of discontinuities. The above inequality, applied to the whole interval and the points in $D$, shows
<div>$$ f(b) - f(a) \ge \sum_{\lambda \in D} (f(\lambda+) - f(\lambda-)) $$</div>
Moreover, every difference $f(\lambda+) - f(\lambda-)$ must be positive. It certainly isn't negative ($f$ is increasing), and if it were zero, then the function would be continuous at that point.
Taking the supremum over all such sets $D$, we obtain the inquality
<div>$$ f(b) - f(a) \ge \sum_{\lambda \in D_f} (f(\lambda+) - f(\lambda-)) $$</div>
where $D_f$ is the set of *all* discontinuities of $f$. Finally, [Theorem $\forall$](#corollary-only-at-most-countable-sums-are-noteworthy) shows $D_f$ must be at most countable.
</div>
</details>
</div>

<div class="compact" markdown>
#### Theorem. (Froda's theorem, general case)
Let $I \subset R$ be an interval and $f: I \to \R$ a monotonous function. Then, $f$ has at most countably many points of discontinuity.
<details class="proof" markdown>
<summary>Proof.</summary>
<div class="proof-content" markdown>
There is an increasing sequence of compact intervals
<div>$$ [a_1, b_1] \subset [a_2, b_2] \subset \ldots \subset [a_n,b_n] \subset \ldots $$</div> 
such that their union is $I$ (we may simply choose $a_n$ and $b_n$ so that their limits are the ends of the interval $I$, and make sure $a_n \le b_n$). Then, $f$ is monotonous on each one of these compact intervals and hence has at most countably many points of discontinuity on each one. More precisely, $D_f \cap [a_n, b_n]$ must be at most countable, since any discontinuity of $f$ residing the in the interior of this interval must be a discontinuity of $f \vert_{[a_n, b_n]}$. The equality 
<div>$$ D_f = \bigcup_{n \ge 1}(D_f \cap [a_n, b_n]) $$</div>
shows $D_f$ is at most countable.
</div>
</details>
</div>

<div class="compact" markdown>
#### Theorem.
Let $f: [a,b] \to \R$ be of bounded variatoion. Then, there are at most $\frac{1}{\epsilon}V_f$ points $x \in [a,b]$ such that $\omega_f(x) \ge \epsilon$. 
<details class="proof" markdown>
<summary>Proof.</summary>
<div class="proof-content" markdown>
</div>
</details>
</div>