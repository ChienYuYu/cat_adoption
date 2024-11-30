// firbase 部署==========
// 執行firebase deploy
const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,

  publicPath: process.env.NODE_ENV === 'production'
    ? '/'
    : '/',
});

// // github 部署===========
// // 執行 sh deploy.sh
// const { defineConfig } = require('@vue/cli-service');

// module.exports = defineConfig({
//   transpileDependencies: true,

//   publicPath: process.env.NODE_ENV === 'production'
//     ? '/meowmeow/'
//     : '/',
// });
