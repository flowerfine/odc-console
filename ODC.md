# ODC

* 修改 `package.json`。移除 `scripts` 中除 `dev` 和 `dev:client` 的所有
* 修改 `config/routes.js` 文件。
* 删除 `src/page` 目录下的文件
  * `Login`
* 修改 `src/layout/AppContainer` 文件。启动中对于 client 的初始化代码：`await initClientService();`

## 样式调整

* 复制 odc-client 的 `src/style` 目录到新项目中。
* 复制 odc-client 的 `src/global.less` 到新项目中。
  * 注释掉新项目中 `src/global.less` 中 的 `.ant-page-header` 中的 `left: 0;`
  * 将 odc-client 中 `src/layout/SpaceContainer/Sider/index.less` 中 `.collapsedBtn` 部分内容重命名复制到 `src/global.less` 中，重命名为 `.ant-pro-sider-collapsed-button`
  
* 修改 `config/config.ts` 下 `antd` 部分，在 `token` 中增加 `fontSize: 12`。ant design pro 默认的是 14，odc 用的是 12



