<template>
  <div>
    <h2>求和值为: {{ $store.state.n }}</h2>
    <h2>把值增加十倍: {{ $store.getters.bigSum }}</h2>
    <select v-model.number="num">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button type="button" @click="increment">+</button>
    <button type="button" @click="deincrement">-</button>
    <button type="button" @click="incrementOdd">奇数时再加</button>
    <button type="button" @click="incrementWait">延迟加</button>
  </div>
</template>

<script>

export default {
  name: "Comt",
  data() {
    return {
      num: 1,
    };
  },

  methods: {
    increment() {
      this.$store.commit("JIA", this.num);
    },
    deincrement() {
      this.$store.commit("JIAN", this.num);
    },
    incrementOdd() {
      this.$store.dispatch("jiaOdd", this.num);
    },
    incrementWait() {
      this.$store.dispatch("jiaWait", this.num);
    },
  }
};
</script>

<style>
button {
  margin-left: 5px;
}
</style>