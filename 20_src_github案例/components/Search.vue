<template>
  <div class="jumbotron">
    <h3 class="jumbotron-heading">Search Github User</h3>
    <div>
      <input
        type="text"
        placeholder="enter the name you search"
        v-model="keyWord"
      />&nbsp;
      <button type="button" @click="search">Search</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Search",
  data() {
    return {
      keyWord: "",
    };
  },

  methods: {
    search() {
       if (!this.keyWord.trim()) return alert('不能为空');
      this.$bus.$emit("getUsers", {
        isFirest: false,
        isLoadLong: true,
        error: "",
        users: [],
      });
      axios.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
        (response) => {
          console.log("请求成功");
          this.$bus.$emit("getUsers", {isLoadLong: false, error: '', users: response.data.items});
        },
        (error) => {
          console.log("请求失败");
          this.$bus.$emit("getUsers", {isLoadLong: false, error: error.message, users: []});
        }
      );
    },
  },
};
</script>
