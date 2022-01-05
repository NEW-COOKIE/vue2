<template>
  <div>
    <h1 v-text="schllo" ref="title"></h1>
    <button type="button" ref="btn" @click="ShowDom">点击获取Dom</button>
    <Student ref="stu"></Student>
  </div>
</template>

<script>
import Student from "./components/Student.vue";

export default {
  name: "App",
  components: { Student },
  data() {
    return {
      schllo: "欢迎学习Vue",
    };
  },
  methods: {
    ShowDom() {
      console.log(this.$refs.title); // 获取h1元素
      console.log(this.$refs.btn); // 获取button
      console.log(this.$refs.stu); // 获取student组件实例对象
    },
  },
};
</script>

<style>
</style>