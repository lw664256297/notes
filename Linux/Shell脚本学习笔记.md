# Shell 脚本学习笔记

## 常用命令

- [点击我查看详细命令教程](https://www.runoob.com/linux/linux-command-manual.html)

> scp 上传服务器 或者 下载内容到本地

# scp

```bash
# 上传 ---注意在windw下的 \ 路径
scp D:\web\notes\file\mqttstart.sh pi@192.168.5.72:/home/pi

# 下载
scp -P 29130 root@xxx.xxx.xxx:/root/api-demo/apiserver.zip /Users/bigbird/Down104
#
```

# 查看 ip 地址

```bash
ip add
```

# 查看 ip 和端口是否接通

```bash
telnet 104.128.89.101 9001
```

# tar-压缩文件

```bash
# 打包压缩
tar -zcvf /home/xahot.tar.gz /xahot
tar -zcvf 打包后生成的文件名全路径 要打包的目录
例子：把/xahot文件夹打包后生成一个/home/xahot.tar.gz的文件。


# 解包：
tar xvf FileName.tar
# 打包：
tar cvf FileName.tar DirName
```

# 查看文件的大小

```bash
du -h xxx
```

# 查看权限

```bash
ls -ls
```

# 拷贝文件

```bash
cp -r /opt/a/ /opt/b/ #将/opt/a/下的a.录复制到 /opt/b/目录
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
