## Challenge

出力の一例が与えられるので、FLAGを推測せよ
```python
import os
from random import randint

flag = int.from_bytes(os.getenv("FLAG", "Alpaca{REDACTED}").encode(), "big")
print(flag * randint(2, 3) * randint(2, 3) * randint(2, 3))
print(flag * randint(2, 3) * randint(2, 3) * randint(2, 3))
```

```
70430356624056699219964353455091734195306937238245707901514922333654568000660
5585179348150525015655680494025565656820428601640301759505137819334580532521858
```

## Solution
ひとまず、素因数のリストを作ることにした。

```python
first = 70430356624056699219964353455091734195306937238245707901514922333654568000660
second = 5585179348150525015655680494025565656820428601640301759505137819334580532521858

def primeFactors(number: int) -> list[int]:
    # 素因数分解をするためのコードだが省略
    return factors

factors1 = primeFactors(first)
factors2 = primeFactors(second)

print("First number factors:", factors1)
print("Second number factors:", factors2)
```

```llvm
First number factors: [2, 2, 3, 3, 3, 3, 5, 7, 11, 43, 67, 269, 503821, 4572850661, 316224362225539763970988074867563404070815390505801]
Second number factors: [2, 3, 3, 3, 3, 269, 337, 337, 1549, 503821, 4572850661, 316224362225539763970988074867563404070815390505801]
```

