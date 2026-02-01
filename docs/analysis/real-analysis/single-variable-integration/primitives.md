# Primitives

## Introduction


<div class="compact" markdown>
#### Definition. (Primitives)

Let $X$ be a normed vector space, and $f: A \to X$ be a map defined on a crowded set $A \subset \R$. We will say $F: A \to X$ is a *primitive* of $f$ if it is differentiable and $F' = f$. In this case, we will also say $f$ *admits primitives*. The set of all such maps will be denoted by $D^{-1}(A, X)$, although this notation is not standard.
</div>

<div class="compact" markdown>
#### Theorem.

Let $X$ be a normed vector space, and $f: A \to X$ be a map defined on a crowded set $A$ in $\R$. Moreover, suppose $\{x_i\}_{i \in I}$ is a basis of $X$, and $\{\pi_i\}_{i \in I}$ are the corresponding coordinate maps. Then, $f$ admits primitives if and only if each $\pi_i \circ f$ does.

*Proof.* Suppose $f$ admits a primitive $F$. Then, $(\pi_i \circ f)' = \pi_i \circ F$, and hence each $\pi_i \circ f$ admits primitives. For the converse, suppose each $\pi_i \circ f$ has a primitive $F_i$. Define $F$ to be the map having components $F_i$, that is, $\pi_i \circ F = F_i$. Then, $F' = f$ as desired.
<span style="float: right">$\square$</span>
</div>

Thus, we can reduce the study of primititves to real-valued functions.

<div class="compact" markdown>
#### Theorem.

Let $f: I \to \R$ be a real-valued function defined on the interval $I$. If $f$ is continuous, then it admits primitives.

*Proof.* Fix some $x_0 \in I$, and define $F: I \to \R$ as the integral $F(x) = \int_{x_0}^x f(t) \diff t$. We will verify that $F' = f$. Indeed, we may write 
<div>$$F'(a) = \lim_{x \to a}{\frac{F(a) - F(x)}{a - x}} = \lim_{x \to a}{\frac{\int_{a}^{x}{f(t) \diff t}}{a - x}} = \lim_{x \to a}{f(c_x)} = f(a)$$</div>
where the existence of such a $c_x$ between $a$ and $x$ is shown by the mean value theorem for integrals. The squeeze theorem proves that $c_x \to a$, and hence $f(c_x) \to (a)$.
<span style="float: right">$\square$</span>
</div>


## Primitives and Operations

### Linear Combinations

<div class="compact" markdown>
#### Theorem. (Linear combinations admit primitives)
Let $f, g: I \to \R$ be two maps defined on the interval $I$ such that they admit primitivies. Then, any linear combination $af + bg$ also admits primitives on $I$.

*Proof.* If $F' = f$, and $G' = g$, then $(aF + bG)' = af + bg$.
<span style="float: right">$\square$</span>
</div>

### Products

<div class="compact" markdown>
#### Theorem. (Products sometimes admit primitives, continuous derivative)
Let $f, g: I \to \R$ be two maps defined on the interval $I$ such that $f$ admits primitives on $I$, and $g$ is differentiable with continuous derivative. Then, their product $fg$ admits primitives.

*Proof.* Let $F' = f$ and consider $(Fg)' = fg + Fg'$, which is equivalent to $fg = (Fg)' - Fg'$. The first term, $(Fg)'$, obviously has primitives, and the second one, $Fg'$, is continuous, and hence has primitives as well. The product $fg$ is their difference, whence it must admit primitives.
<span style="float: right">$\square$</span>
</div>


<div class="compact" markdown>
#### Theorem. (Products sometimes admit primitives, bounded derivative)
Let $f, g: I \to \R$ be two maps defined on the interval $I$ such that $f$ admits primitives on $I$, and $g$ is differentiable with bounded derivative (from above or from below, not necessarily both). Then, their product $fg$ admits primitives.

*Proof.* We will use a theorem of W. Wilkosz, stated [below](http://localhost:8000/analysis/real-analysis/single-variable-integration/primitives/#theorem-w-wilkosz). Let $F' = f$ and consider $fg = (Fg)' - Fg'$, as we did with the previous result. This time, $Fg'$ must admit primitives because $F$ is continuous, and $g'$ is bounded from above or below and admits primitives.
<span style="float: right">$\square$</span>
</div>

I am sure you noticed a pattern. If $f$ admits primitives and $g$ is differentiable, then $fg$ admits primitives if and only if $Fg'$ does. This technique could be used on the spot as well, albeit more rarely. Maybe you will create your own criterion for the primitivability of $fg$ this way.

<div class="compact" markdown>
#### Theorem. (W. Wilkosz)
Let $f, g: I \to \R$ be two maps defined on the interval $I$ such that $f$ admits primitives on $I$ and is bounded from above or below, and $g$ is continuous. Then, their product $fg$ admits primitives.

*Proof.*
<span style="float: right">$\square$</span>
</div>

### Quotients


### Function Composition

