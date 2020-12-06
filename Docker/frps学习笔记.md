##

## 服务端

> frps 配置文件

```ini
# 配置文件
[common]
bind_port = 7000

# 仪表盘 rfps
dashboard_port = 7500
token = zhangdszhudac

dashboard_user = zhangds
dashboard_pwd = zhangds123

vhost_http_port = 80
```

> docker 脚本

```bash
docker run -d --name=frps --restart=always \
 -v /root/frps/frps.ini:/frp/frps.ini \
 -p 7000:7000 \
 -p 7500:7500 \
 -p 80:80 \
 -p 3000:3000/tcp \
stilleshan/frps
```

## 客户端配置

```ini
[common]
server_addr = 104.xxxxxx
server_port = 7000

token = zhangdszhudac

[ssh]
type = tcp
local_ip = 127.0.0.1
local_port = 22
remote_port = 3000

[range:test_tcp]
type = tcp
local_ip = 127.0.0.1
local_port = 8080
remote_port = 8080

[web]
type = http
local_ip = 127.0.0.1
local_port = 3000
custom_domains = 104.xxxxx
```
