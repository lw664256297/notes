# Linux 学习笔记

> mac 制作 u 盘启动盘

```bash
# 制作系统.img
hdiutil convert -format UDRW -o /Users/bigbird/linux/ubuntu-20.04-desktop-amd64.img /Users/bigbird/linux/ubuntu-20.04-desktop-amd64.iso

# 烧录系统到u盘
sudo dd if=/Users/bigbird/linux/ubuntu-20.04-desktop-amd64.img.dmg of=/dev/rdisk3 bs=1m
```
