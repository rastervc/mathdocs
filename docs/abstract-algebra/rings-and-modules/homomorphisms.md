# Homorphisms

## Homomorphisms

***Definition.*** (Homomorphism) Let $R$ and $S$ be two rings. We call $f: R \to S$ a *ring homomorphism* if and only if $f(1_R) = f(1_S)$ and for any $x, y \in R$ the following relations hold.
<div class="wide-screen"> 
$$f(x + y) = f(x) + f(y) \quad\quad f(xy) = f(x)f(y)$$
</div>
<div class="thin-screen">
$$f(x + y) = f(x) + f(y)$$
$$f(xy) = f(x)f(y)$$
</div>
These are called additivity and multiplicativity.

## Antihomomorphisms

***Definition.*** (Antihomomorphism) Let $R$ and $S$ be two rings. We call $f: R \to S$ a *ring antihomomorphism* if and only if $f(1_R) = f(1_S)$ and for any $x, y \in R$ the following relations hold.
<div class="wide-screen"> 
$$f(x + y) = f(x) + f(y) \quad\quad f(xy) = f(y)f(x)$$
</div>
<div class="thin-screen">
$$f(x + y) = f(x) + f(y)$$
$$f(xy) = f(y)f(x)$$
</div>
In other words, antihomomorphisms are homomorphisms that reverse the product order instead of preserving it.

***Definition.*** (Opposite ring)


***Theorem.***

## Modules as ring actions

Suppose $G$ is an abelian group, $R$ a ring and $f: R \to \on{End}(G)$ a ring homomorphism. Then there is a natural way to give $G$ the structure of a left $R$-module. Define the scalar multiplication
<div>$$r \cdot x = f(r)(x)$$</div>
It is easy to verify that this indeed satisfies the left module axioms. Conversely, if $M$ is a left $R$-module, the map $\phi_r: M \to M, x \mapsto r \cdot x$ clearly defines an endomorphism on $M$. Additionally, one can check that $\phi_{rs} = \phi_r \circ \phi_s$, whence $r \mapsto \phi_r$ is a ring homomorphism from $R$ to $\on{End}(M)$. 

***Note.*** Our maps $f$ and $r \mapsto \phi_r$ in the previous example are more commonly called *left ring actions*.

The situation is not all that different for right modules; instead of homomorphisms we will use antihomomorphisms. Suppose $G$ is an abelian group, $R$ a ring and $f: R \to \on{End}(G)$ a ring antihomomorphism. This time, we define scalar multiplication to be 
<div>$$x \cdot r = f(r)(x)$$</div> 
which makes $G$ a right $R$-module. The reverse process can be done as above to prove that these antihomomorphisms correspond precisely to all ways of making a group into a right $R$-module.

***Note.*** Perhaps unsurprisingly, this time the map $f$ is called a *right ring action*.