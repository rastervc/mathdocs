*[directed]: Here, directed means that for any two subrings in the family, there is a third one containing them both.

# Foundations

## Introduction to rings

### Rings

***Definition.*** (Rings) An ordered triple $(R, +, \cdot)$ is called a *ring* if and only if it satisfies the following properties.

1. $(R, +)$ is an abelian group. Its identity is denoted by $0$ or $0_R$.
2. $(R, \cdot)$ is a monoid. Its identity is denoted by $1$ or $1_R$.
3. The laws of distributivity hold, that is, the equalities
   <div>
      <div class="wide-screen">
      $$ a(b + c) = ab + ac \quad\quad (a + b)c = ac + bc $$
      </div>
      <div class="thin-screen">
      $$a(b + c) = ab + ac$$ 
      $$(a + b)c = ac + bc $$
      </div>
   </div>
      are true for any elements $a$, $b$ and $c$ of $R$.

If multiplication is commutative, then $R$ is called a *commutative ring*.

<div class="compact" markdown>

***Theorem.*** Let $R$ be an ring. Then $0 \cdot x = x \cdot 0 = 0$ for all $x \in R$.

*Proof.* We will take advantage of the fact that $0 + 0 = 0$, along with a clever use of distributivity.
<div>$$ 0 \cdot x = (0 + 0)x = 0 \cdot x + 0\cdot x $$</div>
whence $0 \cdot x = 0$ by cancelling a $0 \cdot x$ from each side. The other equality may be proven similarly.
<span style="float: right">$\square$</span>

</div>

### Weird flavors of rings

***Definition.*** (Rng) An ordered triple $(R, +, \cdot)$ which satisfies all ring axioms except for the existence of a multiplicative identity is called an *rng*. In other words, we only need $(R, \cdot)$ to be a semigroup.

***Note.*** The missing **i** in *rng* represents the lack of multiplicative **i**dentity.

***Note.*** Authors who usually work with rngs call them rings instead, and our rings are called *unital rings*, *rings with unity* or *rings with identity*. On the opposite side of the spectrum, there are authors who assume all rings to be commutative.

***Definition.*** (Non-associative rings) An ordered triple $(R, +, \cdot)$ is called a *non-associative ring* if it satisfies all ring axioms except for the associativity of multiplication, i.e., we only require that $(R, \cdot)$ is a magma with identity. If multiplication is commutative, we prepend the label *commutative* to its name.

***Definition.*** (Semirings) An ordered triple $(S, +, \cdot)$ is called a *semiring* if it satisfies all ring axioms except for the existence of additive inverses. More precisely, we require that $(S, +)$ and $(S, \cdot)$ are monoids and the laws of distributivity hold between them. If multiplication is commutative, we prepend the label *commutative* to its name.

***Note.*** Semirings are sometimes called *rigs*; the missing **n** represents the lack of **n**egatives.

***Note.*** Many properties of rings generalize to these lesser structures. For brevity, we will not explicitly state and prove them unless there is some kind of danger involved.

### Boring rings

***Definition.*** (Zero ring)
The zero ring is the ring whose only element is $0$. Unsurprisingly, it is denoted by $\{0\}$ or simply $0$.

<div class="compact" markdown>

***Theorem.*** Let $R$ be a ring. Then $R = 0$ if and only if $0_R = 1_R$.

*Proof.* The forward direction is obvious. For the converse, note that $x = 1 \cdot x = 0 \cdot x = 0$, whence $0$ is the only element in the ring.
<span style="float: right">$\square$</span>

</div>

***Definition.*** (Trivial rng) An rng $R$ is *trivial* if and only if $xy = 0$ for all $x, y \in R$.

***Note.*** Crazy people like to call trivial rngs *rngs of square zero*.

***Example.*** We can obtain a trivial rng from any abelian group by letting all products be zero.
<div class="compact" markdown>

***Theorem.*** The only trivial ring is the zero ring.

*Proof.* It is clear the zero ring is trivial. For the forward direction, note that $1 \cdot 1$ is equal to both $1$ and $0$, since the ring is trivial, whence $1 = 0$. This is the hallmark property of the zero ring.
<span style="float: right">$\square$</span>

</div>

***Note.*** It is common for the zero ring to be called the *trivial ring*. Thanks to this result, there is no danger of confusion.

### Subrings

***Definition.*** (Subring) Let $R$ be a ring. A subgroup $S$ of $(R, +)$ is a *subring* if and only if $(S, \cdot)$ is a submonoid of $(R, \cdot)$. We define *subrngs* similarly, but we only require that $S$ is closed under multiplication.

***Note.*** A subrng can be a ring, but not a subring if its $1$ does not coincide with the $1$ of the overring.

***Definition.*** (Proper subring) Let $R$ be an ring and $S \subset R$ a subring. We call $S$ a *proper subring* if and only if it is neither $R$ nor the zero ring. These are called the *improper subrings* of $R$.

<div class="compact" markdown>

***Theorem.*** Let $R$ be a ring and $\{S_\alpha\}_{\alpha \in A}$ a family of subrings. Then their intersection is also a subring of $R$.

*Proof.* Let $S$ be their intersection. Then $(S, +)$ is a subgroup, being the intersection of a family of subgroups. Similarly, $(S, \cdot)$ is a submonoid. We now get by definition that $S$ is a subring.
<span style="float: right">$\square$</span>

</div>

<div class="compact" markdown>

***Theorem.*** Let $R$ be a ring and $\{S_\alpha\}_{\alpha \in A}$ a directed family of subrings. Then their union is also a subring of $R$.

*Proof.* Let $S$ be their intersection. Then $(S, +)$ is a subgroup, being the directed union of a family of subgroups. Similarly, $(S, \cdot)$ is a submonoid. We now get by definition that $S$ is a subring.
<span style="float: right">$\square$</span>

</div>

***Corollary.*** Let $R$ be a ring and $S_1 \subset S_2 \subset \ldots$ an increasing sequence of subrings. Then their union is also a subring of $R$.

### The Dorroh extension

***Definition.*** Let $R$ be an rng. We define its *Dorroh extension* to be the set $\mathcal{D}(R) = \mathbb{Z} \times R$, endowed with the following addition and multiplication operations.
<div>$$ (n, x) + (m, y) = (n + m, x + y)$$ </div>
<div>$$ (n, x) \cdot (m, y) = (nm, mx + ny + xy) $$</div>
It is natural to write $(n, x) = n + x$. Thus, the two definitions become 
<div>$$ (n + x) + (m + y) = (n + m) + (x + y)$$ </div>
<div>$$ (n + x) \cdot (m + y) = nm + mx + ny + xy $$</div>
which coincides with our intuitive understanding of these operations.

<div class="compact" markdown>

***Theorem.*** Let $R$ be an rng. Then its Dorroh extension $\mathcal{D}(R)$ is a ring. Moreover, $D(R)$ is commutative if and only if $R$ is. 

*Proof.* Clearly, $(\mathcal{D}(R), +)$ is an abelian group since it is the direct sum of $(\mathbb{Z}, +)$ and $(R, +)$. Associativity of multiplication and distributivity can be easily checked by hand. Since $1 + 0_R$ is a multiplicative identity, we find that $\mathcal{D}(R)$ is a ring.

It remains to prove that $\mathcal{D}(R)$ is commutative if and only if $R$ is. By definition, the equality
<div>$$(n + x) \cdot (m + y) = (m + y) \cdot (n + x)$$</div>
is equivalent to 
<div>$$nm + mx + ny + xy = mn + ny + mx + yx$$</div>
and hence to the much simpler condition $xy = yx$.
<span style="float: right">$\square$</span>

</div>

<div class="compact" markdown>

***Theorem.*** (Dorroh, 1932) Any rng can be embedded in a ring.

*Proof.* Let $R$ be an rng. Then the Dorroh extension $\mathcal{D}(R)$ is a ring and contains it as a subrng. More precisely, one can identify $x \in R$ with $0 + x$ in the extension.
<span style="float: right">$\square$</span>

</div>

## Introduction to modules

### Modules

***Definition.*** (Modules) An abelian group $(M, +)$, along with a ring $R$ and a binary operation $\cdot: R \times M \to M$ is called a *left $R$-module* or a *left module over $R$* if and only if it satisfies these properties.

1. For every $r, s \in R$ and $x, y \in M$, the following equalities hold. 
   <div>
      <div class="wide-screen">
      $$ r(x + y) = rx + ry \quad\quad (r + s)x = rx + sx  $$ 
      </div>
      <div class="thin-screen">
      $$ r(x + y) = rx + ry$$
      $$ (r + s)x = rx + sx$$
      </div>
   </div>
      These are called the laws of distributivity.

2. For every $r, s \in R$ and $x \in M$ the law of associativity $(rs)x = r(sx)$ holds.
   
3. For every $x \in M$, $1_R \cdot x = x$.

Some people write $_RM$ to emphasize the fact that $M$ is a left $R$-module.
The operation $\cdot$ is called scalar multiplication, and $R$ is the ring of scalars. As one would expect, we also define *right $R$-modules*. The obvious way. They are similarly emphasized as $M_R$. 

***Note.*** Most of our results will only be stated and proven for left modules. It is up to the reader to realize they work just as fine for right modules as well.

***Note.*** We can also define modules over rngs if we exclude the third condition. 

<div class="compact" markdown>

***Theorem.*** Let $M$ be a left $R$-module. Then $0 \cdot x = 0$ for every $x \in M$.

*Proof.* From $0 \cdot x = (0 + 0) \cdot x = 0 \cdot x + 0 \cdot x$ we find $0 \cdot x = 0$.
<span style="float: right">$\square$</span>

</div>

***Definition.*** (Bimodules) Suppose $R$ and $S$ are two rings and $(M, +)$ is an abelian group. Then $M$ is an *$(R,S)$-bimodule* if and only if it is a left $R$-module, a right $S$-module, and it satisfies the associativity law $ (rx)s = r(xs) $ for every $r \in R$, $x \in M$ and $s \in S$. The $(R, S)$-bimodule structure is commonly emphasized as $_RM_S$.

***Exercise.*** Define multimodules.

### Boring modules

***Definition.*** (Zero module) The zero module is the module whose only element is $0$. It is denoted by $\{0\}$ or just $0$. The ring(s) over which it is defined is(are) irrelevant; the structure of the zero module is too simple for it to matter.

There are a few other trivial examples of modules.

***Example.*** Any ring $R$ can be given the structure a left $R$-module, a right $R$-module, and an $(R,R)$-bimodule by defining scalar multiplication in the most natural way imaginable: $r \cdot x = rx$ and $x \cdot r = xr$.

***Example.*** Suppose $M$ is a left $R$-module and $S$ is a subring of $R$. Then $M$ is also a left $S$-module. In particular, $R$ is an $(S, S)$-bimodule, as well as an $(R,S)$- or $(S,R)$-bimodule.

***Example.*** Let $(G, +)$ be an abelian group. Then $G$ is a $\mathbb{Z}$-module. If $M$ is a left $R$-module, then it can similarly be given the structure of a $(R, \mathbb{Z})$-bimodule. Think of $\mathbb{Z}$ as the default ring that can be used to fill these empty slots.

***Example.*** Suppose $R$ be a ring. Then $M_{mn}(R)$ is an $(M_m(R), M_n(R))$-bimodule.

### Submodules

***Definition.*** (Submodules) Let $M$ be a left $R$-module and $N \subset M$ a nonempty subset. Then a subgroup $N$ is a *submodule*, or more precisely a *left $R$-submodule* if it is closed under scalar multiplication. We also define *right submodules* for right modules, along with *sub-bimodules* for bimodules. 

<div class="compact" markdown>

***Theorem.*** Let $M$ be a left $R$-module and $N \subset M$ a nonempty subset. Then $N$ is a submodule of $M$ if and only if $x - ry \in N$ for every $x, y \in N$ and $r \in R$.

*Proof.* If $N$ is a submodule, the condition clearly holds. For the converse, note that letting $r = 1$ gives us $x - y \in N$, showing that $N$ is a subgroup of $M$. Letting $x = 0$ and $r = -s$ shows $sy \in N$ whenever $s \in R$ and $y \in N$, whence $N$ is closed under scalar multiplication. Properties like distributivity and associativity hold since we are still working inside $M$.
<span style="float: right;">$\square$</span>

</div>

<div class="compact" markdown>

***Theorem.*** Let $M$ be an $(R, S)$-bimodule and $N \subset M$ a nonempty subset. Then $N$ is a sub-bimodule of $M$ if and only if $x - rys \in N$ for every $x, y \in N$, $r \in R$ and $s \in R$.

*Proof.* If $N$ is a submodule, the condition clearly holds. For the converse, note that letting $s = 1$ proves $N$ is a left $R$-submodule, while letting $r = 1$ proves $N$ is a right $S$-submodule. Associativity holds since we are working in $M$, hence $N$ is an sub-bimodule.
<span style="float: right;">$\square$</span>

<div class="compact" markdown>

***Theorem.*** Let $M$ be a left $R$-module and $\{N_\alpha\}_{\alpha \in A}$ a family of submodules. Then their intersection is also a submodule of $M$.

*Proof.* Let $N$ be their intersection. If $x, y \in N$, $x$ and $y$ are in $N_\alpha$ for all $a \in A$ and hence $x - ry$ is in $N_\alpha$ for all $\alpha \in A$. Consequently, $x - ry \in N$, which proves it is a submodule.
<span style="float: right">$\square$</span>

</div>

<div class="compact" markdown>

***Theorem.*** Let $M$ be a left $R$-module and $\{N_\alpha\}_{\alpha \in A}$ a directed family of submodules. Then their union is also a submodule of $M$.

*Proof.* Let $N$ be their union. If $x, y \in N$, there is some $N_\alpha$ containing $x$ and some $N_\beta$ containing $y$. Since the family is directed, there is an $N_\gamma$ containing both submodules and hence their members $x$ and $y$. Thus $x - ry \in N_\gamma$ and hence $x - ry \in N$ for all $r \in R$, proving it is a submodule.
<span style="float: right">$\square$</span>

</div>

***Corollary.*** Let $M$ be a left $R$-module and $N_1 \subset N_2 \subset \ldots$ an increasing sequence of submodules. Then their union is also a submodule of $M$.

***Note.*** We have similar statements for bimodules and their sub-bimodules.

</div>