# Raspberry 开机及一些配置

## WIFI 配置

```conf
country=CN
ctrl_interface=DIR=/var/run/wpa_supplicant GROUP=netdev
update_config=1
 #这是你家的wifi信息
network={
    ssid="hshdhdhdhddhhdhdhdjdkajs" # 网络的 ssid(wifi 名字)
    psk="12345678a" # 密码(wifi 密码)
    key_mgmt=WPA-PSK # 加密方式
    priority=1  # 连接优先级，数字越大优先级越高（不可以是负数）
}
```

## 树莓派用户管理

```bash
# 1.初始化root用户
$ sudo passwd root

# 2.普通用户切换root
$ su root

# 3.关机
$ sudo shutdown -h now
$ sudo halt
$ sudo poweroff
$ sudo init 0

# 4. 重启
$ sudo reboot
$ shutdown -r now
```

## 树莓派安装 Docker

```bash
# 使用 官方安装脚本自动安装
curl -fsSL https://get.docker.com | bash -s docker --mirror Aliyun

# 国内专用
curl -sSL https://get.daocloud.io/docker | sh
```
