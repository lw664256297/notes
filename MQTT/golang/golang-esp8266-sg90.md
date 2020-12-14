# golang-esp8266-sg90.md

## 接线图

        // pwm:橙色
        // VCC:红色（4.8-6v）
        // GND:棕色

## 代码

```golang
package main

import (
	"fmt"
	"time"

	"gobot.io/x/gobot"
	"gobot.io/x/gobot/drivers/gpio"
	"gobot.io/x/gobot/platforms/firmata"
	"gobot.io/x/gobot/platforms/mqtt"
)

// MQTT 服务器信息
const (
	Host     = "tcp://test.ranye-iot.net:1883"
	UserName = ""
	Password = ""
)

// pwm:橙色
// VCC:红色（4.8-6v）
// GND:棕色

func main() {
	// mqtt 设置ping消息
	mqttAdaptor := mqtt.NewAdaptor(Host, "pinger")
	// ESP8266 的地址
	firmataAdaptor := firmata.NewTCPAdaptor("192.168.1.43:3030")
	// ESP8266 端口
	sg90 := gpio.NewServoDriver(firmataAdaptor, "4")
	sg90.Start()

	work := func() {
		// 监听 MQTT 消息
		mqttAdaptor.On("msg", func(msg mqtt.Message) {

			// 获取 消息
			msgs := msg.Payload()
			b := string(msgs)

			fmt.Println(b)
			if b == "1" {
				sg90.Move(10)
			} else {
				sg90.Move(90)
			}

		})

		// 发布消息
		data := []byte("o")
		gobot.Every(2*time.Second, func() {
			mqttAdaptor.Publish("hello", data)
		})
	}

	robot := gobot.NewRobot("mqttBot",
		[]gobot.Connection{mqttAdaptor, firmataAdaptor},
		[]gobot.Device{sg90},
		work,
	)

	robot.Start()
}

```
