<template>
  <div class="demo">
    <h2>{{ massage}}</h2>
    <h3>学生姓名:{{ name }}</h3>
    <h3>学生年龄:{{ age }}</h3>
    <button type="button" @click="getName">获取学生名字</button>
    <button type="button" @click="unbind">解绑自定义事件</button>
    <button type="button" @click="death">销毁组件</button>
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
    getName() {
      this.$emit('studentname', this.name, 666, '888', '999');
      // this.$emit('demo');
    },
    unbind() {
      this.$off('studentname');
      // this.$off(['studentname', 'demo'])
      // this.$off(); // 解绑所有自定义事件
    },

    death() {
      this.$destroy();
    }
  }
};
</script>

<style scoped>
.demo {
  background: orange;
}
</style>