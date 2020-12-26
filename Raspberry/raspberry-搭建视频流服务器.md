# raspberry-搭建视频流服务器

## 目录

- [安装摄像头](#安装摄像头)
- [开启摄像头接口](#开启摄像头接口)
- [安装-MJPG-软件](#安装-MJPG-软件)

## 其他教程

- https://blog.csdn.net/fhqlongteng/article/details/80433633

- https://shumeipai.nxez.com/2017/05/14/raspberry-pi-mjpg-streamer-installation.html

## 安装摄像头

- 打开摄像头

```bash
# 设置摄像头为开
sudo raspi-config

# 拍照生成一张图片
raspistill -v -o test.jpg
```

## 安装软件

```bash
sudo apt-get update
sudo apt-get install subversion
sudo apt-get install libjpeg8-dev
sudo apt-get install imagemagick
sudo apt-get install libv4l-dev
sudo apt-get install cmake
sudo apt-get install git


sudo git clone https://github.com/jacksonliam/mjpg-streamer.git
cd mjpg-streamer/mjpg-streamer-experimental
make all
sudo make install
```

## 开启服务

```bash
sudo modprobe bcm2835-v4l2

./mjpg_streamer -i "./input_uvc.so -d /dev/video0 -n -y -f 25 -r 640x480" -o "./output_http.so -p 3000 -n -w /usr/local/www"
```

## 访问地址

- http://192.168.5.2:8080/?action=stream
