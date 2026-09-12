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


## favicon v18 調整

会社アイコンのデザイン・各図形の相対位置・形・色は変更せず、
外側の透明余白だけを削減して、アイコン全体を均等に拡大しました。
ブラウザのタブ／ブックマークで、元デザインを保ったまま大きく見えるようにしています。


## 安全動画セクション追加

- 地震や大雨時の行動
- 指差し確認
- 交通安全
- Instagram公式アカウントへの導線
- 会社情報はセクション番号を05へ変更


## 安全動画セクション v20
安全動画3分類を視覚的なカード形式へ変更。スマートフォンでも各テーマが一目で区別できるよう、カテゴリごとの色面・番号・シンボルを追加。


## v21 安全動画セクション簡素化

ホームページ全体とのバランスを優先し、安全動画の3分類を大型カードから
細い区切り線を使ったシンプルな一覧表示へ変更。

- 大型カラー帯・大きな記号を廃止
- 各項目を番号＋見出し＋短い説明だけに整理
- Instagram導線も大きなボタンからテキストリンクへ変更
- スマートフォンでの縦方向の占有を縮小


## v22 PhotoIt専用プライバシーポリシー

新規URL:
`/photoit/privacy/`

追加ファイル:
- `photoit/privacy/index.html`
- `photoit/privacy/privacy.css`
- `photoit/privacy/privacy.js`

仕様:
- 日本語 / English の1ページ切替
- 初回表示はブラウザ言語を参考に、日本語環境は日本語、それ以外は英語
- 言語切替にCookieやlocalStorageは使用しない
- あんぜんLAB公式ホームページのデザインに合わせたレスポンシブ構成
- App Store / Google Playから公開URLとして参照できるログイン不要ページ


## v23 PhotoIt専用プライバシーポリシー導線追加

トップページから `photoit/privacy/` へ遷移できるよう、以下を追加しました。

- お問い合わせセクションに「PhotoIt専用プライバシーポリシーを見る」リンク
- フッターに「PhotoIt プライバシーポリシー」リンク


## v24 PhotoItプライバシーポリシー導線調整

- お問い合わせ欄の「PhotoIt専用プライバシーポリシーを見る」を削除
- フッターの「PhotoIt プライバシーポリシー」リンクはそのまま維持


## v25 PhotoItプライバシーポリシー ローカルリンク修正

トップページのPhotoItプライバシーポリシーリンクを
`photoit/privacy/` から `photoit/privacy/index.html` に変更しました。

これにより、
- Windowsで `index.html` を直接開くローカル確認（file://）
- Firebase Hosting公開後

の両方で、正しくPhotoIt専用プライバシーポリシーページを開けます。
