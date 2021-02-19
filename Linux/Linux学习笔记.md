# Linux 学习笔记

## 目录

- [Linux系统分为两种](#Linux系统分为两种)
- [linux更换国内源](#linux更换国内源)
- [linux全局变量](#linux全局变量)
- [linux查看系统活动监视器](#linux查看系统活动监视器)
- [mac制作u盘启动盘](#mac制作u盘启动盘)
- [新一代编辑器micro](#新一代编辑器micro)
- [CentOS](#CentOS)
- [Ubuntu](#Ubuntu)


## Linux系统分为两种

- RedHat系列：Redhat、Centos、Fedora等

        RedHat系列的包管理工具是yum

- Debian系列：Debian、Ubuntu等

        Debian系列的包管理工具是apt-get

## linux更换国内源

```bash
sudo vim /etc/apt/sources.list
```

```bash
deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic main restricted universe multiverse

deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic main restricted universe multiverse

deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic-updates main restricted universe multiverse

deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic-updates main restricted universe multiverse

deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic-backports main restricted universe multiverse

deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic-backports main restricted universe multiverse

deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic-security main restricted universe multiverse

deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic-security main restricted universe multiverse

deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic-proposed main restricted universe multiverse

deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic-proposed main restricted universe multiversew
```

## linux全局变量

> PATH确认方法
```bash
echo $PATH
```

> 方式一：/etc/profile 配置

```bash

vim /etc/profile
 
#最后添加下面内容
export JAVA_HOME=/usr/local/jdk/jdk1.8
export PATH=.:$JAVA_HOME/bin:$PATH

```

> 方式二：/etc/profile.d 配置

```bash
vim /etc/profile.d/java.sh
 
#java jdk1.8 env
export JAVA_HOME=/usr/local/jdk/jdk1.8

```



根据优先级先后顺序用：分割，因此可以复数指定

> PATH设定方法(临时)

```bash
export PATH=$PATH:/usr/local/scala/bin
```

> ps:这个文件是login的时候才生效的，因此需要马上生效的情况，请执行以下命令
```bash
source /etc/profile
# 或者
source .bash_profile

```

> 全局多个变量使用 : 隔开

```bash
# go
export GOROOT="/usr/local/Cellar/go/1.13.4/libexec"
export GOPATH=/Users/bigbird/goCode
export GOBIN=$GOPATH/bin
export PATH=$GOROOT:$GOPATH:$GOBIN:$PATH
```

## linux查看系统活动监视器

```bash
gnome-system-monitor
```

## 新一代编辑器micro

```bash
curl https://getmic.ro | bash

# 缺少 Install xclip/xsel on CentOS / RedHat
curl -L https://git.io/XClipYum | sh
curl -L https://git.io/XSelYum | sh
```

## mac制作u盘启动盘

```bash
# 制作系统.img
hdiutil convert -format UDRW -o /Users/bigbird/linux/ubuntu-20.04-desktop-amd64.img /Users/bigbird/linux/ubuntu-20.04-desktop-amd64.iso

# 烧录系统到u盘
sudo dd if=/Users/bigbird/linux/ubuntu-20.04-desktop-amd64.img.dmg of=/dev/rdisk3 bs=1m
```

## CentOS
## Ubuntu

