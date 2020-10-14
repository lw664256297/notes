# Vue 学习笔记

- 创建项目
- [Vue 实际使用中的注意事项及问题](#Vue实际使用中的注意事项及问题)

> 创建项目

```bash
vue create hello-world
```

> Vue 实际使用中的注意事项及问题

```html
<el-dropdown
    v-else-if="item.tag ===
    @command="key => tableHandlerS(key, item)" />
</el-dropdown>
```

> slot

```html
<!-- 子组件 -->
<van-nav-bar
  :title="title"
  :left-text="leftTexts"
  :right-text="rightText"
  :left-arrow="leftArrow"
  :border="border"
  :fixed="fixed"
  :z-index="zIndex"
  :placeholder="placeholder"
  @click-left="onClickNavHeadLeft"
  @click-right="onClickNavHeadRight"
>
  <template slot="title">
    <slot name="title"></slot>
  </template>
</van-nav-bar>

<!-- 父组件 -->
<NavHead
  :title="title"
  :leftTexts="leftTexts"
  :leftArrow="false"
  :fixed="true"
  :placeholder="true"
>
  <div slot="title">
    <div class="asdas">这是要插入的内容dgdfgd</div>
  </div>
</NavHead>
```

> 使用 typeScript 的时候 ref 报错

```ts
// 正确写法
(this.$refs.PopAddMoneyLog as PopAddMoneyLog).isShow();
```

> 子组件调用父组件方法

```js
// 父组件方法
fatherMethod() {
  console.log('father组件');
}
// 子组件
this.$parent.fatherMethod();
```

> this.\$emit

```js
// 组件定义一个方法，使用关关键字 this.$emit 暴露出来;
submit() {
  this.$emit('submit', true)
},

// 使用
<xxx
@submit="submitaa"
></xxx>

submitaa(){
  console.log('-----1')
}
```

## 图片引用

```html
// 方法已一
<template>
  <div class="AboutUs-main">
    <b-container fluid>
      <div class="about-head">
        <b-img :src="aboutImgSrc" fluid alt="公司前台"></b-img>
      </div>
    </b-container>
  </div>
</template>
<script>
  // 关于我们-公司图片
  import imgSrc1 from "@images/AboutUs/AboutUsHead.png";
  export default {
    data() {
      return {
        aboutImgSrc: imgSrc1,
      };
    },
  };
</script>

// 方法已二
<template>
  <img :src="imgsrc" />
</template>
<script>
  export default {
    data() {
      return {
        imgsrc: require("../../images/ICON-electronicbilling.png"),
      };
    },
  };
</script>
```

## vue.cconfig.js 配置

```js
const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  chainWebpack: (config) => {
    config.resolve.alias
      .set("@public", resolve("public"))
      .set("@", resolve("src"))
      .set("@components", resolve("src/components"))
      .set("@mixins", resolve("src/mixins"))
      .set("@views", resolve("src/views"))
      .set("@images", resolve("src/assets/images"))
      .set("@css", resolve("src/assets/css"));
  },
};
```

## 解决 vue 新增对象，没有双向绑定,浅拷贝

```js
// 解决-vue双向绑定,新增对象没有双向绑定
this.newGoodItem = Object.assign({}, this.newGoodItem);
```

## router 跳转

```js
// 字符串
this.$router.push("/home/first");

// 对象
this.$router.push({ path: "/home/first" });

// 命名的路由
this.$router.push({ name: "home", params: { userId: wise } });
```

## vuex 传值

```js
import { Getter } from "vuex-class";
@Getter("navTitle") public navTitle!: string;
```

## 改变 vue 组件样式使用 deep

```css
/deep/ {
  .van-pull-refresh {
    min-height: 100%;
  }
  .van-list__finished-text {
    line-height: 50px;
    margin-top: -7px;
  }
}
```

## 代理设置

```json
devServer: {
    proxy: {
      // 请求代理服务器
      "/api": {
        //前缀
        target: "http://47.xxx.xxx.xx:7773", //代理目标地址
        // target: 'http://192.168.1.130:7773',
        changeOrigin: true,
        pathRewrite: {
          // 在发出请求后将/api替换为''空值，这样不影响接口请求
          "^/api": " ",
        },
      },
    },
    host: "localhost", //指定使用一个 host。默认是 localhost，这里默认值即可
    port: 8080, //指定端口
    hot: true, // 开启热更新
    https: false, // 是否开启https模式
  },
```
