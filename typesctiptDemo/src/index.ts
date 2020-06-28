import * as tools from "./tools/tools";

// -----------------------------------interface声明及继承----------
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

// new对象
// let asd = new tools.Tool("张德帅", 18);
// asd.say();

// 调用方法
// tools.SayHi("张德帅");
