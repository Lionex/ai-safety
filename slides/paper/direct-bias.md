
$$
\\text{DirectBias}\_C =
\\frac{1}{|N|}
\\sum\_{\\vec{w}\\in N}
\\left|\\cos\\left(\\vec{w},\\mathbb{g}\\right)\\right|^C
$$

note:
- N is a set of gender neutral words
    - expect gender neutral words to be _perpendicular_ to the gender direction
    - if they are not perpendicular, we have direct bias

## further questions
- C acts as a strictness parameter
- 0 in practice is very strict
- 1 in practice is softer
