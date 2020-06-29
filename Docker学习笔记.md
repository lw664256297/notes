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

## 参考文档

[点击我跳转到 Docker 详细文档](https://www.runoob.com/docker/docker-tutorial.html)

## 环境安装

> Mac 安装 Docker

```bash
brew cask install docker
```

> Linux 安装 Docker

```bash
# 使用 官方安装脚本自动安装
curl -fsSL https://get.docker.com | bash -s docker --mirror Aliyun

# 国内专用
curl -sSL https://get.daocloud.io/docker | sh
```

## Docker 基础命令

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

## Docker 安装及部署 Mysql

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

## Docker 安装 MQTT

> 拉取 MQTT

```bash
docker pull eclipse-mosquitto
```

> 创建 MQTT 配置目录

```bash
mkdir mqttConfig/config
mkdir mqttConfig/data
mkdir mqttConfig/log

# 赋予 Log目录最大权限
sudo chmod -R 777 mqttConfig/log

```

> 创建配置文件

```bash
# 配置文件
touch mosquitto.conf
```

内容如下:

        persistence true
        persistence_location /mosquitto/data
        log_dest file /mosquitto/log/mosquitto.log

        port 1883
        listener 9001
        protocol websockets

        # 关闭匿名模式
        allow_anonymous false

        # 指定密码文件
        password_file /mosquitto/config/pwfile.conf

        #备注：这里千万注意路径,指向的是 docker 的路径！！!（直接复制我的内容即可）

> 创建用户名及密码文件

```bash
touch pwfile.conf # 用户名及密码配置文件
```

> 创建运行 Mosquitto 的脚本

```bash
# 备注:请注意脚本的路径,请修改自己的脚本路径
docker run -it --name=mqtt001 --privileged  -p 1883:1883 -p 9001:9001 -v /Users/bigbird/mqttConfig/config:/mosquitto/config/ -v /Users/bigbird/mqttConfig/data:/mosquitto/data -v /Users/bigbird/mqttConfig/log:/mosquitto/log -d  eclipse-mosquitto
```

> 创建用户名和密码

```bash
# 进入mosquitto容器
docker exec -it xxxx(docker ID)  sh

#对于passworf_file，可以复制一份模板，或者创建一个空文件
touch /mosquitto/config/pwfile.conf
chmod -R 755 /mosquitto/config/pwfile.conf

# 使用mosquitto_passwd命令创建用户，第一个test是用户名，第二个test2019是密码
mosquitto_passwd -b /mosquitto/config/pwfile.conf test test2019
```

> 重启容器

```bash
docker restart xxxx(Docker Id)
```

> MQTT 部署过程中出现的问题

1592979788: Error: Unable to open log file /Users/bigbird/mqttconfig/mosquitto/log/mosquitto.log for writing.

- 解决方法

  1.查看你的 mosquitto.conf 文件，路径是否正确!!! 这里的路径为 docker 的路径，千万别写成自己的路径!!!

        persistence true
        persistence_location /mosquitto/data
        log_dest file /mosquitto/log/mosquitto.log

        port 1883
        listener 9001
        protocol websockets

        # 关闭匿名模式
        allow_anonymous false

        # 指定密码文件
        password_file /mosquitto/config/pwfile.conf

        #备注：这里千万注意路径,指向的是 docker 的路径！！!（直接复制我的内容即可）

  2.文件权限问题, 对 mosquitto/log 赋予最高权限

  ```bash
    sudo chmod -R 777 mosquitto/log
  ```

## Docker 部署 V2ray

- 解压 file 文件，执行 gogogo.sh 脚本

  备注：注意修改 gogogo.sh 里面的路径 (你服务器路径)

## Docker 搭建 WebServer

## Docker 搭建 APIserver

## Docker 实际使用中的注意事项及问题
