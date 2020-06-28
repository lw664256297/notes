export class Tool {
  public name: string;
  public age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  say() {
    console.log(`我叫${this.name}`);
  }
}
export function SayHi(name: string) {
  console.log(`你好${name}`);
}
