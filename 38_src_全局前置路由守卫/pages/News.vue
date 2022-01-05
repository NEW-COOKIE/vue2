<template>
  <ul>
    <li :style="{ opacity }">vue</li>
    <li v-for="n in news" :key="n.id">{{ n.title }} <input type="text" /></li>
  </ul>
</template>

<script>
export default {
  name: "News",
  data() {
    return {
      opacity: 0,
      news: [
        { id: "001", title: "new01" },
        { id: "002", title: "new02" },
        { id: "003", title: "new03" },
      ],
    };
  },

  activated() {
    this.timer = setInterval(() => {
      this.opacity -= 0.01;
      if (this.opacity <= 0) this.opacity = 1;
    }, 16);
  },

  deactivated() {
    clearInterval(this.timer);
  },
};
</script>
