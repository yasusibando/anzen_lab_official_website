# あんぜんLAB株式会社 公式ホームページ

ロゴを基準に全面リニューアルした、静的HTML/CSS/JavaScriptの会社公式サイトです。

## 中心メッセージ

事故が起きる前に、安全な行動を選べる人を増やす。

あんぜんLAB株式会社は、身近な危険に気づき、立ち止まり、適切な行動を選択するための「意識のトレーニング」を届けます。

## ファイル

- `index.html`：トップページ
- `styles.css`：共通デザイン
- `script.js`：スマートフォンメニュー、ヘッダー表示
- `privacy/index.html`：プライバシーポリシー
- `404.html`：独自404ページ
- `assets/anzen-lab-logo.png`：会社ロゴ
- `assets/favicon.png`：ブラウザタブ用アイコン
- `firebase.json`：Firebase Hosting設定

## 確認方法

`index.html` をブラウザで開いて確認します。リンクや404を含めて確認する場合は、ローカルWebサーバーを利用します。

## 公開

```powershell
firebase deploy --only hosting:company
```
