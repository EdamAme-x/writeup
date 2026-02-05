## Challenge

```sh
#!/bin/bash
set -euo pipefail
FLAG=${FLAG:-"Alpaca{*** REDACTED ***}"}

echo "[Warmup] current time (seconds)?"
read t; d1=$(( t-$(date +%s) ))
if (( -100 < d1 && d1 < 100 )); then
    echo "Well done."
else
    echo "Hm. diff: $d1"
    exit 1
fi

echo "[Impossible] current time (nanoseconds)?"
read t; d2=$(( t-$(date +%s%N) ))
if (( -100 < d2 && d2 < 100 )); then
    echo "The World! $FLAG"
else
    echo "Hm. diff: $d2"
    exit 1
fi
s
```

時刻当ててFLAG見つけろ  

## Solution
まず2つの解決策を考えた  

1. 普通に何回も試行する  
2. BASHの算術式の特徴を利用してインジェクションする  

一番目については、そもそもサーバーに負荷がかかるし、
時間かければ多分行けるけどどう考えても正攻法ではないので諦めた。  

二番目になるが、RCE系統は、`set -euo pipefail` のせいで使えない。  

ということで、まずは組み込みの変数に目を付けた。  
BASHには`$EPOCHSECONDS`、`$EPOCHREALTIME`という変数があり、それぞれUNIX秒、UNIXマイクロ秒が入っている。   

一つ目の秒当ては成功したが、二つ目がどうも上手く行かない。  
BASHの算術式ではFLOATが扱えないらしく、色々試行錯誤したが無理だった。 (頑張れば行けるのか？)  

が、色々やってる内に算術式のエラーが起こると、その変数の中身が開示されるという特徴に気付いた。  
ということで、`FLAG`と入れてみたら素直に終わった。  

```llvm
[Warmup] current time (seconds)?
FLAG
server.sh: line 6: Alpaca{...}: arithmetic syntax error: invalid arithmetic operator (error token is "{...}")
server.sh: line 7: d1: unbound variable
```
