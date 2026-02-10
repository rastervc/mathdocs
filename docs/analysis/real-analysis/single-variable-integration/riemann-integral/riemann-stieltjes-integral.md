# The Riemann-Stieltjes Integral

## Introduction

<div class="compact" markdown>
#### Definition (Riemann-Stieltjes sums)
Suppose $E$ is a normed vector space, $f: [a, b] \to E$ is a vector-valued map, and $\alpha: [a, b] \to \R$ is a real-valued function. If $P = \{([x_{k - 1}, x_k], \xi_k)\}_{1 \le k \le n}$ is a tagged partition of $[a, b]$, we define the corresponding *Riemann-Stieltjes sum* to be 
<div>$$\sigma(f, \alpha; P) = \sum_{k = 1}^n f(\xi_k)(\alpha(x_k) - \alpha(x_{k - 1}))$$</div>
</div>


<div class="compact" markdown>
#### Definition (The Riemann-Stieltjes integral)
Suppose $E$ is a normed vector space, $f: [a, b] \to E$ is a vector-valued map, and $\alpha: [a, b] \to \R$ is a real-valued function. We will say $f$ is *Riemann-Stieltjes  integrable on $[a, b]$ with respect to $\alpha$* if the Riemann-Stieltjes sums $\sigma(f, \alpha; P)$ converge to a vector $I \in V$ as $||P|| \to 0$. In this case, we define the *Riemann-Stieltjes integral of $f$ with respect to $\alpha$* on $[a, b]$ to be 
<div>$$\int_a^b f(x) \diff \alpha(x) = \int_a^b f \diff \alpha = \int_{[a, b]} f \diff \alpha = v$$</div>
The set of all such functions is denoted by $\mathscr{R}_\alpha([a,b], E)$ or just $\mathscr{R}_\alpha[a,b]$ when the codomain is implicitly understood.
</div>

## Elementary Properties

### Linearity

<div class="compact" markdown>
#### Theorem. (Linearity of the Riemann-Stieltjes integral, part I)
Suppose $E$ is a normed vector space, and $f, g \in \mathscr{R}_\alpha(I, E)$ are two Riemann-Stieltjes integrable functions defined on a compact interval $I \subset \R$. Then, the linear combination $af + bg $ is in $\mathscr{R}_\alpha(I, E)$ for any $a, b \in \R$, and, in this case, we have 
<div>$$\int_I af + bg \diff \alpha = a\int_I f \diff \alpha + b\int_I g \diff \alpha $$</div>
<details class="proof">
<summary>Proof.</summary>
<div class="proof-content"></div>
</details>
</div>

<div class="compact" markdown>
#### Theorem. (Linearity of the Riemann-Stieltjes integral, part II)
Suppose $E$ is a normed vector space, and $f$ is in $\mathscr{R}_\alpha(I, E)$ as well as $\mathscr{R}_\beta(I, E)$, where $I \subset \R$ is a compact interval. Then, $f$ is integrable on $I$ with respect to any linear combination $a\alpha + b\beta$ having $a, b \in \R$, and in this case
<div>$$\int_I f \diff (a\alpha + b\beta) = a\int_I f \diff \alpha + b\int_I f \diff \beta $$</div>
<details class="proof">
<summary>Proof.</summary>
<div class="proof-content"></div>
</details>
</div>

### Monotony

### The Triangle Inequality

## The Riemann-Stieltjes Integral under Regularity Conditions