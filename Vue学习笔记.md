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
