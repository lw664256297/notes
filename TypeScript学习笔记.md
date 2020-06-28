# TypeScript 学习笔记

## 目录

- [参考详细文档](#参考TypeScript详细文档)
- [变量声明类型](#变量声明类型)
- [Interface 接口](#Interface接口)
- [Interface 继承](#Interface继承)

- [Function 函数](#Function函数)
- [Function 继承](#Function继承)

- [Function 继承 接口](#Function继承接口)

- [TypeScript 实际使用中的注意事项及问题](#TypeScript实际使用中的注意事项及问题)

> 参考 TypeScript 详细文档

- [点击我跳转 TypeScript 详细文档页面](https://ts.xcatliu.com/introduction/what-is-typescript.html)

## 变量声明类型

```typescript
let age: number = 12;
let name: string = "张德帅";
let isOk: boolean = false;
let _null: null = null;
let _undefined: undefined = undefined;
let nowName: number | string = 1;
```

## Function 函数

```typescript
// 无返回值
function Say(name: string): void {
  console.log(name);
}

// 默认参数
function Say(name: string = "张德帅"): void {
  console.log(name);
}

// 参数非必传
function Say(name?: string): void {
  console.log(name);
}

// 有返回值
function SayOne(name: string): string {
  console.log(name);
  return name;
}

// 返回值联合类型
function SayTwo(name: string): string | number {
  console.log(name);
  return name;
}

// 函数断言
function SaySan(name: string | number): boolean {
  if (typeof name === "string") {
    return true;
  }
  return false;
}
```

## Interface 接口

> interface 声明

```typescript
// 定义
interface Adata {
  name: string;
  age: number;
  sex: string;
}

// 非必传
interface Adata {
  sex?: string;
}
```

> Interface 继承

```bash
interface Adata {
  name: string;
}

interface Bdata extends Adata {
  age: number;
}

let cData: Bdata = {
  name: "张德帅",
  age: 18,
};
console.log(cData);
```

## class 类

> class 继承 class

> class 继承 interface

> class 多个继承

## 面向对象编程

## 函数式编程

> TypeScript 实际使用中的注意事项及问题
