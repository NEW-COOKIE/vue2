<template>
  <div class="demo">
    <h2>{{ massage }}</h2>
    <h3>学生姓名:{{ name }}</h3>
    <h3 class="qwe">学生年龄:{{ address }}</h3>
    <button type="button" @click="getName">获取学校名字</button>
  </div>
</template>

<script>
export default {
  props: ['getSchoolName'],
  data() {
    return {
      massage: "学校信息",
      name: "尚硅谷",
      address: "深圳",
    };
  },
  methods: {
    getName() {
      this.getSchoolName(this.name);
    }
  }
};
</script>

<style lang="less" scoped>
.demo {
  background: blue;
  .qwe {
    font-size: 39px;
  }
}
</style>