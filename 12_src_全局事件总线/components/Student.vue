<template>
  <div class="demo">
    <h2>{{ massage}}</h2>
    <h3>学生姓名:{{ name }}</h3>
    <h3>学生年龄:{{ age }}</h3>
    <button type="button" @click="demo">点击获取666</button>
  </div>
</template>

<script>

export default {
  data() {
    return {
      massage: "学生信息",
      name: "张三",
      age: 19,
    };
  },

  methods: {
    demo() {
      this.$bus.$emit('hehe', '666');
    }
  }
};
</script>

<style scoped>
.demo {
  background: orange;
}
</style>