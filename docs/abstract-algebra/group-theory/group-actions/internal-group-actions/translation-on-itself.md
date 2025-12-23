# The action of a group on itself by translation

Suppose $G$ is a group and define $t_g: G \to G, x \mapsto gx$. This map is called the *left translation* action of $g$, and it is clear that the assigment $g \mapsto t_g$ defines a left action of $G$ on itself.

<div class="compact" markdown>

***Theorem.*** All maps $t_g$ are bijections, and $g \mapsto t_g$ is indeed a left action.

*Proof.* To prove $t_g$ is a bijection, note that $t_{g^{-1}}$ is its inverse. It remains to show $g \mapsto t_g$ is a left action, in other words that $t_{ab} = t_{a}t_{b}$. Indeed, $t_{ab}(x) = abx = t_a(t_b(x))$ as desired.
<span style="float: right;">$\square$</span>

</div>

A very neat fact is that the translation $t_g$ perfectly encodes what $g$ "does" in its group. Indeed, we are basically memorizing the multiplications involving it (albeit only on the left side). This can be expressed rigorously: the action is faithful.

<div class="compact" markdown>

***Theorem.*** The action $g \mapsto t_g$ is faithful.

*Proof.* It will suffice to prove $\ker(G \acts G) = \{ e \}$. Indeed, suppose $t_g$ is the identity. Evaluating at $e$ gives $t_g(e) = e$, which is equivalent to $g = e$.
<span style="float: right;">$\square$</span>

</div>

The following important corollary is called Cayley's theorem.

***Corollary.*** (Cayley) Any group G can be embedded in $S_{|G|}$.

Thus, at the end of the day every group can be studied as the subgroup of a symmetric group. This suggests that understanding $S_n$ is the key to understanding finite gorups. Unfortunately, this method does not prove to be that lucrative; perhaps it is too greedy to try to do everything at once.

What about the orbits and stabilizers? Things are trivial in this regard - one can easily check that the action is transitive.