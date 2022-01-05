<template>
  <div class="demo">
    <h2>{{ massage }}</h2>
    <h3>学校名称:{{ name }}</h3>
    <h3 class="qwe">学校地址:{{ address }}</h3>
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
  mounted() {
    this.$bus.$on('hehe', (data) => {
      console.log('我接收到了Student传来的数据', data);
    });
  },

  beforeDestroy() {
    this.$bus.$off('hehe');
  }
};
</script>

<style lang="less" scoped>
.demo {
  background: blue;
}
</style>