<template>
  <h2>About路由组件</h2>
</template>

<script>
export default {
  name: "About",

  // 通过路由规则 进入该组件时被调用
  beforeRouteEnter(to, from, next) { // 组件路由守卫
    if (to.meta.isAuth) {
      if (localStorage.getItem("school") === "guigu") {
        next();
      } else {
        alert("没有权限");
      }
    } else {
      next();
    }
  },

  // 通过路由规则 离开该组件时被调用
  beforeRouteLeave(to, from, next) { // 组件路由守卫
    next();
  },
};
</script>
