# Foundations

## Introduction to rings

***Definition 1.*** (Rings) A nonempty set $R$, along with two binary operations $+, \cdot: R \times R \to R$ is called a *ring* iff it satisfies the following properties.

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
***Theorem 1.*** Let $R$ be a ring. Then $0 \cdot x = x \cdot 0 = 0$ for all $x \in R$.

*Proof.* We will take advantage of the fact that $0 + 0 = 0$, along with a clever use of distributivity.
<div>$$ 0 \cdot x = (0 + 0)x = 0 \cdot x + 0\cdot x $$</div>
whence $0 \cdot x = 0$ by cancelling a $0 \cdot x$ from each side. The other equality may be proven similarly.
<span style="float: right">$\square$</span>
</div>

### Weird flavors of rings

It is common to speak of two more types of almost-ring algebraic structures. We will not treat them formally, but keep in mind that they exist and that many concepts from rings (trivially) generalize to them.

***Definition 2.*** (Non-associative rings) A *non-associative ring* is a nonempty set $R$, along with two binary operations $+, \cdot: R \times R \to R$, which satisfies all ring properties except for the associativity of multiplication. In other words, $(R^*, \cdot)$ is only assumed to be a magma.

***Note.*** Every ring is a non-associative ring. They are not mutually exclusive, in spite of what the naming might suggest.

Our most common example of a non-associative ring is an algebra. In fact, non-associative rings are just algebras over $\mathbb{Z}$, but we aren't explicitly mentioning the ring of scalars.

***Definition 3.*** (Semirings) A *semiring* is a nonempty set $S$, along with two binary operations $+, \cdot: R \times R \to R$, which satisfies all ring properties except for the existence of additive inverses. In other words, $(S, +)$ is only assumed to be a monoid.

This might seem a bit arbitrary at first, especially since so far we have only emphasized properties that multiplication may or may not have. There is a simple explanation though: in general, the elements of semirings are sets! And although there is a notion of set subtraction, there aren't any "negative" sets.

***Note.*** Well, most objects we work with are sets. The main point is that in the case of semirings, we are concerned with classic set-like operations which don't support inverses.

### Boring rings

***Definition 4.*** (Zero ring)
The zero ring is the commutative unital ring whose only element is $0$, the additive identity. The ring itself is denoted by $0$ as well, unsurprisingly.

<div class="compact" markdown>
***Theorem 2.*** Let $R$ be a unital ring. Then $R = 0$ if and only if $0 = 1$.

*Proof.* The forward direction is obvious. For the converse, note that $x = 1 \cdot x = 0 \cdot x = 0$, whence $0$ is the only element in the ring.
<span style="float: right">$\square$</span>
</div>

***Definition 5.*** (Trivial rings) A ring $R$ is *trivial* if and only if $xy = 0$ for all $x, y \in R$.

***Note.*** Crazy people like to call trivial rings *rngs of square zero*.

We can obtain a trivial ring from any abelian group by letting it be the additive group, and defining multiplication as above.

<div class="compact" markdown>
***Theorem 3.*** The only unital trivial ring is the zero ring.

*Proof.* It is clear the zero ring is trivial. For the forward direction, note that $1 \cdot 1$ is equal to both $1$ and $0$, since the ring is trivial, whence $1 = 0$. This is the hallmark property of the zero ring.
<span style="float: right">$\square$</span>
</div>

## Introduction to modules

***Definition 6.*** (Modules) An abelian group $(M, +)$ together with a ring $R$ and a binary operation $\cdot: R \times M \to M$ is called a *left $R$-module* if and only if it satisfies the following additional properties.

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

2. For every $r, s \in R$ and $x \in M$ the equality $r(sx) = (rs)x$ holds.
3. If $R$ is unital, then $1 \cdot x = x$ for every $x \in M$.

Some people write $_RM$ to emphasize the fact that $M$ is a left $R$-module.
The operation $\cdot$ is called scalar multiplication, and $R$ is the ring of scalars. If $R$ is unital, then $M$ is a *unital left $R$-module*. 

As one would expect, we also define *right $R$-modules*. The obvious way. They are likewise emphasized as $M_R$. When $R$ is commutative, there is no need to make a distinction and so we simply say $R$-*modules*.

***Note.*** Most of our results will only be stated and proven for left modules. It is up to the reader to realize they work just as fine for right modules as well.

<div class="compact" markdown>
***Theorem 4.*** Let $M$ be a left $R$-module. Then $0 \cdot x = 0$ for every $x \in M$.

*Proof.* From $0 \cdot x = (0 + 0) \cdot x = 0 \cdot x + 0 \cdot x$ we find $0 \cdot x = 0$.
<span style="float: right">$\square$</span>
</div>

### Boring modules

## Ideals

<div class="compact" markdown>
***Theorem.*** Let $R$ be a ring and $A \subset R$ a nonempty subset. Then 
<div>$$ _R(A) = \left\{\sum_{i = 1}^{n}{r_ia_i} \mid r_i \in R \cup \mathbb{Z}, a_i \in R \right\} $$</div>
If $R$ is unital, then $\mathbb{Z} \subset R$ and so we may omit the union.

*Proof.* 
<span style="float: right">$\square$</span>
</div>