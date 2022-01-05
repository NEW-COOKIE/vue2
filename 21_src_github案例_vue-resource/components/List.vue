<template>
  <div class="row">
    <div class="card" v-for="user in info.users" :key="user.login">
      <a :href="user.html_url">
        <img :src="user.avatar_url" style="width: 100px" />
      </a>
      <p class="card-text">{{ user.login }}</p>
    </div>

    <h1 v-show="info.isFirest">欢迎使用</h1>
    <h1 v-show="info.isLoadLong">正在加载</h1>
    <h1 v-show="info.error">{{ info.error }}</h1>
  </div>
</template>

<script>
export default {
  name: "List",
  data() {
    return {
      info: {
        isFirest: true,
        isLoadlong: false,
        error: '',
        users: [],
      },
    };
  },
  mounted() {
    this.$bus.$on("getUsers", (dataObj) => {
      this.info = {...this.info, ...dataObj};
    });
  },
};
</script>

<style scoped>
.album {
  min-height: 50rem;
  padding-top: 3rem;
  padding-bottom: 3rem;
  background: #f7f7f7;
}

.card {
  float: left;
  width: 25%;
  padding: 0.75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: 0.75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}
</style>