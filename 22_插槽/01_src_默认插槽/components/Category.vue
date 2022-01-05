<template>
  <div class="list">
    <h3>{{title}}列表</h3>
    <slot></slot> <!-- 默认插槽 -->
  </div>
</template>

<script>
export default {
  props: ["list", 'title'],
  name: "CateGory",
};
</script>

<style>
.list {
  width: 200px;
  height: 300px;
  background: skyblue;
}

h3 {
  background: orange;
  text-align: center;
}
</style>