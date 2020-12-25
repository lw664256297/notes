# Shell 脚本学习笔记

## 常用命令

- [点击我查看详细命令教程](https://www.runoob.com/linux/linux-command-manual.html)

> scp 上传服务器 或者 下载内容到本地

# 下载

```bash
scp -P 29130 root@xxx.xxx.xxx:/root/api-demo/apiserver.zip /Users/bigbird/Down104
```

# 上传

```bash
# windows 注意路径
scp D:\web\notes\file\mqttstart.sh pi@192.168.5.72:/home/pi
```

# 查看 ip 地址

```bash
ip add
```

# 查看 ip 和端口是否接通

```bash
telnet 104.128.89.101 9001
```

# 压缩文件

```bash
tar xvf xxx
```

# 查询同一个网段下，所有的 ip

```bash
#!/bin/bash
star=`date +%s`
echo "*********Running...**********"
for ((i = 0; i <= 255; i++))
do
{
       ping 192.168.5.$i -c 2 |grep -q "ttl=" && echo "192.168.5.$i yes" >> ipyes.txt || echo "192.168.5.$i no" >> ipno.txt
}&
done
wait

end=`date +%s`
echo $end
echo "*************Spent Time:`expr $end - $star `**************"
```
