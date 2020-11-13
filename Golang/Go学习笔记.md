# go 学习笔记

## 目录

- [安装和搭建 go 开发环境](#安装和搭建go开发环境)
- [关键字](#关键字)
- [变量](#变量)
- [Go 函数](#Go函数)
- [Go 指针](#Go指针)
- [Array 数组](#Array数组)
- [Slice 切片](#Slice切片)
- [Struct](#Struct构造体)
- [Type 自定义类型](#Type自定义类型)
- [GoJson](#GoJson)
- [GoMap](#GoMap)
- [Go 并发](#Go并发)
- [Go 打印控制台](#Go打印控制台)
- [Go 基础命令](#Go基础命令)

- [GO 实际使用中的注意事项及问题](#Go实际使用中的注意事项及问题)

## 优秀的文章及教程

- [点击我查看详细文档](https://www.liwenzhou.com/posts/Go/go_menu/)
- [apiServer 教程](http://47.104.107.180/category/Go)

## GO webServer 实战

## 安装和搭建 go 开发环境

> Mac 安装

```bash
brew install go
```

> Linux 安装

```bash
sudo apt-get install golang
```

## 关键字

- 25 关键字

  |          |             |        |           |        |
  | :------: | :---------: | :----: | :-------: | :----: |
  |  break   |   default   |  func  | interface | select |
  |   case   |    defer    |   go   |    map    | struct |
  |   chan   |    else     |  goto  |  package  | switch |
  |  const   | fallthrough |   if   |   range   |  type  |
  | continue |     for     | import |  return   |  var   |

- 36 预定义标识符

## 变量 var const

> 声明规范

    字母和下划线开头,推荐驼峰命名，变量名尽量让人看的懂

> 变量 var

```go
package main
import (
	"fmt"
)
func main()  {
	var flag bool = false // 布尔类型
	// 注意：浮点32 和浮点64 类型不一样，必须转换后，才能参与计算
	var price32 float32 = 99.00 // 浮点类型 32
	var price64 float64 = 100.12 // 浮点类型 64
	var price64s = float64(price32)

	var aname byte = 'a' // 字符类型,只能写一个，不然会报错
	// 输出的ascll 码  97
	fmt.Println(aname)
	var name string = "张德帅" // 字符串
	var age int = 18
}
```

> 常量 const

    常量不能改变,必须初始化

```go
const name = "张德帅"
```

## Go 打印控制台 fmt 包

> fmt 输出

```go
package main

import "fmt"
func main()  {
	// fmt 输出类型
	name := "张德帅"
	fmt.Println(name)

	// 格式化输出
	/*
	%s string
	%d int
	*/
	age := 18
	fmt.Printf("姓名1: %s, 年龄:%d", name, age)

	// 如果不确定变量类型怎么办？
	fmt.Printf("\n姓名2:%v, 年龄:%v", name, age)

	// 我想按照自己的需要， 将变量格式化之后赋值给另一个变量，如何操作?
	str := fmt.Sprintf("\n姓名3:%v, 年龄:%v", name, age)
	fmt.Println(str)
}
```

> fmt 输入

```go
	// fmt输入
	var name1 string
	fmt.Println("请输入姓名:")
	fmt.Scan(&name1)
	fmt.Println("你输入的姓名是:" + name1)

	// 格式化输入
	var age1 int
	fmt.Scanf("%d", &age1)
	fmt.Println("你输入的年龄是:", age1)
```

## 枚举 iota

```go
package main

import "fmt"

func main()  {
	const (
		left = iota // 0
		right = iota // 1
		above = iota // 2
		below   //
		front, back = iota, iota // 4  不换行，不增加
	)

	// 输出 0 1 2 3 4 4
	fmt.Println(left, right, above, below, front, back)
}
```

## 算术运算

    类型转换, 注意：
    int 转 float 强制转换， 多小数
    float 转int 强制转换， 丢精度

![运算符]("./public/img/Jietu20200822-152802.jpg")

## Go 函数

## Go 指针

## Array 数组

## Slice 切片

## Struct 构造体

## Type 自定义类型

## GoJson

## GoMap

## Go 并发

## Go 基础命令

## Go 实际使用中的注意事项及问题
