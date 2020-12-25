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

sudo vim /etc/apt/sources.list

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
# python3
export PYTHON3="/Library/Frameworks/Python.framework/Versions/3.6/bin"
# android-sdk
export ANDROID_HOME_TOOLS=/usr/local/opt/android-sdk/tools
export ANDROID_HOME_PLATFORM_TOOLS=/usr/local/opt/android-sdk/platform-tools

# go
export GOROOT="/usr/local/Cellar/go/1.13.4/libexec"
export GOPATH=/Users/bigbird/goCode
export GOBIN=$GOPATH/bin

export PATH=$PYTHON3:$ANDROID_HOME_TOOLS:$ANDROID_HOME_PLATFORM_TOOLS:$GOROOT:$GOPATH:$GOBIN:$PATH

```

> linux 查看系统活动监视器

```bash
gnome-system-monitor
```

> 使用 mac 的 Iterm2

        使用 Iterm2 的时候，发现.bash_profile 修改完后，没有生效,每次都必须 source 后才生效
        1.解决办法,修改文件

```bash
# 打开文件
vim /Users/xxx/.zshrc
# 增加命令
source /Users/xxx/.bash_profile
```
