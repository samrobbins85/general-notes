---
title: Hamming Codes
---

## Structure of a hamming code

![Structure of a hamming code](/img/Uni/CaC/ECC/hamming_structure.png)

This H is the **parity check matrix**

### Properties

| Property                    | Value         |
| --------------------------- | ------------- |
| Length                      | $2^r-1$       |
| Dimension                   | $2^r-r-1$     |
| Minimum distance            | 3             |
| Field order                 | 2             |
| Redundancy                  | $r-k$         |
| Rate                        | $1-r/(2^r-1)$ |
| Error correction capability | 1             |

From the parity check matrix, you can then form the Generator matrix

![Hamming code generator matrix](/img/Uni/CaC/ECC/hamming_generator.png)
