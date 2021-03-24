# Vue

# 目录

- [Vue 数据双向绑定原理](#Vue-数据双向绑定原理)
- [Vue 生命周期](#Vue-生命周期)
- [Vue 钩子函数](#Vue-钩子函数)
- [Vue 组件通信](#Vue-组件通信)
- [Vuex 使用](#Vuex-使用)
- [vue-slot](#slot)
- [vue-router 钩子函数（路由拦截）](<#vue-router钩子函数(路由拦截)>)
- [\$nextTick 原理](#$nextTick原理)
- [keep-alive](#keep-alive)
- [代理设置](#代理设置)
- [router-跳转](#router-跳转)
- [vue.cconfig.js-配置](#vue.cconfig.js-配置)
- [使用-typeScript-ref-报错](#使用-typeScript-ref-报错)
- [图片引用](#图片引用)
- [prors-input-输入框如何封装](#prors-input-输入框如何封装)
- [Vue-点击事件禁止冒泡](#Vue-点击时间禁止冒泡)
- [Vue-移入移出事件](#Vue-移入移出事件)

### Vue 数据双向绑定原理

- 劫持监听所有属性 Observer 👉 通知 Dep-得普 通知 👉 Watcher-瓦切儿 （反向-向 Dep-得普 添加订阅者）

- 解析指令 Compile-康派儿 订阅数据变化，绑定更新函数 👉 Watcher-瓦切儿

  👇
  初始化视图

  👇
  Updater

![Vue双向绑定原理图](../../public/img/vue双向绑定原理.png)

### Vue-生命周期

- beforeCreate (组件实例刚被创建，组件属性计算之前，如 data 属性等)
- created (组件实例创建完成， 属性已绑定，但 DOM 还未生成, \$el 属性不存在)
- beforeMount-比佛毛特儿 (模版编译/挂载之前)
- mounted-某儿得 (模版编译/挂载之后-不保证组件已在 document 中)
- beforeUpdate (组件更新之前)
- updated (组件更新之后)
- activated (for keep-alive 组件被激活时被调用)
- deactivated-滴阿克味得 (for keep-alive 组件被移除时调用)
- deforeDestory-滴佛丝得瑞 (组件销毁前调用)
- destoryed-滴丝尊儿 (组件销毁后调用)

### Vue-钩子函数

- methods-马甚丝 (对象中定义方法)
- computed (计算属性)

### Vue-组件通信

> 父组件和子组件通信

- props-破软丝 (传值)
- ref-瑞府 （调用子组件的方法）

```js
// 子组件
<div>
  <p class="title">{{ title }}</p>
</div>
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
  },
  methods:{
      show(data){
          console.log('----', data)
      },
  }
};
// 父组件
<MenuNav :title="title" ref="MenuNav"</MenuNav>
<p @click="show">显示</p>
import MenuNav from "@components/MenuNav/MenuNav.vue";
export default {
    data(){
        return{
            title:"这是父组件得值"
        }
    },
    methods:{
        show(){
            this.$refs.MenuNav.show('id')
        }
    }

}
```

> 子组件和父组件通信

- props-破软丝
- \$parent-佩润特
- \$emit 是手动触发当前实例上的一个指定事件。
- \$on 是用来在监听(注册)自定义事件的。

```js
// 父组件
<MenuNav :parentHide="parentHide" @getParent3="getParent3"></MenuNav>
import MenuNav from "@components/MenuNav/MenuNav.vue";
export default {
    data(){
        return{
            title:""
        }
    },
    methods:{
        parentShow(){
            console.log('-----父组件的方法1')
        },
        parentHide(){
            console.log('------父组件的方法2')
        },
        getParent3(data){
            console.log("------这是父组件的方法3", data);
        }
    }

}

// 子组件
<div>
  <p class="title"></p>
  <button @click="show"></button>
  <button @click="hide"></button>
  <button @click="getParent3">调用父组件的方法3</button>
</div>
export default {
  props: {
    parentHide: {
      type: Function,
      default: ()=>{},
    },
  },
  methods:{
      show(){
         this.$parent.parentShow()
      },
      hide(){
          this.parentHide()
      },
      getParent3() {
          this.$emit("getParent3", "这是子组件的值");
      },
  }
};

```

> 不相干的组件

使用 vuex

### Vuex-使用

> 第一步在 store 增加方法

```js
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    name: "默认名字"
  },
  // 格的儿丝
  getters: {
    name: (state) => state.name
  },
  // 莫特甚丝
  mutations: {
    setName(state, data) {
      state.name = data;
    }
  },
  actions: {
    changeName({ commit }, data) {
      commit("setName", data);
    }
  },
  modules: {}
});
```

> 第二步 在需要改变的地方监听

```js
import { mapGetters } from "vuex";
// computed 是计算属性，只要有值改变就会触发
computed: {
  ...mapGetters({
    name: "name",
  }),
},
```

> 第三步调用

```js
<button @click="changeStoreName">改变name</button>

changeStoreName() {
  // dispatch-得丝败切
  this.$store.dispatch("changeName", "通过vue传");
},
```

### slot

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

### vue-router-钩子函数(路由拦截)

> 全局的钩子函数

- (之前)beforeEach（to，from，next） 每次每一个路由改变的时候都得执行一遍。
- (每次之后)afterEach（to，from，next） 每次页面加载之后

> 单个的路由钩子函数

- (之前)beforeEnter （to，from，next）设置单个路由钩子函数

> 组件内的导航钩子

- beforeRouteEnter （to，from，next） 进入这个组建路由之前
- beforeRouteUpdate （to，from，next）离开这个组建路由
- beforeRouteLeave （to，from，next） 再本路由的下级路由切换才会触发

```js
const Foo = {
  template: `...`,
  beforeRouteEnter (to, from, next) {
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当钩子执行前，组件实例还没被创建
  },
  beforeRouteUpdate (to, from, next) {
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
  },
  beforeRouteLeave (to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`

  }
```

### \$nextTick-原理

对于 MVVM 框架结构的技术栈是不推荐操作 DOM 的，但是很多情况下可能会需要操作 DOM，特别是一些 charts 插件等

- 先判断 Promise
- 在判断 MutationObserver
- 在判断 setImmediate
- 最后 setTimeout

### keep-alive

- keep-alive 是 Vue 内置的一个组件，可以使被包含的组件保留状态，避免重新渲染
  一般结合路由和动态组件一起使用，用于缓存组件；
- 提供 include 和 exclude 属性，两者都支持字符串或正则表达式， include 表示只有名称匹配的组件会被缓存，exclude 表示任何名称匹配的组件都不会被缓存 ，其中 exclude 的优先级比 include 高；

- 对应两个钩子函数 activated 和 deactivated ，当组件被激活时，触发钩子函数 activated，当组件被移除时，触发钩子函数 deactivated

### 代理设置

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

### 解决-vue-新增对象没有双向绑定浅拷贝

```js
// 解决-vue双向绑定,新增对象没有双向绑定
this.newGoodItem = Object.assign({}, this.newGoodItem);
```

### router-跳转

```js
// 字符串
this.$router.push("/home/first");

// 对象
this.$router.push({ path: "/home/first" });

// 命名的路由
this.$router.push({ name: "home", params: { userId: wise } });
this.$router.push({ name: "home", query: { userId: wise } });

// 获取
let id = this.$route.query.id;

// 路由改变title，在需要改变的详情 create 钩子函数使用
this.$router.currentRoute.meta.title = "编辑API";
```

### 使用-typeScript-ref-报错

```ts
// 正确写法
(this.$refs.PopAddMoneyLog as PopAddMoneyLog).isShow();
```

### 图片引用

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
        aboutImgSrc: imgSrc1
      };
    }
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
        imgsrc: require("../../images/ICON-electronicbilling.png")
      };
    }
  };
</script>
```

### prors-input-输入框如何封装

> input

```js
<input
v-model="keyword"
class="in-t"
placeholder="搜索"
@input="updateValue($event.target.value)"
@keyup.enter="toList({ keyword: keyword }, 'new')"
/>

updateValue(val) {
  if (val) {
    this.keyword = val;
  }
},
```

### vue.cconfig.js-配置

> 请查看 js 文件下的 vue.config.js

### Vue-点击时间禁止冒泡

> 这个常用于点击空白消失 div

```js
<div class="qr-share-icon" @click="togglePanel($event)"></div>

// 方法一
togglePanel(event) {
  this.sharUrl = window.location.href;
  //阻止冒泡
  event || (event = window.event);
  event.stopPropagation
    ? event.stopPropagation()
    : (event.cancelBubble = true);
  this.isShowSharQr ? this.hide() : this.show();
},
show() {
  this.isShowSharQr = true;
  document.addEventListener("click", this.hidePanel, false);
},

hide() {
  this.isShowSharQr = false;
  document.removeEventListener("click", this.hidePanel, false);
},

// 方法二 注意，在ui组件中，组件需提供 @click.stop.native 操作符
<div class="qr-share-icon" @click.stop="togglePanel()"></div>
```

## Vue-移入移出事件

```html
<div @mouseenter="enter(0)" @mouseleave="leave(0)">移动事件</div>
```

## 其他面试题

- 1、vue 组件 data 为什么必须是函数； 不 ok
  首先我们知道 vue 组件最大的特性是可复用，当我们的 data 是一个函数的时候，每一个实例的 data 属性都是独立的，不会相互影响了
- 2、v-if 和 v-for 那个优先级更高；不 ok
  v_for 高，要避免出现这种情况，则在外层嵌套 template，在这一层进行 v-if 判断，然后在内部进行 v-for 循环
- 3、你了解哪些 vue 的性能调优；不 ok
  组件复用，提取公用组件，环境的配置利用 process.env.NODE_ENV 配置参数对生产环境，正式环境进行优化，对 for 循环加个判断，接口数据拆分等 cdn 等
- 5、vue 中的 computed 和 watch 的区别 ok
  computed 计算属性，在 computed 里面被缓存，每当其中一个或多个被改变时，会重新计算其属性值，watch 属性监听
- 6、谈谈 \$nextTick 的原理 不 ok
  对于 MVVM 框架结构的技术栈是不推荐操作 DOM 的，但是很多情况下可能会需要操作 DOM，特别是一些 charts 插件等
  先判断 Promise
  在判断 MutationObserver
  在判断 setImmediate
  最后 setTimeout
- 9、[] == ![] 类型转换 不 ok
  空数组会转化成数字类型去比较;
- 10、eventLoop 没听过
  Event Loop 即事件循环，是指浏览器或 Node 的一种解决 javaScript 单线程运行时不会阻塞的一种机制，也就是我们经常使用异步的原理。
- 11、const let var 不 ok
- 12、vue 中 key 的作用和工作原理 不 ok
  vue 为了节约性能，对 dom 进行了复用，对比 dom 中各个节点，替换掉一些属性，同时又保留一些东西 diff
