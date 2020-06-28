import * as tools from "./tools/tools";

// -----------------------------------interface声明及继承----------
// 声明
interface Adata {
  name: string;
}

// 继承
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

// -----------------------------------函数声明----------
// 无返回值
function Say(name: string): void {
  console.log(name);
}

// 有返回值
function SayOne(name: string): string {
  console.log(name);
  return name;
}

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

// ------------------------Class---------------------
// 声明
class Qdata {
  public name: string;
  public age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  Say() {
    console.log(`你好，我叫------:${this.name}`);
  }
}
let _Qdata = new Qdata("张德帅", 18);
_Qdata.Say();

// 继承
class WData extends Qdata {
  public sex: string;
  constructor(name: string, age: number, sex: string) {
    super(name, age);
    this.sex = sex;
  }
  Say() {
    super.Say();
  }
}
let _WData = new WData("张德帅2", 18, "男");
_WData.Say();

// class 实现 Interface
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
