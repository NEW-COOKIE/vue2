<template>
  <div class="demo">
    <h2>{{ massage}}</h2>
    <h3>学生姓名:{{ name }}</h3>
    <h3>学生年龄:{{ age }}</h3>
  </div>
</template>

<script>

export default {
  data() {
    return {
      massage: "学生信息sdafadsf",
      name: "张三",
      age: 19,
    };
  }
};
</script>

<style scoped>
.demo {
  background: orange;
}
</style>