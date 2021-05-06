---
title: Finite Fields
---

A group must follow the following rules

Associativity:

![Associativity](/img/Uni/CaC/ECC/associativity.png)

Identity element:

![Identity](/img/Uni/CaC/ECC/identity.png)

Inverses:

![Inverse](/img/Uni/CaC/ECC/inverse.png)

## Abelian group

An abelian group is also commutative:

![Commutative](/img/Uni/CaC/ECC/commutative.png)

## Field

A field is a 5-tuple

$$
(F, +, \times, 0, 1)
$$

with

1. $(F, +)$ being an Abelian group with identity 0

    e.g. $1+0=0+1=1$

2. $(F*, \times)$ being an Abelian group with identity 1

    e.g. $2\times 1=1\times 2 = 2$

3. Multiplication distributes over the addition

![Multiplication distributes](/img/Uni/CaC/ECC/mult_distributes.png)

## Galois field

<Theorem>

Any finite field is of order $q=p^m$, where p is a prime number and m is an integer $\geqslant 1$. All fields of a given size are the same.

</Theorem>

These have two different notations that mean the same thing, $GF(q)$ and $\mathbb{F}_q$

## Extension field

![Primitive and Irreducible](/img/Uni/CaC/ECC/primitive.png)

![Addition](/img/Uni/CaC/ECC/gf_addition.png)

![Multiplication](/img/Uni/CaC/ECC/gf_mult.png)

### Properties

Multiplicative structure

![Multiplicative cycle](/img/Uni/CaC/ECC/mult_cycle.png)

Additive structure

![Additive structure](/img/Uni/CaC/ECC/add_structure.png)
