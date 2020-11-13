# Raspberry 开机

## 无键盘、无显示屏、无网线、远程 ssh 登陆

## 目录

- [开机前的准备](#开机前的准备)
- [烧录程序](#烧录程序)
- [远程 ssh 登陆](#远程ssh登陆)
- [正常关机](#正常关机)
- [总结](#总结)

## 开机前的准备

> 硬件

- 树莓派 4
- 充电线
- 读卡器
- sd 卡（16G）
- 一台笔记本(笔者是 mac)
- 一个手机

> 软件

- 树莓系统[Debian-Pi-Aarch64](https://github.com/openfans-community-offical/Debian-Pi-Aarch64)
  注意：笔者下载的系统是 mini 版本 |\*\*镜像名称：OPENFANS-Debian-Buster-Aarch64-XXXXXX.img
- 安卓终端模拟器[Terminal Emulator for Android](https://play.google.com/store/apps/details?id=jackpal.androidterm&hl=zh_CN)

  备注：用于查看链接手机热点的 ip 地址，别担心后面会详细说明

## 烧录系统

> 格式化 sd 卡（mac 用自带的磁盘工具）

![image.png](https://upload-images.jianshu.io/upload_images/20272322-ed8c1575e237018b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

> 把下载好的系统，解压

![image.png](https://upload-images.jianshu.io/upload_images/20272322-6aae9a4921c75331.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

> 查看磁盘信息，并且记住磁盘名（sd 卡的名字）

```js
$ df -ih
```

![image.png](https://upload-images.jianshu.io/upload_images/20272322-ecfa441650aedb07.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
例如：/dev/disk2s1

> 卸载磁盘

```js
$ sudo diskutil umount /dev/xxxx
```

备注：注意我命令的的路径,要换成你的路径

> 开始写入文件(推荐使用绝对路径,使用命令:pwd 查看当前路径,可能有点慢，喝杯水)

```js
sudo dd if=/Users/bigbirdxxs/2019-11-17-OPENFANS-Debian-Buster-Aarch64-ext4-v2019-2.0-Release.img of=/dev/rdisk2 bs=4m;sync
```

## 远程 ssh 登陆

> 手机配置热点

![image.png](https://upload-images.jianshu.io/upload_images/20272322-b9b92a4472973f21.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

> 树莓派链接手机 wifi（热点）

- 首先创建树莓派链接 wifi 的文本 "wpa_supplicant.conf"内容如下

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

备注：[点击我查看树莓派 wifi 配置详细](http://shumeipai.nxez.com/2017/09/13/raspberry-pi-network-configuration-before-boot.html)

- 创建一个空的 ssh 文本(没有内容，没有后缀)

- 拷贝两个文件到你的 sd 卡里面（就是你刚烧录系统的 sd 卡）

  ![image.png](https://upload-images.jianshu.io/upload_images/20272322-e3a7c2dd7daf86a8.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

- 插入 sd 卡，树莓派通电

  ![image.png](https://upload-images.jianshu.io/upload_images/20272322-6fd5ff5357d2df9d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

- 获取树莓派 ip 地址
  此时查看你手机热点信息，是不是多了一个设备链接，没错那个就是树莓派

## 取我们的树莓哦 ip

> 用我们的热点手机，打开软件,安卓终端模拟器[Terminal Emulator for Android](https://play.google.com/store/apps/details?id=jackpal.androidterm&hl=zh_CN)
> 输入命令：

```js
$ ip neigh
```

![image.png](https://upload-images.jianshu.io/upload_images/20272322-683ee6537575d6d0.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

上图有两个 ip，一个笔记本，另一个就是我们树莓派的 ip 了

> 使用 ip ssh 登陆树莓派
> 在终端健入:

```js
$ ssh pi@xxx.xxx.xx.x
```

输入默认密码:raspberry
![image.png](https://upload-images.jianshu.io/upload_images/20272322-f4bd72281e8af3a0.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

初始化 root 用户：
输入命令：

```js
$ sudo passwd root
```

普通用户切换 root

```js
$ su root
```

> 正常关机

输入命令：

```js
$ sudo halt
```

最后祝你好运！

## 总结

- 使用树莓派连接手机 wifi，然后手机软件获取树莓派的 ip 地址，即可使用 ssh 登录树莓派
