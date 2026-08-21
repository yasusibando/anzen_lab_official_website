# あんぜんLAB株式会社 公式ホームページ

ロゴを基準に全面リニューアルした、静的HTML/CSS/JavaScriptの会社公式サイトです。

## 中心メッセージ

事故が起きる前に、安全な行動を選べる人を育てる。

あんぜんLAB株式会社は、身近な危険に気づき、立ち止まり、適切な行動を選択するための「意識のトレーニング」を届けます。

## ファイル

- `index.html`：トップページ
- `styles.css`：共通デザイン
- `script.js`：スマートフォンメニュー、ヘッダー表示
- `privacy/index.html`：プライバシーポリシー
- `404.html`：独自404ページ
- `assets/anzen-lab-logo.png`：会社ロゴ
- `assets/favicon.png`：ブラウザタブ用アイコン
- `assets/notice-orbit-v11.png`：ヒーロー画像（気づきのオービット図・中央正方形版）
- `firebase.json`：Firebase Hosting設定

## 確認方法

`index.html` をブラウザで開いて確認します。リンクや404を含めて確認する場合は、ローカルWebサーバーを利用します。

## 公開

```powershell
firebase deploy --only hosting:company
```

- 会社情報セクションの大きな会社名見出しを削除し、情報一覧のみを表示

- ヒヤットシリーズの対象表現を「日常生活や職場」に更新
- ヒーロー右側のオービット画像背景を透過化した状態を維持


## ホーム画面アイコン対応

- `manifest.webmanifest` を追加
- Android / Chrome 用 192x192・512x512 アイコンを追加
- iPhone / iPad 用 `apple-touch-icon.png`（180x180）を追加
- ブラウザから「ホーム画面に追加」した際に「あんぜんLAB」アイコンを表示


## ブックマーク用favicon最適化

Windows / Chromeなどの小さいブックマーク表示で会社ロゴが小さく見えないよう、
会社アイコンの各図形を中央寄りに再配置したfavicon専用データを追加しました。

- `assets/favicon.ico`
- `assets/favicon-16.png`
- `assets/favicon-32.png`
- `assets/favicon-48.png`
- `assets/favicon-64.png`
- `assets/favicon-compact-512.png`

スマホのホーム画面用192px / 512pxアイコンは従来設定を維持しています。
