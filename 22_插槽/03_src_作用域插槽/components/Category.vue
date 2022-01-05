<template>
  <div class="list">
    <h3>{{title}}列表</h3>
    <slot :games='games'></slot>
  </div>
</template>

<script>
export default {
  props: ['title'],
  name: "CateGory",
  data() {
    return {
      games: ["游戏1", "游戏2", "游戏3"],
    };
  },
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