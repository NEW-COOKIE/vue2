<template>
  <div class="demo">
    <h2>{{ massage }}</h2>
    <h3>学校名称:{{ name }}</h3>
    <h3 class="qwe">学校地址:{{ address }}</h3>
  </div>
</template>

<script>
import pubsub from 'pubsub-js';

export default {
  props: ["getSchoolName"],
  data() {
    return {
      massage: "学校信息",
      name: "尚硅谷",
      address: "深圳",
    };
  },
  mounted() {
    this.subId = pubsub.subscribe('hehe', (message, data) => { // 订阅消息
      console.log('订阅了消息', message, data);
    });
  },

  beforeDestroy() {
    pubsub.unsubscribe(this.subId); // 销毁时取消订阅
  }
};
</script>

<style lang="less" scoped>
.demo {
  background: blue;
}
</style>