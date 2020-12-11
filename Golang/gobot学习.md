# gobot 学习

## 目录

- [安装-gort](#安装-gort)

## 安装-gort

```bash
go clone https://github.com/hybridgroup/gort

# 进入文件编译
go build xxx

# 运行
```

## 安装草图

````bash
# 扫描usb接口-找到es8266
gort scan
```

# 安装
```bash
gort arduino upload firmata /dev/cu.wchusbserial1410
```

Invalid/no subcommand supplied.

Usage:

# installs avrdude to allow uploading of sketches to Arduino

gort arduino install

# uploads Firmata sketch to Arduino

gort arduino upload firmata <port> [flags]

# uploads Rapiro sketch to Arduino

gort arduino upload rapiro <port> [flags]

# uploads a custom sketch to Arduino

gort arduino upload <custom-firmware-filename> <port> [flags]

    upload flags:
      -b < m328 | uno | nano | mini | ethernet | fio | m168 |
           diecimila | stamp | mega | mega1280 | mega2560 | megaADK |
           leonardo | robot | micro | esplora >
````
