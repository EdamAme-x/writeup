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
試し割法を行うには数字がでかすぎるので、pollard-rho法を利用することにした。

```python
first = 70430356624056699219964353455091734195306937238245707901514922333654568000660
second = 5585179348150525015655680494025565656820428601640301759505137819334580532521858

def factorization(n):
    # pollard-rho法
    return factors

factors1 = factorization(first)
factors2 = factorization(second)

print("First number factors:", factors1)
print("Second number factors:", factors2)
```

```llvm
First number factors: [2, 2, 3, 3, 3, 3, 5, 7, 11, 43, 67, 269, 503821, 4572850661, 316224362225539763970988074867563404070815390505801]
Second number factors: [2, 3, 3, 3, 3, 269, 337, 337, 1549, 503821, 4572850661, 316224362225539763970988074867563404070815390505801]
```

これらの数で共通する素因数  
```
Common: {2: 1, 3: 4, 4572850661: 1, 269: 1, 503821: 1, 316224362225539763970988074867563404070815390505801: 1}
```
FLAGはこの共通する素因数を組み合わせた物の一つだろうと考えました。  

後は総当たりで、デコード可能な物を探すだけです。  

総当たりに必要な試行回数については、  
それぞれの `(含まれている素因数の個数 + 1)` を掛けていけば、求まると思います。  
> `+1`は使わないという選択肢があるためです。

$$2 \times 5 \times 2 \times 2 \times 2 \times 2 = 160 \text{ 通り}$$

と求まります。

