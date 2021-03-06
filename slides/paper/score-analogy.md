to find all $\\vec{she}$:$\\vec{x}$ :: $\\vec{he}$:$\\vec{y}$ analogies,
<br/>
**score** potential analogies against all pairs $\\left(\\vec{x},\\vec{y}\\right)$

<br/>

$$
S_{(\\vec{a},\\vec{b})}(\\vec{x},\\vec{y}) =
\\begin{cases}
    \\cos\\left(\\vec{a}-\\vec{b},\\vec{x}-\\vec{y}\\right)
        & \text{if } \\|\\vec{x}-\\vec{y}\\| \\leq \\delta \\\\
    0
        & \text{otherwise}
\\end{cases}
$$


note:
## Finding potential analogies
- Score all word pairs compared to two seed words _she_ & _he_
- consider only words closer than random
- if words pairs are parallel, they form a parallelogram, which is an analogy

## questions:
- delta usually 1; x,y are closer than pi/3
- practically, vectors closer than random
- score means: analogy pair axis are close to parallel to analogy axis
    - analogy pair: x-y
    - analogy axis: a-b
