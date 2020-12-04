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

## 如果对象被覆盖,如何添加新的对象

```js
this.form = res.data;
this.form = Object.assign({}, this.form, {
  acticityTime: [new Date(res.data.startTime), new Date(res.data.endTime)],
});
```

## 滚动条监听

```js
window.addEventListener("scroll", (e) => {
  let a = document.body.scrollTop;
  console.log("--a", a);
});
```

## 窗口改变执行函数

```js
// 定义事件侦听器函数
function displayWindowSize() {
  // 获取窗口的宽度和高度，不包括滚动条
  var w = document.documentElement.clientWidth;
  var h = document.documentElement.clientHeight;
  // 在div元素中显示结果
  document.getElementById("result").innerHTML = "宽: " + w + ", " + "高: " + h;
}
// 将事件侦听器函数附加到窗口的resize事件
window.addEventListener("resize", displayWindowSize);
// 第一次调用该函数
displayWindowSize();
```
