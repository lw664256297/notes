# Vue3-js 学习笔记

## 目录

- [reactive 数据绑定](#reactive数据绑定)
- [事件绑定](#事件绑定)
- [生命函数周期](#生命函数周期)
- [计算属性-computed](#计算属性-computed)
- [props](#props)
- [emit-自定义事件](#emit-自定义事件)
- [ref-获取元素及子组件](#ref-获取元素及子组件)
- [watch](#watch)
- [vue3-组件通信](#vue3-组件通信)
- [reactive-ref-区别](#reactive-ref-区别)

## 前言

> 优秀的教程

- [vue3 官网](https://vue3js.cn/)

### reactive 数据绑定

```html
<template>
  <div class="app">
    <h1>{{ state.name }}</h1>
  </div>
</template>

<script>
  import { reactive } from "vue";
  export default {
    name: "App",
    setup() {
      const state = reactive({
        name: "朱大常",
      });

      return { state };
    },
  };
</script>
```

### 事件绑定

```html
<template>
  <div class="app">
    <h1>{{ state.name }}</h1>
    <button type="button" @click="login">按钮</button>
  </div>
</template>

<script>
  import { reactive } from "vue";
  export default {
    name: "App",
    setup() {
      // 数据定义
      const state = reactive({
        name: "朱大常",
      });
      // 事件定义
      const login = () => {
        state.name = "朱大常001";
      };
      return { state, login };
    },
  };
</script>
```

### 生命函数周期

> onMounted

```html
<template>
  <div class="app"></div>
</template>

<script>
  import { onMounted } from "vue";
  export default {
    name: "App",
    setup() {
      // 组件加载
      onMounted(() => {
        console.log("组件已挂载");
      });
    },
  };
</script>
```

### 计算属性-computed

> computed (只要监听的那个数据改变，就会重新计算)

```html
<template>
  <div class="app">
    <h1>{{ state.name }}</h1>
    <h2>岁数:{{ state.age }}</h2>
    <h3>计算后的属性:{{ state.setComputed }}</h3>

    <input type="text" v-model="state.username" />
    <button type="button" @click="login">按钮</button>
  </div>
</template>

<script>
  import { reactive, computed } from "vue";
  export default {
    name: "App",
    setup() {
      // 数据定义
      const state = reactive({
        name: "朱大常",
        username: "",
        age: 18,
        setComputed: computed(() => state.age + 2),
      });
      // 事件定义
      const login = () => {
        state.name = state.username;
      };
      setTimeout(() => {
        state.age = 19;
      }, 2000);
      return { state, login };
    },
  };
</script>
```

### props

```html
<!-- 子组件 -->
<template>
  <h1>子组件：{{ title }}</h1>
</template>

<script>
  import { onMounted } from "vue";
  export default {
    name: "test",
    props: {
      title: {
        type: String,
        default: "",
      },
    },
    setup(props) {
      onMounted(() => {
        console.log("----组件加载完成-props值为", props.title);
      });
    },
  };
</script>

<!-- 父组件 -->
<template>
  <div class="app">
    <test :title="state.title"></test>
  </div>
</template>

<script>
  import { reactive } from "vue";
  import test from "./components/test";
  export default {
    name: "App",
    components: {
      test,
    },
    setup(props) {
      // 数据定义
      const state = reactive({
        title: "朱大常",
      });
      return { state };
    },
  };
</script>
```

### emit-自定义事件

> emit 传值-注意这里的事件生命使用小写加-

```html
<!-- 子组件 -->
<template>
  <button type="button" @click="handleClick">emit按钮</button>
</template>

<script>
  import { onMounted } from "vue";
  export default {
    name: "test",
    setup({ emit }) {
      const handleClick = () => {
        emit("my-event", "hello");
      };
      return { handleClick };
    },
  };
</script>

<!-- 父组件 -->
<template>
  <div class="app">
    <test @my-event="parentClick"></test>
  </div>
</template>

<script>
  import { reactive } from "vue";
  import test from "./components/test";
  export default {
    name: "App",
    components: {
      test,
    },
    setup(props) {
      // 数据定义
      const state = reactive({
        name: "朱大常",
      });

      const parentClick = (e) => {
        console.log(e);
      };

      return { parentClick };
    },
  };
</script>
```

### ref-获取元素及子组件

> ref 注意-相比 vue2.x 有很大的改变--ref 和 reactive 差别-ref 线

```html
<!-- 子组件 -->
<template>
  <div></div>
</template>

<script>
  import { ref } from "vue";
  export default {
    name: "test",
    setup() {
      // 1. 定义响应式的数据
      const count = ref(1);

      // 2. 定义方法
      const refsgh = () => {
        console.log("-----k");
      };
      return { count, refsgh };
    },
  };
</script>

<!-- 父组件 -->
<template>
  <div class="app">
    <test ref="comRef"></test>
    <button @click="clickClid001">获取子组成数据</button>
    <button @click="clickClid002">调用子组件方法</button>
  </div>
</template>

<script>
  import { ref } from "vue";
  import test from "./components/test";
  export default {
    name: "App",
    components: {
      test,
    },
    setup() {
      // 1. 创建一个组件的 ref 引用
      const comRef = ref(null);

      // 2. 获取子组成的值
      const clickClid001 = () => {
        console.log(comRef.value.count);
      };

      // 3. 调用子组件的方法
      const clickClid002 = () => {
        comRef.value.refsgh();
      };
      return { comRef, clickClid001, clickClid002 };
    },
  };
</script>
```

### watch

```html
<template>
  <div class="app">
    <button @click="watch001">watch方法</button>
    <!-- 这里.value可以省略 -->
    <h4>ref值:{{ nameref }}</h4>
  </div>
</template>

<script>
  import { watch } from "vue";
  export default {
    name: "App",
    setup() {
      const nameref = ref("朱大常");
      watch(nameref, (newValue, oldValue) => {
        // 输出 前端有的玩 子君
        console.log(newValue, oldValue);
      });

      const watch001 = () => {
        nameref.value = "张德帅";
      };
      return {
        watch001,
        nameref,
      };
    },
  };
</script>
```

### vue3-组件通信

### reactive-ref-区别
