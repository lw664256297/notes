# wepack4 学习笔记

## 目录

- [使用-webpack4-配置-TypeScript-开发环境](#使用-webpack4-配置-TypeScript-开发环境)

- [wepack4 实际使用中的注意事项及问题](#wepack4-实际使用中的注意事项及问题)

## 参考-wepack4-详细文档

- [点击我跳转 wepack4 详细文档页面](https://www.webpackjs.com/guides/)

## 使用-webpack4-配置-TypeScript-开发环境

- [点击我跳转 使用-webpack4-配置-TypeScript](https://www.gowhich.com/blog/840)

```bash
# 创建文件
mkdir webpack4-typescript-demo

# 进入文件
cd webpack4-typescript-demo

# 初始化配置
npm init -y

# 安装 webpack-cli
npm install webpack webpack-cli --save-dev
```

> 项目结构如下

```
├── package.json
├── src
│   └── index.ts
└── webpack.config.js
```

> 配置 typeScript 设置

```bash
# 首先，执行以下命令，安装 TypeScript 编译器和需要的loader
npm install --save-dev typescript ts-loader
```

```
├── package.json
├── src
│   └── index.ts
├── tsconfig.json
└── webpack.config.js
```

> tsconfig.ts 配置如下

```json
// 设置一个基本的配置，将 TypeScript 编译到 ES5
{
  "compilerOptions": {
    "outDir": "./dist/",
    "noImplicitAny": true,
    "module": "es6",
    "target": "es5",
    "allowJs": true
  }
}
```

> 在 webpack 配置中处理 TypeScript

```js
const path = require("path");

module.exports = {
  entry: "./src/index.tsx",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
};
```

> package.json

```json
{
  "name": "typesctiptDemo",
  "version": "1.0.0",
  "description": "",
  "private": true,
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack",
    "watch": "webpack --watch"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "ts-loader": "^7.0.5",
    "typescript": "^3.9.5",
    "webpack": "^4.43.0",
    "webpack-cli": "^3.3.12"
  },
  "dependencies": {
    "@types/lodash": "^4.14.157",
    "lodash": "^4.17.15"
  }
}
```

> 运行

```bash
npm run watch
```

## wepack4-实际使用中的注意事项及问题
