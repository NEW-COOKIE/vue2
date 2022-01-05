<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-offset-2 col-xs-8">
        <div class="page-header">
          <Bannter></Bannter>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-xs-offset-2 col-xs-2">
        <div class="list-group">
         <!--  <a href="#" class="list-group-item active">About</a>
          <a href="#" class="list-group-item">Home</a> -->
          
          <router-link active-class="active" class="list-group-item" to="/about">About</router-link>
          <router-link active-class="active" class="list-group-item" to="/home">HOme</router-link>
        </div>
      </div>
      <div class="col-xs-6">
        <div class="page-header">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bannter from "./components/Bannter.vue";

export default {
  name: "App",
  components: {
    Bannter,
  },
};
</script>
