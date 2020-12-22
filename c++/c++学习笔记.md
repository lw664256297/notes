# c++学习笔记

## 目录

- [安装编译器](#安装编译器)
- [编写第一个-c++程序](#编写第一个-c++程序)
- [变量](#变量)

## 安装编译器

> Linux

```bash
# 查看编译器安装
$ g++ -v
```

> Windows ？

## 编写第一个-c++程序

> 创建文件 .cpp

```c
// 创建一个文件xx.cpp
#include <iostream>

int main()
{
std::cout << "Hello World!\n";
return 0;
}
```

> 编译.cpp

```bash
# -o 的意思是编译可执行文件
g++ main.cpp -o main
```
