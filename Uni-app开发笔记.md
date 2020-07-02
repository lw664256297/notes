# Uni-app 开发笔记

前言: 家-财政报告 V2.0, 家财政报告第一个版本使用 Vue + TypeScript + Vant 升级版本 Uni-app + TypeScript 重构项目, 注意这是开发笔记其中的基础内容会忽略，笔者会通过链接的方式供读者去了解和学习

## 目录

- [环境搭建](#环境搭建)
- [创建项目](#创建项目)
- [改造项目结构](#改造项目结构)
- [创建快速构建工具](#创建快速构建工具)
- [使用 Mock 模拟数据](#使用Mock模拟数据)
- [后端接口联调](#后端接口联调)

## 环境搭建

> 技术栈

- Uni-app (感谢程序员的默默无私奉献，非常棒项目)
- TypeScript

> 工具下载

- 下载微信开发者工具
- [下载 Hbuilder X (感谢程序员的默默无私奉献，非常棒的开发工具)](https://www.dcloud.io/hbuilderx.html)

        注意：这里假设你安装了 Vue-cli，并且会使用，否者请移步 Vue 学习笔记

## 创建项目

> cli 创建

```bash
vue create -p dcloudio/uni-preset-vue j-h5-uni-app
```

> Hbuilder X 创建

- [点击我查看详细教程](https://uniapp.dcloud.io/quickstart)

## 改造项目结构

> 当前结构

![图片]('../img/j-h5-uni-app-pic01.jpg')

> 改造后的目录结构

![图片]('../img/j-h5-uni-app-pic01.jpg')