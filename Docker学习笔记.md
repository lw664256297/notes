# Docker 学习笔记

## 目录

- [参考文档](#参考文档)
- [环境安装](#环境安装)
- [Docker 基础命令](#Docker基础命令)
- [Docker 安装及部署 Mysql](#Docker安装及部署Mysql)
- [Docker 安装及部署 MQTT](#Docker安装及部署MQTT)
- [Docker 安装及部署 V2ray](#Docker安装及部署V2ray)
- [Docker 搭建 WebServer](#Docker搭建WebServer)
- [Docker 搭建 APIserver](#Docker搭建APIserver)

- [Docker 实际使用中的注意事项及问题](#Docker实际使用中的注意事项及问题)

> 参考文档

[点击我跳转到 Docker 详细文档](https://www.runoob.com/docker/docker-tutorial.html)

> 环境安装

- Mac 安装 Docker

```bash
brew cask install docker
```

- Linux 安装 Docker

```bash
# 使用 官方安装脚本自动安装
curl -fsSL https://get.docker.com | bash -s docker --mirror Aliyun

# 国内专用
curl -sSL https://get.daocloud.io/docker | sh
```

> Docker 基础命令

- [点击我查看命令详细内容](https://www.runoob.com/docker/docker-run-command.html)

```bash
# 查看镜像
docker images -a

# 查看容器
docker ps -a

# 删除镜像
docker rim xxxxx(容器id)

# 删除容器
docker rm xxxxx(容器id)

# 使用镜像nginx:latest以交互模式启动一个容器,在容器内执行/bin/bash命令。
docker run -it nginx:latest /bin/bash

# 启动一个或多个已经被停止的容器
docker start

# 停止一个运行中的容器
docker stop

# 重启容器
docker restart

# 进入容器 在容器 xxx 中开启一个交互模式的终端
docker exec -it  xxx /bin/bash

```

> Docker 安装及部署 Mysql

```bash
# docker 中下载 mysql
docker pull mysql

#启动
docker run --name mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=zhangds123!a -d mysql

#进入容器
docker exec -it mysql bash

#登录mysql -设置root密码
mysql -u root -p
ALTER USER 'root'@'localhost' IDENTIFIED BY 'zhangds123!a';

#添加远程登录用户
CREATE USER 'zhangds'@'%' IDENTIFIED WITH mysql_native_password BY 'zhangds123!';
GRANT ALL PRIVILEGES ON *.* TO 'zhangds'@'%';

# 重启
docker restart xxxx(Docker id)

```

> Docker 安装 MQTT

> Docker 部署 V2ray

> Docker 搭建 WebServer

> Docker 搭建 APIserver

> Docker 实际使用中的注意事项及问题

```

```
