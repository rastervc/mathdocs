document$.subscribe(({ body }) => { 
  renderMathInElement(body, {
    delimiters: [
      { left: "$$",  right: "$$",  display: true },
      { left: "$",   right: "$",   display: false },
      { left: "\\(", right: "\\)", display: false },
      { left: "\\[", right: "\\]", display: true }
    ],
    macros: {
      "\\vec": "\\smash{\\overset{\\rightarrow}{#1}}",
      "\\lvec": "\\smash{\\overset{\\xrightarrow{\\phantom{\\text{aaaa}}}\\!}{#1}}",
    },
  })
})