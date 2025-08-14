# ODC

* 修改 `package.json`。移除 `scripts` 中除 `dev` 和 `dev:client` 的所有
* 修改 `config/routes.js` 文件。
* 删除 `src/page` 目录下的文件
  * `Login`
* 修改 `src/layout/AppContainer` 文件。启动中对于 client 的初始化代码：`await initClientService();`

## 样式调整

修改 `src/global.less` 下。修改 `config/config.ts` 下 `antd` 部分，在 `token` 中增加 `fontSize: 12`。ant design pro 默认的是 14，odc 用的是 12

