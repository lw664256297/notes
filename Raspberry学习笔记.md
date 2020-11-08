# WIFI 配置

> wpa_supplicant.conf
> country=CN
> ctrl_interface=DIR=/var/run/wpa_supplicant GROUP=netdev
> update_config=1

network={
ssid="wifiname"
psk="password"
priority=1
}

# 树莓派用户管理

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
