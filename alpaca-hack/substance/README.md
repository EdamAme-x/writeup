## Challenge

出力の一例が与えられるので、FLAGを推測せよ
```python
import os
from random import randint

flag = int.from_bytes(os.getenv("FLAG", "Alpaca{REDACTED}").encode(), "big")
print(flag * randint(2, 3) * randint(2, 3) * randint(2, 3))
print(flag * randint(2, 3) * randint(2, 3) * randint(2, 3))
```
