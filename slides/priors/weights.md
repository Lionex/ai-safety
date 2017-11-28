**weight matrix**: $W_{V\\times D}$

**embedding**: $\\vec{x}^{\\mathbf{T}}_jW = \\vec{w}_j \\in \\mathbb{R}^D$

note:
- randomly initialized, `VxD` matrix
- our input essentially indexes this matrix to get the embedded input vectors
- in other words, our hidden layer is just the embedding for the input word
