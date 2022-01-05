<template>
<div class="demo">
  <h2>{{massage}}</h2>
  <h3>学生姓名:{{name}}</h3>
  <h3>学生年龄:{{age}}</h3>
  <h3>学生性别:{{sex}}</h3>
</div>
</template>

<script>
export default {
  data() {
    return {
      massage: '学生信息',
    }
  },
  /* props中的数据只能读取不能修改 如果需要修改需要复制一份到data中进行修改 */
  // 简单接收
  /* props: ['name', 'sex', 'age'] */

  // 类型限制接收
  /* props: {
    name: String,
    sex: String,
    age: Number
  } */

  //  详细限制接收
  props: {
    name: {
      type: String, // 类型
      require: true // 是否必传
    },

    age: {
      type: Number, // 类型
      default: 19 // 默认值
    },

    sex: {
      type: String,  // 类型
      default: '男' // 默认值
    }
  }
}
</script>

<style>
.demo {
  background: orange;
}
</style>