# Javascript 学习笔记

## 数组操作

> filter 方法 Es6

```javascript
//单个条件筛选
let arr = [
  { a: "苹果", b: "桃子", c: "吃" },
  { a: "香蕉", b: "面包", c: "不吃" },
  { a: "香蕉", b: "苹果", c: "吃" },
  { a: "苹果", b: "菠萝", c: "不吃" },
];
console.log(arr.filter((item) => item.a === "苹果")); //[{a:'苹果',b:'桃子',c:'吃'},{a:'苹果',b:'菠萝',c:'不吃'}]
```

> 快速删除数组某个指定数据

```javascript
ol.splice(ol.findIndex((item) => item.skuCode === _skuCode),1);
```
