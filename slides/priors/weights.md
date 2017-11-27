**weight matrix**: $W_{V\\times D}$

**embedding**: $\\vec{x}^{\\mathbf{T}}_jW = \\vec{w}_j$ in $D$ dimensions

**hidden layer**: $\\vec{h} = \\vec{w}_j$

**output embedding**: $\\vec{w}'\_j$ from $W^{'}\_{D\\times V}$

note:
- randomly initialized, `VxD` matrix
- our input essentially indexes this matrix to get the embedded input vectors
- in other words, our hidden layer is just the embedding for the input word
- `W'` **_is not_** the transpose of the previous weight matrix
    - `w'_j` distinct embedded representation of the word
