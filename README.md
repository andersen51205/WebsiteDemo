# WebsiteDemo

- - -
# git操作筆記

## 如何使用github

### 使用SSH連線

1. 新增金鑰
```bash=
# 1.建立金鑰
ssh-keygen
# 或
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
> Enter file in which to save the key (/c/Users/user/.ssh/id_rsa):
# 金鑰存放路徑，直接按 Enter 
> Enter passphrase (empty for no passphrase):
# 密碼，可設定可不設定，設定的話每次上傳會多需要輸入一次密碼
> Enter same passphrase again:
# 再輸入一次密碼
> The key fingerprint is:
# 之後會顯示你的 fingerprint，到這裡就完成 key 的產生了

# 2.啟動金鑰代理
eval "$(ssh-agent -s)"

# 3.將私鑰加入到 SSH 代理上
ssh-add ~/.ssh/<私鑰檔名>

# 4.查看公鑰
cat ~/.ssh/<公鑰檔名>.pub
```
2. 上傳金鑰到github
+ 方法一：存儲庫金鑰
  + 進入 repository 頁面
  + 到 Settings > Deploy keys
  + Add deploy key，填入 Title 與 Key 後
  + 打勾 Allow write access 後即可送出。
+ 方法二：全域金鑰
  + 進入 GitHub 頁面
  + 到 Settings > SSH and GPG keys 的設定頁面
  + New SSH Key，填入 Title 與 Key 後即可送出。

3. 測試ssh
```bash=
# 驗證ssh
ssh -T git@github.com
> Hi <username>! You've successfully authenticated, but GitHub does not provide shell access.
# 如果收到上面的訊息 就可以開始上傳檔案了
```

### 使用Https連線

```bash=
git clone <https url>
```
+ push或其他操作主要還是依賴web驗證

## 本機端設定

### 設定識別資料(作者)

```bash=
# 全域設定
git config --global user.name "Name"
git config --global user.email "Email@gmail.com"

# 儲存庫設定(指定的儲存庫使用)
git config --local user.name "Name"
git config --local user.email "Email@gmail.com"

# 查看設定
git config -l
#查看特定項目
git config user.name 
```
