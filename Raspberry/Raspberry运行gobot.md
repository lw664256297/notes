## 目录

- 准备阶段
- 开发阶段
- 编译及上传代码
- 运行
- 总结

### 准备阶段

> 硬件

- 装了系统的 树莓派 4 (笔者是 Raspbian Buster Lite September 2019)
- LED 灯
- 面包版
- 线若干

> 程序开发环境

- 一台笔记本（笔者是 mac）
- 编码器（笔者是 vs code）
- go 语言 (笔者是 go version go1.13.1 darwin amd64) (如果你还没有安装 go，请安装)

### 开发阶段

> 树莓派连接 LED

![2019-12-24 23.50.46.jpg](https://upload-images.jianshu.io/upload_images/20272322-d50266b056469e28.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

> 写代码！！！

说明：这里笔者使用 gobot 框架
官网：https://gobot.io/documentation/platforms/raspi/

- 在 src 目录下创建一个目录 raspberry  并且创建一个 go 程序 main.go

![image.png](https://upload-images.jianshu.io/upload_images/20272322-f89430c57cb41f89.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

- 安装 我们的 gobot 框架
  执行命令： go get -d -u gobot.io/x/gobot/...

- 在 main.go 写入

```go
package main

import (
	"time"

	"gobot.io/x/gobot"
	"gobot.io/x/gobot/drivers/gpio"
	"gobot.io/x/gobot/platforms/raspi"
)

func main() {
    r := raspi.NewAdaptor()
    // 注意引角
	led := gpio.NewLedDriver(r, "11")

	work := func() {
		gobot.Every(1*time.Second, func() {
			led.Toggle()
		})
	}

	robot := gobot.NewRobot("blinkBot",
		[]gobot.Connection{r},
		[]gobot.Device{led},
		work,
	)

	robot.Start()
}

```

> 编译

执行下面命令:

     GOARM=7 GOARCH=arm GOOS=linux go build main.go

命令执行完成后，会生成一个 main 的二进制文件，那个就是我们的程序

备注：如果你想编译其他版本的树莓程序？修改 GOARM 即可
GOARM=6 (Raspberry Pi A, A+, B, B+, Zero) GOARM=7 (Raspberry Pi 2, 3)

> 上传

备注：总结后面有上传脚本 ^ _ ^ 1.请确保你已经连接到树莓派了 2.如果无法上传，或者报错，请查权限是否正确

执行上传命令:
scp main pi@192.168.1.xxx:/home/pi/

> 运行

1.请确保你已经连接到树莓派了
进入 /home/pi (就是你刚上传的文件路径)
运行它： ./main
![image.png](https://upload-images.jianshu.io/upload_images/20272322-74890bd56b5833a6.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

> 效果

![image.png](https://upload-images.jianshu.io/upload_images/20272322-b416bda0f2d0d69f.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

祝你好运!

### 总结

1.上传文件的时候，请注意命令 2.不知道如何 ssh 登陆树莓派？(请看我上一篇文章) 3.当然需要一点 linux 的知识

```sh
#这是你的项目地址
path1="/Users/bigbird/goCode/src/raspberry/main"
# 打包
GOARM=7 GOARCH=arm GOOS=linux go build main.go
# go
rsync -avrP  $path1 pi@192.168.43.145:/home/pi/gobot/sensorDemo/leds
```
