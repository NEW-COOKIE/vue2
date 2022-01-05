<template>
  <div class="demo">
    <h2 @click="showHello">{{ massage }}</h2>
    <h3>学生姓名:{{ name }}</h3>
    <h3>学生年龄:{{ age }}</h3>
  </div>
</template>

<script>
import { hunhe } from "../mixins";

export default {
  data() {
    return {
      massage: "学生信息",
      name: "张三",
      age: 19,
    };
  },
  mixins: [hunhe], //局部混入
};
</script>

<style>
.demo {
  background: orange;
}
</style>