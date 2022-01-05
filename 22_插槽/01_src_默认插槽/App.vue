<template>
  <div class="container">
    <Category :title='美食'>
      <img src="https://picsum.photos/400/300/?image=14" alt="">
    </Category>
    <Category :title='游戏'>
      <ul>
        <li v-for="(g, index) in games" :key="index">{{g}}</li>
      </ul>
    </Category>
    <Category :title='电影'>
      <img src="https://picsum.photos/400/300/?image=17" alt="">
    </Category>
  </div>
</template>

<script>
import Category from "./components/Category.vue";

export default {
  data() {
    return {
      foods: ['烧烤', '啤酒', '咕噜肉', '干炒牛河'],
      games: ['游戏1', '游戏2', '游戏3'],
      films: ['电影1', '电影2', '电影3']
    }
  },
  components: {
    Category,
  },
};
</script>

<style lang="css">
  .container {
    display: flex;
    justify-content: space-around;
  }
  img {
    width: 100%;
  }
</style>