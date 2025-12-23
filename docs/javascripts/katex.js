document$.subscribe(({ body }) => { 
  renderMathInElement(body, {
    delimiters: [
      { left: "$$",  right: "$$",  display: true },
      { left: "$",   right: "$",   display: false },
      { left: "\\(", right: "\\)", display: false },
      { left: "\\[", right: "\\]", display: true }
    ],
    macros: {
      "\\N": "\\mathbb{N}",
      "\\Z": "\\mathbb{Z}",
      "\\Q": "\\mathbb{Q}",
      "\\R": "\\mathbb{R}",
      "\\C": "\\mathbb{C}",
      "\\P": "\\mathcal{P}",
      "\\Pf": "\\P_{\\text{fin}}",
      "\\vec": "\\smash{\\overset{\\rightarrow}{#1}}",
      "\\lvec": "\\smash{\\overset{\\xrightarrow{\\phantom{\\text{aaaa}}}\\!}{#1}}",
      "\\on": "\\operatorname",
      "\\acts": "\\curvearrowright",
      "\\Sym": "\\on{Sym}",
      "\\Hom": "\\on{Hom}",
      "\\End": "\\on{End}",
      "\\Aut": "\\on{Aut}",
      "\\Inn": "\\on{Inn}",
      "\\Out": "\\on{Out}",
      "\\Cl": "\\on{Cl}",
    },
  })
})