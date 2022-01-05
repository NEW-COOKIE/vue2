<template>
  <div>
    <ul>
      <li v-for="t in titles" :key="t.id">
        <!-- params写法 -->
        <!-- <router-link :to="`/home/message/detailed/:${t.id}/${t.title}`">
        {{ t.title }}
        </router-link>&nbsp;&nbsp; -->

        <!-- 对象写法 -->
        <router-link
          :to="{
            name: 'Detailed',
            query: {
              id: t.id,
              title: t.title,
            },
          }"
        >
          {{ t.title }}
        </router-link>
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
        { id: "001", title: "消息01" },
        { id: "002", title: "消息02" },
        { id: "003", title: "消息03" },
      ],
    };
  },
};
</script>

<style>
</style>