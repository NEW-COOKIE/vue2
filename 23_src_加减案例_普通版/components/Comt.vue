<template>
  <div>
    <h2>结果为{{ n }}</h2>
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
      n: 0,
      num: 1,
    };
  },

  methods: {
    increment() {
      this.n += this.num;
    },
    deincrement() {
      this.n -= this.num;
    },
    incrementOdd() {
      if (this.n % 2) {
        this.n += this.num;
      }
    },
    incrementWait() {
      setTimeout(() => {
        this.n += this.num;
      }, 500);
    },
  },
};
</script>

<style>
button {
  margin-left: 5px;
}
</style>