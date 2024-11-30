安裝 Firebase CLI： 如果還沒有安裝 Firebase CLI，請先安裝：

npm install -g firebase-tools
登錄 Firebase： 運行以下命令來登錄到 Firebase：

firebase login
初始化 Firebase： 在你的專案根目錄運行以下命令來初始化 Firebase 設定：

firebase init
選擇 Hosting 選項，然後按照提示完成初始化設置。

構建專案： 確保你的 Vue 專案已經構建完成：

npm run build
配置 firebase.json 文件： 確保你的 firebase.json 文件中的 public 屬性指向 dist 資料夾：

json
{
  "hosting": {
    "public": "dist",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ]
  }
}
部署到 Firebase： 在專案根目錄運行以下命令來部署：

firebase deploy