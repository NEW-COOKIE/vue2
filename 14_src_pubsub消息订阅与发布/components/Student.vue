<template>
  <div class="demo">
    <h2>{{ massage }}</h2>
    <h3>学生姓名:{{ name }}</h3>
    <h3>学生年龄:{{ age }}</h3>
    <button type="button" @click="getStudentName">提交学生信息</button>
  </div>
</template>

<script>
import pubsub from 'pubsub-js'

export default {
  data() {
    return {
      massage: "学生信息",
      name: "张三",
      age: 19,
    };
  },

  methods: {
    getStudentName() {
      pubsub.publish('hehe', 666); // 发布消息
    },
  },
};
</script>

<style scoped>
.demo {
  background: orange;
}
</style>