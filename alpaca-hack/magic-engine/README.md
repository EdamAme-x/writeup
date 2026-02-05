## Challenge
Nginxで建てられたサーバーからフラグを見つけよう

## Solution
<img width="1168" height="416" alt="image" src="https://github.com/user-attachments/assets/a624c79b-3bd0-414f-9790-70ec75aba5c2" />

最初見たときSSRFかな？と思ったけど、ngnixの構成ファイル見て、`/secret.html` にあることは分かった
普通に、`http://34.170.146.252:52496/secret.html`にアクセスしたら取れちゃった
<img width="222" height="106" alt="image" src="https://github.com/user-attachments/assets/722d79e2-cc82-43e0-a348-3ddfd8b6f48b" />

けど、なんかおかしいな？とは思っている

`http://34.170.146.252.nip.io:52496/secret.html`

これでしか解けないとかだったら面白いけど、何か設定ミスってるのか？
