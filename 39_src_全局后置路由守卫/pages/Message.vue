<template>
  <div>
    <ul>
      <li v-for="t in titles" :key="t.id">
        <!-- props 字符串传参 -->
        <!-- <router-link :to="`/home/message/detailed/?id=${t.id}&title=${t.title}`">{{ t.title }}</router-link> -->

        <router-link
          :to="{
            name: 'Detailed',
            query: {
              id: t.id,
              title: t.title,
            },
          }"
          >{{ t.title }}</router-link
        >
        <button @click="pushShow(t)">push导航</button>
        <button @click="replaceShow(t)">replace导航</button>
      </li>
    </ul>
    <hr />
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Message",
  data() {
    return {
      titles: [
        { id: "001", title: "message01" },
        { id: "002", title: "message02" },
        { id: "003", title: "message03" },
      ],
    };
  },

  methods: {
    pushShow(t) {
      this.$router.push({
        name: "Detailed",
        query: {
          id: t.id,
          title: t.title,
        },
      });
    },

    replaceShow(t) {
      this.$router.replace({
        name: 'Detailed',
        query: {
          id: t.id,
          title: t.title
        }
      })
    },
  },
};
</script>

<style>
</style>