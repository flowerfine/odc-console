// https://umijs.org/config/

import { join } from 'node:path';
import { defineConfig } from '@umijs/max';
import defaultSettings from './defaultSettings';
import proxy from './proxy';
import theme from './theme';
import routes from './routes';

const { REACT_APP_ENV = 'dev' } = process.env;

/**
 * @name 使用公共路径
 * @description 部署时的路径，如果部署在非根目录下，需要配置这个变量
 * @doc https://umijs.org/docs/api/config#publicpath
 */
const PUBLIC_PATH: string = '/';

export default defineConfig({
  hash: true,
  publicPath: PUBLIC_PATH,
  routes,
  theme: theme,
  mock: false,
  esbuildMinifyIIFE: true,
  antd: {
    appConfig: {},
    configProvider: {
      theme: {
        cssVar: true,
        token: {
          fontFamily: 'AlibabaSans, sans-serif',
          fontSize: 12
        },
      },
    },
  },
  proxy: proxy[REACT_APP_ENV as keyof typeof proxy],
  locale: {
    // default zh-CN
    default: 'zh-CN',
    antd: true,
    // default true, when it is true, will use `navigator.language` overwrite default
    baseNavigator: true,
  },
  title: '浏览器的标题吗？',
  
  ignoreMomentLocale: true,

  fastRefresh: true,
  
  model: {},
  valtio: {},
  initialState: {},  
  layout: false,
  
  moment2dayjs: {
    preset: 'antd',
    plugins: ['duration'],
  },
  
  request: {},
  access: {},
  headScripts: [
    // 解决首次加载时白屏的问题
    { src: join(PUBLIC_PATH, 'scripts/loading.js'), async: true },
  ],
  //================ pro 插件配置 =================

  presets: ['umi-presets-pro'],
  mako: {},
  
  requestRecord: {},
  exportStatic: {},
});
