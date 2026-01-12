document$.subscribe(({ body }) => { 
  renderMathInElement(body, {
    delimiters: [
      { left: "$$",  right: "$$",  display: true },
      { left: "$",   right: "$",   display: false },
      { left: "\\(", right: "\\)", display: false },
      { left: "\\[", right: "\\]", display: true }
    ],
    macros: {
      "\\on": "\\operatorname",
      "\\bf": "\\textbf",
      "\\vec": "\\smash{\\overset{\\rightarrow}{#1}}",
      "\\lvec": "\\smash{\\overset{\\xrightarrow{\\phantom{\\text{aaaa}}}\\!}{#1}}",
      "\\im": "\\on{im}",

      "\\N": "\\mathbb{N}",
      "\\Z": "\\mathbb{Z}",
      "\\Q": "\\mathbb{Q}",
      "\\R": "\\mathbb{R}",
      "\\C": "\\mathbb{C}",

      "\\GL": "\\on{GL}",
      "\\SL": "\\on{SL}",
      "\\diag": "\\on{diag}",

      "\\P": "\\mathcal{P}",
      "\\Pf": "\\P_{\\text{fin}}",

      "\\acts": "\\curvearrowright",
      "\\char": "\\on{char}",
      "\\Sym": "\\on{Sym}",
      "\\Hom": "\\on{Hom}",
      "\\End": "\\on{End}",
      "\\Aut": "\\on{Aut}",
      "\\Inn": "\\on{Inn}",
      "\\Out": "\\on{Out}",
      "\\Cl": "\\on{Cl}",
      "\\Core": "\\on{Core}",
      "\\Tor": "\\on{Tor}",
      "\\Orb": "\\on{Orb}",
      "\\Stab": "\\on{Stab}",
      "\\Syl": "\\on{Syl}",

    },
  })
})