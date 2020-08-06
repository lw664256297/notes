# Linux 学习笔记

> mac 制作 u 盘启动盘

```bash
# 制作系统.img
hdiutil convert -format UDRW -o /Users/bigbird/linux/ubuntu-20.04-desktop-amd64.img /Users/bigbird/linux/ubuntu-20.04-desktop-amd64.iso

# 烧录系统到u盘
sudo dd if=/Users/bigbird/linux/ubuntu-20.04-desktop-amd64.img.dmg of=/dev/rdisk3 bs=1m
```

> linux 移动文件命令

```bash
mv xxxdir(要移动的目录) xxxdir(目标目录)
```

> linux 更换国内源

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

> linux 配置多个 环境变量

```bash
export NODE_HOME=/usr/local/node-v12.18.3-linux-x64
export GO_HOME=/usr/local/go/bin
export PATH=$GO_HOME:$NODE_HOME/bin:$PATH
```

> linux 查看系统活动监视器

```bash
gnome-system-monitor
```
