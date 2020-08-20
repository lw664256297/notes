# Javascript 学习笔记

## 数组操作

> filter 方法 Es6

```javascript
//查找数组中所有的满足的数据-----------返回所有数据
let arr = [
  { a: "苹果", b: "桃子", c: "吃" },
  { a: "香蕉", b: "面包", c: "不吃" },
  { a: "香蕉", b: "苹果", c: "吃" },
  { a: "苹果", b: "菠萝", c: "不吃" },
];
console.log(arr.filter((item) => item.a === "苹果")); //[{a:'苹果',b:'桃子',c:'吃'},{a:'苹果',b:'菠萝',c:'不吃'}]
```

```javascript
//查找数组中所有的满足的数据-----------返回查找到的第一个数据
let arr = [
  { a: "苹果", b: "桃子", c: "吃" },
  { a: "香蕉", b: "面包", c: "不吃" },
  { a: "香蕉", b: "苹果", c: "吃" },
  { a: "苹果", b: "菠萝", c: "不吃" },
];
console.log(arr.find((item) => item.a === "苹果")); //[{a:'苹果',b:'桃子',c:'吃'},{a:'苹果',b:'菠萝',c:'不吃'}]
```

> 快速删除数组某个指定数据

```javascript
ol.splice(
  ol.findIndex((item) => item.skuCode === _skuCode),
  1
);
```

> 深拷贝-浅拷贝

```javascript
// 深拷贝
JSON.parse(JSON.stringify(_data));
// 浅拷贝
let asd = Object.assign({}, data);
```
