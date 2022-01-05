<template>
  <div class="container">
    <Category :title="美食">
      <img slot="demo1" src="https://picsum.photos/400/300/?image=14" alt="" />
      <a href="http://www.baidu.com/s?wd=美食" slot="demo2">更多美食</a>
    </Category>
    <Category :title="游戏">
      <ul slot="demo1">
        <li v-for="(g, index) in games" :key="index">{{ g }}</li>
      </ul>
      <div class="foad" slot="demo2">
        <a href="javascript:;">游戏1</a>
        <a href="javascript:;">游戏2</a>
      </div>
    </Category>
    <Category :title="电影">
      <img slot="demo1" src="https://picsum.photos/400/300/?image=17" alt="" />
      <template v-slot:demo2>
        <div class="foad">
          <a href="javascript:;">电影1</a>
          <a href="javascript:;">电影2</a>
          <a href="javascript:;">电影3</a>
        </div>
        <h4>更多电影</h4>
      </template>
    </Category>
  </div>
</template>

<script>
import Category from "./components/Category.vue";

export default {
  data() {
    return {
      foods: ["烧烤", "啤酒", "咕噜肉", "干炒牛河"],
      games: ["游戏1", "游戏2", "游戏3"],
      films: ["电影1", "电影2", "电影3"],
    };
  },
  components: {
    Category,
  },
};
</script>

<style lang="css">
.container,
.foad {
  display: flex;
  justify-content: space-around;
}
img {
  width: 100%;
}
h4 {
  text-align: center;
}
</style>