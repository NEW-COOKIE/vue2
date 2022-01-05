<template>
  <div class="demo">
    <h2 @click="showHello">{{ massage }}</h2>
    <h3>学生姓名:{{ name }}</h3>
    <h3>学生年龄:{{ address }}</h3>
  </div>
</template>

<script>
import { hunhe } from "../mixins";

export default {
  data() {
    return {
      massage: "学校信息",
      name: "尚硅谷",
      address: "深圳",
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