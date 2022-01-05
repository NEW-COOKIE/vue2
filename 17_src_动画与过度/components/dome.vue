<template>
  <div>
    <button @click="isShow = !isShow">点击隐藏</button>
    <transition appear>
      <h1 v-show="isShow">hello</h1>
    </transition>
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

  .v-enter-active {
    animation: gugui 1s;
  }

  .v-leave-active {
    animation: gugui 1s reverse;
  }

  @keyframes gugui {
    from {
      transform: translateX(-100%);
    }

    to {
      transfrom: translateX(0);
    }
  }
</style>