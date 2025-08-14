# ODC-Console

项目通过 [Ant Design Pro](https://pro.ant.design) 初始化，copy and paste [OceanBase Developer Center (ODC)](https://github.com/oceanbase/odc) 项目中样式和布局的一个 web sql console 框架。

[Ant Design Pro](https://pro.ant.design) 是一个基于 [Ant Design](https://ant-design.antgroup.com/index-cn)、[ProComponents](https://pro-components.antdigital.dev/)、[Umi](https://umijs.org/docs/max/introduce) 的企业级后台管理系统，[ODC](https://www.oceanbase.com/docs/odc) 是一个企业级数据库协同开发工具，有桌面版、Web 版两种产品形态。[odc-client](https://github.com/oceanbase/odc-client) 为 ODC 项目前端页面，基于 [Ant Design](https://ant-design.antgroup.com/index-cn)、[Umi](https://umijs.org/docs/max/introduce) 实现。

本项目在 Ant Design Pro 初始化的 admin 基础上，把 odc-client 的布局、风格、sql workspace 等功能复制、迁移融合进来，形成一个快速的 web sql console 开发框架。

## 开发环境

* node。>= 18.0.0
* pnpm

```shell
# 安装
npm install # pnpm install
# 启动 
npm start # pnpm start
# 编译
npm run build # pnpm run build
```

## 参考链接

* [odc-client](https://github.com/oceanbase/odc-client)
* [oceanbase-design](https://design.oceanbase.com/)
* [dt-react-component](https://dtstack.github.io/dt-react-component/)
* [x6-react-components](https://x6.antv.vision/zh/docs/api/ui/menu)。文档
  * [x6-react-components](https://github.com/antvis/X6/tree/master/packages/x6-react-components)。github 代码
* [ocp-express](https://github.com/oceanbase/ocp-express)
