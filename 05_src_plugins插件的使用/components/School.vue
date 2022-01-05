<template>
  <div class="demo">
    <h2>{{ massage }}</h2>
    <h3>学生姓名:{{ name }}</h3>
    <h3>学生年龄:{{ address }}</h3>
    <input type="text" v-fbind:value='name'>
  </div>
</template>

<script>

export default {
  data() {
    return {
      massage: "学校信息",
      name: "尚硅谷",
      address: "深圳",
    };
  },
};
</script>

<style>
.demo {
  background: orange;
}
</style>