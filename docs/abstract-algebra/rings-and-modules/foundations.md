*[directed]: Here, directed means that for any two subrings in the family, there is a third one containing them both.

# Foundations

## Introduction to rings

### Rings

***Definition.*** (Rings) A nonempty set $R$, along with two binary operations $+, \cdot: R \times R \to R$ is called a *ring* iff it satisfies the following properties.

1. $(R, +)$ is an abelian group. The additive identity is usually denoted by $0$.
2. $(R^*, \cdot)$ is a semigroup, where $R^* = R \setminus \{0\}$.
3. For every $a, b, c, \in R$, the following equalities hold.
   <div>
      <div class="wide-screen">
      $$ a(b + c) = ab + ac \quad\quad (a + b)c = ac + bc $$
      </div>
      <div class="thin-screen">
      $$a(b + c) = ab + ac$$ 
      $$(a + b)c = ac + bc $$
      </div>
   </div>
      These are called the laws of distributivity.

If $(R^*, \cdot)$ is a monoid, then $R$ is called a *unital ring* or *ring with unity* and the multiplicative identity is denoted by $1$. If multiplication is commutative, then $R$ is called a *commutative ring*.

***Note.*** Many mathematicians prefer to call unital rings just rings, and instead call a non-unital ring an *rng*. The missing *i* represents the absence of a multiplicative identity. Some authors (mainly working in commutaive algebra, number theory etc.) only really use commutative unital rings, and so this is what they call a ring. 

<div class="compact" markdown>

***Theorem.*** Let $R$ be a ring. Then $0 \cdot x = x \cdot 0 = 0$ for all $x \in R$.

*Proof.* We will take advantage of the fact that $0 + 0 = 0$, along with a clever use of distributivity.
<div>$$ 0 \cdot x = (0 + 0)x = 0 \cdot x + 0\cdot x $$</div>
whence $0 \cdot x = 0$ by cancelling a $0 \cdot x$ from each side. The other equality may be proven similarly.
<span style="float: right">$\square$</span>

</div>

### Weird flavors of rings

It is common to speak of two more types of almost-ring algebraic structures. We will not treat them formally, but keep in mind that they exist and that many concepts from rings (trivially) generalize to them.

***Definition.*** (Non-associative rings) A *non-associative ring* is a nonempty set $R$, along with two binary operations $+, \cdot: R \times R \to R$, which satisfies all ring properties except for the associativity of multiplication. In other words, $(R^*, \cdot)$ is only assumed to be a magma.

***Note.*** Every ring is a non-associative ring. They are not mutually exclusive, in spite of what the naming might suggest.

***Definition.*** (Semirings) A *semiring* is a nonempty set $S$, along with two binary operations $+, \cdot: R \times R \to R$, which satisfies all ring properties except for the existence of additive inverses. In other words, $(S, +)$ is only assumed to be a monoid.

This might seem a bit arbitrary at first, especially since so far we have only emphasized properties that multiplication may or may not have. There is a simple explanation though: in general, the elements of semirings are sets! And although there is a notion of set subtraction, there aren't any "negative" sets.

***Note.*** Well, most objects we work with are sets. The main point is that in the case of semirings, we are concerned with classic set-like operations which don't support inverses.

### Boring rings

***Definition.*** (Zero ring)
The zero ring is the commutative unital ring whose only element is $0$, the additive identity. The ring itself is denoted by $0$ as well, unsurprisingly.

<div class="compact" markdown>

***Theorem.*** Let $R$ be a unital ring. Then $R = 0$ if and only if $0 = 1$.

*Proof.* The forward direction is obvious. For the converse, note that $x = 1 \cdot x = 0 \cdot x = 0$, whence $0$ is the only element in the ring.
<span style="float: right">$\square$</span>

</div>

***Definition.*** (Trivial rings) A ring $R$ is *trivial* if and only if $xy = 0$ for all $x, y \in R$.

***Note.*** Crazy people like to call trivial rings *rngs of square zero*.

We can obtain a trivial ring from any abelian group by letting it be the additive group, and defining multiplication as above.

<div class="compact" markdown>

***Theorem.*** The only unital trivial ring is the zero ring.

*Proof.* It is clear the zero ring is trivial. For the forward direction, note that $1 \cdot 1$ is equal to both $1$ and $0$, since the ring is trivial, whence $1 = 0$. This is the hallmark property of the zero ring.
<span style="float: right">$\square$</span>

</div>

### Subrings

***Definition.*** (Subrings) Let $R$ be a ring. A nonempty subset $S \subset R$ is a *subring* if it forms a ring with respect to the addition and multiplication operations defined in $R$. If $R$ is unital, then we call $S$ a *unital subring* when its multiplicative identity coincides with that of $R$, that is, $1_S = 1_R$.

Clearly, $R$ is a subring of itself. The zero ring is a subring too. In general, subrings tend to inherit the properties of their parent ring. For instance, if $R$ is commutative, then so is any of its subrings.

***Definition.*** (Proper subrings) Let $R$ be a ring and $S \subset R$ a subring. We call $S$ a *proper subring* if and only if it is neither $R$ nor the zero ring. These are called the *improper subrings* of $R$.

<div class="compact" markdown>

***Theorem.*** Let $R$ be a ring and $S \subset R$ a nonempty subset. Then $S$ is a subring if and only if $x - y \in S$ and $xy \in S$ for every $x, y \in S$.

*Proof.* Clearly, these conditions hold when $S$ is a subring. For the converse, notice that the first condition is equivalent to $(S, +)$ being a subgroup of $(R, +)$, while the second is equivalent to $(S^*, \cdot)$ being a sub-semigroup/monoid of $(R^*, \cdot)$. Distributivity is ensured since we are working in $R$.
<span style="float: right">$\square$</span>

</div>

Like most algebraic structures, rings are compatible with downwards and upwards "limits".

<div class="compact" markdown>

***Theorem.*** Let $R$ be a ring and $\{S_\alpha\}_{\alpha \in A}$ a family of subrings. Then their intersection is also a subring of $R$. If all the $S_\alpha$ are unital rings, so is their intersection.

*Proof.*
<span style="float: right">$\square$</span>

</div>

<div class="compact" markdown>

***Theorem.*** Let $R$ be a ring and $\{S_\alpha\}_{\alpha \in A}$ a directed family of subrings. Then their union is also a subring of $R$. If at least one of the $S_\alpha$ is a unital subring, so is the union.

*Proof.* Let $S$ be their union and fix two elements $x, y \in S$. We know $x$ is contained in some $S_\alpha$ and $y$ is contained in some $S_\beta$. Since the family is directed, there is some $\gamma$ such that both of these subrings are subsets of $S_\gamma$, whence $x, y \in S_\gamma$. Since $S_\gamma$ is a ring, it contains $x - y$ and $xy$ and hence so does $S$, proving it is a subring of $R$.
<span style="float: right">$\square$</span>

</div>

***Corollary.*** Let $R$ be a ring and $S_1 \subset S_2 \subset \ldots$ an increasing sequence of subrings. Then their union is also a subring of $R$.

### The Dorroh extension

***Definition.*** Let $R$ be a ring. We define its *Dorroh extension* to be the set $\mathcal{D}(R) = \mathbb{Z} \times R$, endowed with the following addition and multiplication operations.
<div>$$ (n, x) + (m, y) = (n + m, x + y)$$ </div>
<div>$$ (n, x) \cdot (m, y) = (nm, mx + ny + xy) $$</div>
It is natural to write $(n, x) = n + x$. Thus, the two definitions become 
<div>$$ (n + x) + (m + y) = (n + m) + (x + y)$$ </div>
<div>$$ (n + x) \cdot (m + y) = nm + mx + ny + xy $$</div>
which coincides with our intuitive understanding of these operations.

<div class="compact" markdown>

***Theorem.*** Let $R$ be a ring. Then its Dorroh extension $\mathcal{D}(R)$ is a unital ring. Moreover, $D(R)$ is commutative iff $R$ is. 

*Proof.* Clearly, $(\mathcal{D}(R), +)$ is an abelian group since it is the direct sum of $(\mathbb{Z}, +)$ and $(R, +)$. Associativity of multiplication and distributivity can be easily checked by hand. To prove that $\mathcal{D}(R)$ is unital, note that $1 + 0_R$ is a multiplicative identity.

It remains to prove that $\mathcal{D}(R)$ is commutative iff $R$ is. By definition, the equality
<div>$$(n + x) \cdot (m + y) = (m + y) \cdot (n + x)$$</div>
is equivalent to 
<div>$$nm + mx + ny + xy = mn + ny + mx + yx$$</div>
and hence to the much simpler condition $xy = yx$.
<span style="float: right">$\square$</span>

</div>

<div class="compact" markdown>

***Theorem.*** (Dorroh, 1932) Any non-unital ring may be embedded in a ring with identity.

*Proof.* Let $R$ be any such non-unital ring. Then its Dorroh extension $\mathcal{D}(R)$ is unital and contains it as a subring. More precisely, one can identify $x \in R$ with $0 + x$ in the Dorroh extension.
<span style="float: right">$\square$</span>

</div>

## Introduction to modules

### Modules

***Definition.*** (Modules) An abelian group $(M, +)$ together with a ring $R$ and a binary operation $\cdot: R \times M \to M$ is called a *left $R$-module* if and only if it satisfies the following additional properties.

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
   
3. If $R$ is unital, then $1 \cdot x = x$ for every $x \in M$.

Some people write $_RM$ to emphasize the fact that $M$ is a left $R$-module.
The operation $\cdot$ is called scalar multiplication, and $R$ is the ring of scalars. If $R$ is unital, then $M$ is a *unital left $R$-module*. 

As one would expect, we also define *right $R$-modules*. The obvious way. They are similarly emphasized as $M_R$. 

***Note.*** Most of our results will only be stated and proven for left modules. It is up to the reader to realize they work just as fine for right modules as well.

<div class="compact" markdown>

***Theorem.*** Let $M$ be a left $R$-module. Then $0 \cdot x = 0$ for every $x \in M$.

*Proof.* From $0 \cdot x = (0 + 0) \cdot x = 0 \cdot x + 0 \cdot x$ we find $0 \cdot x = 0$.
<span style="float: right">$\square$</span>

</div>

### Bimodules

***Definition.*** (Bimodules) Suppose $R$ and $S$ are two rings and $(M, +)$ is an abelian group. Then $M$ is an *$(R,S)$-bimodule* if and only if it is a left $R$-module, a right $S$-module, and it satisfies the associativity law $ (rx)s = r(xs) $ for every $r \in R$, $x \in M$ and $s \in S$. The $(R, S)$-bimodule structure is commonly emphasized as $_RM_S$.

One could easily define multimodules, having a family of "left rings" and one of "right rings", but that would be insane and unnecessary (at least for our purposes).

***Note.*** Like before, if a result applies to every module type (including bimodules), it will not be restated for each one. Try to ask yourself: Does this work for right modules? What about bimodules?

### Boring modules

***Definition.*** (Zero module) The zero module is the module whose only element is $0$, the additive identity. The module itself is denoted by $0$ as well, unsurprisingly. It is needless to speak of the ring of scalars, or of left/right/bi modules in this context.

There are a few other trivial (yet surprisingly important) examples of modules.

***Example.*** Any ring $R$ can be given the structure a left $R$-module, a right $R$-module, and an $(R,R)$-bimodule by letting its multiplication operation be scalar multiplication in the module.

***Example.*** Let $R$ be a ring and $S$ a subring. Then $R$ can likewise be given the structure of a left $S$-module, $(S, S)$-bimodule, $(S, R)$-bimodule and so on.

***Example.*** Let $(G, +)$ be an abelian group. Then $G$ is a $\mathbb{Z}$-module. If $M$ is a left $R$-module, then it can trivially be given the structure of a $(R, \mathbb{Z})$-bimodule.

***Example.*** Let $M$ be a left $R$-module. Then $M$ can be naturally given a left $\mathcal{D}(R)$-module structure by defining $(n + r)x = nx + rx$.
### Submodules

***Definition.*** (Submodules) Let $M$ be a left $R$-module and $N \subset M$ a nonempty subset. Then $N$ is a *submodule*, or more precisely a *left $R$-submodule* if it forms a left $R$-module with respect to the addition and scalar multiplicaiton defined in $M$. We define submodules similarly for right modules and bimodules. 

<div class="compact" markdown>

***Theorem.*** Let $M$ be a left $R$-module and $N \subset M$ a nonempty subset. Then $N$ is a submodule of $M$ if and only if $x - ry \in N$ for every $x, y \in N$ and $r \in R \cup \mathbb{Z}$.

*Proof.* If $N$ is a submodule, the condition clearly holds. For the converse, note that letting $r = 1$ gives us $x - y \in N$, showing that $N$ is a subgroup of $M$. Letting $x = 0$ and $r = -s$ shows $sy \in N$ whenever $s \in R$ and $y \in N$, whence $N$ is closed under scalar multiplication. Properties like distributivity and associativity hold since we are still working inside $M$.
<span style="float: right;">$\square$</span>

</div>