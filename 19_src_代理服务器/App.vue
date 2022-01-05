<template>
  <div>
    <button type="button" @click="getInOf">点击获取信息</button>
    <h2>{{ content }}</h2>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "App",
  data() {
    return {
      content: "",
    };
  },

  methods: {
    getInOf() {
      axios.get("http://localhost:8080/api/tiangourj").then(
        (response) => {
          console.log("请求成功", response.data);
          this.content = response.data.data.comment;
        },

        (error) => {
          console.log("失败了", error.meassage);
        }
      );
    },
  },
};
</script>
