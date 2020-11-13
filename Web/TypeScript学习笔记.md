# TypeScript 学习笔记

## 目录

- [参考详细文档](#参考-TypeScript-详细文档)
- [变量](#变量)
- [Function 函数](#Function-函数)
- [Interface 接口](#Interface-接口)
- [Class 类](#Class-类)
- [DOM 操作](#DOM-操作)

- [TypeScript 实际使用中的注意事项及问题](#TypeScript-实际使用中的注意事项及问题)

## 参考-TypeScript-详细文档

- [点击我跳转 TypeScript 详细文档页面](https://ts.xcatliu.com/introduction/what-is-typescript.html)

## 变量

```typescript
let age: number = 12;
let name: string = "张德帅";
let isOk: boolean = false;
let _null: null = null;
let _undefined: undefined = undefined;
let nowName: number | string = 1;
```

## Function-函数

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

## Interface-接口

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

```typescript
interface Adata {
  name: string;
}

interface Bdata extends Adata {
  age: number;
}

// 多个继承
interface Ddata extends Adata, Bdata {
  sex: string;
}

let cData: Bdata = {
  name: "张德帅",
  age: 18,
};
console.log(cData);

let DDData: Ddata = {
  name: "张德帅",
  age: 18,
  sex: "男",
};
console.log(DDData);
```

## class-类

> class 声明

```typescript
class Qdata {
  public name: string;
  public age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  Say() {
    console.log(`你好，我叫-----:${this.name}`);
  }
}
let _Qdata = new Qdata("张德帅", 18);
_Qdata.Say();
```

> class 继承 class

```typescript
class WData extends Qdata {
  public sex: string;
  constructor(name: string, age: number, sex: string) {
    // 继承必须使用super函数
    super(name, age);
    this.sex = sex;
  }
  Say() {
    super.Say();
  }
}
let _WData = new WData("张德帅2", 18, "男");
_WData.Say();
```

> class 实现 Interface

**_备注： Interface 只做声明，不做实现_**

```typescript
interface Tdata {
  name: string;
  age: number;
  Say(): void;
}

interface Ydata {
  sex: string;
}

// 单个 Interface
class Tdatak implements Tdata {
  public name: string;
  public age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  Say() {
    console.log(`我叫：${this.name}`);
  }
}
let _Tdatak = new Tdatak("张德帅3", 18);
_Tdatak.Say();

// 多个Interface
class TdataKs implements Tdata, Ydata {
  public name: string;
  public age: number;
  public sex: string;
  constructor(name: string, age: number, sex: string) {
    this.name = name;
    this.age = age;
    this.sex = sex;
  }
  Say() {
    console.log(`我叫：${this.name}`);
  }
}
let _TdataKs = new TdataKs("张德帅4", 18, "男");
_TdataKs.Say();
```

## DOM-操作

```typescript
let body: HTMLElement = document.body;
let allDiv: NodeList = document.querySelectorAll("div");
document.addEventListener("click", function (e: MouseEvent) {
  // Do something
});
```

## TypeScript-实际使用中的注意事项及问题

### 1.浏览器无法运行 TypeScript

### 2.报错 Element implicitly has an 'any' type because index expression is not of type 'number'.

备注： Element implicitly has an 'any' type because expression of type 'any' can't be used to index type 'typeof

> mock.ts

```typescript
export function text(): boolean {
  return false;
}

export function setAasd(): string {
  return "asdgjhkj";
}
```

> request.ts

```typescript
interface MockIndex {
  text: "text";
}
import * as Mock from "@/api/Mock.ts";
const request = (MockIndex: keyof MockIndex) => {
  // 模拟异步请求数据
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(Mock[MockIndex]);
    }, 100);
  });
};
```
