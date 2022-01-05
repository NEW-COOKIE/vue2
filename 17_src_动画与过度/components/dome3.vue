<template>
  <div>
    <button @click="isShow = !isShow">点击隐藏</button>
    <transition-group
    appear
    name='animate__animated animate__bounce animate__faster'
    enter-active-class="animate__rotateInDownRight"
    leave-active-class="animate__rotateOutUpLeft"
    >
      <h1 v-show="!isShow" :key='1'>hello</h1>
      <h1 v-show="isShow" :key='2'>guigu</h1>
    </transition-group>
  </div>
</template>

<script>
import 'animate.css'

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
</style>