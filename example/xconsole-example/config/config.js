const { resolve } = require('path');
/**
 * 整个应用构建, 编译配置
 */

module.exports = {
  // 产品名称, 如果是控制台项目一定要配置此选项
  product: 'xconsole',
  // 路由配置
  routes: {
    index: 'overview',
  },

  useTypescript: true,

  // 加入监控脚本
  armsId: 'mock_amrs_id',
  // 开启 topbar, sidebar
  consoleBase: true,
  // 开启 oneConsole 的 meta 标签
  oneConsole: true,
  // 国际化配置
  intl: {
    locale: 'zh',
    products: [
      {
        group: 'aliyun',
        name: 'wind',
        identifier: 'ALIYUN_WIND_MESSAGE',
      },
    ],
    messages: 'locales/messages.js',
  },
  // mocks 配置
  mocks: {
    oneapi: true
  },
  // 开启低版本浏览器提示
  browserCompatibility: true,

  useTerserPlugin: true,
  // 自定义 webpack 配置
  webpack: (config) => { 
    config.resolve.alias['react'] = resolve(__dirname, '../../../node_modules/react/index.js')
    return config;
  }
}
