# NodeJS 学习笔记

- [Node-升级](#Node-升级)
- [NodeJs-实际使用中的注意事项及问题](#NodeJs-实际使用中的注意事项及问题)

## Rasbperry 安装 nodeJs

```bash
$ curl -sL https://deb.nodesource.com/setup_10.x | sudo bash -
$ sudo apt install nodejs

# 安装npm
sudo apt-get install npm
```

## Node-升级

> 产看 node 版本，没安装的请先安装；

```bash
$ node -v
```

> 清楚 node 缓存；

```bash
$ sudo npm cache clean -f
```

> 安装 node 版本管理工具 'n';

```bash
$ sudo npm install n -g
```

> 使用版本管理工具安装指定 node 或者升级到最新 node 版本；

```bash
$ sudo n stable （安装 node 最新版本）
$ sudo n 8.9.4 （安装 node 指定版本 8.9.4）
```

## NodeJs-实际使用中的注意事项及问题
