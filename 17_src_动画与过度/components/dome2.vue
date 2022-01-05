<template>
  <div>
    <button @click="isShow = !isShow">点击隐藏</button>
    <transition-group name='hello' appear>
      <h1 v-show="!isShow" :key='1'>hello</h1>
      <h1 v-show="isShow" :key='2'>guigu</h1>
    </transition-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: true,
    };
  },
};
</script>

<style>
  h1 {
    background: orange;
  }

  .hello-enter-active, .hello-leave-active {
    transition: 1s linear;
  }

  .hello-enter,  .hello-leave-to{
    transform: translateX(-100%);
  }

  .hello-event-to, .hello-leave {
    transform: translateX(0);
  }
</style>