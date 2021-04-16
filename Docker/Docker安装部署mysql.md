# Docker 安装部署 mysql

```bash
# docker 中下载 mysql
docker pull mysql

# 树莓派安装mysql (树莓派的架构为arm)
docker pull hypriot/rpi-mysql

#启动
docker run --name mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD="zhangds123a" -d mysql


#树莓派启动
docker run --name mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=zhangds123a -d hypriot/rpi-mysql

#进入容器
docker exec -it mysql bash

#登录mysql -设置root密码
mysql -u root -p
ALTER USER 'root'@'localhost' IDENTIFIED BY 'zhangds123!a';

#添加远程登录用户
CREATE USER 'zhangds'@'%' IDENTIFIED WITH mysql_native_password BY 'zhangds123a';
GRANT ALL PRIVILEGES ON *.* TO 'zhangds'@'%';

# 重启
docker restart xxxx(Docker id)
```

### Docker 文件挂载

```bash
# 创建文件
mkdir /mysqlConfig/data
mkdir /mysqlConfig/conf/my.cnf
```

### my.cnf 内容

```cnf
[mysqld]
port=33077
pid-file        = /var/run/mysqld/mysqld.pid
socket          = /var/run/mysqld/mysqld.sock
datadir         = /var/lib/mysql
lower_case_table_names=1
#log-error      = /var/log/mysql/error.log
# By default we only accept connections from localhost
#bind-address   = 127.0.0.1
# Disabling symbolic-links is recommended to prevent assorted security risks
symbolic-links=0

```

### 启动

```bash
 docker run --name mysql  --privileged=true   \
-p 33077:33077   \
-v /mysqlConfig/conf/my.cnf:/etc/mysql/mysql.conf.d/mysqld.cnf   \
-v /mysqlConfig/data:/var/lib/mysql   \
-e  MYSQL_ROOT_PASSWORD="zhangds123a" -d mysql
```
