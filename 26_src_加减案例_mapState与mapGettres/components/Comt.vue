<template>
  <div>
    <h2>求和结果为:{{ sum }}</h2>
    <h2>求和结果10倍:{{ bigSum }}</h2>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button type="button" @click="increase">+</button>
    <button type="button" @click="unincrease">-</button>
    <button type="button" @click="increaseOdd">奇数在加</button>
    <button type="button" @click="increaseWait">延迟加</button>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  name: "Comt",
  data() {
    return {
      n: 1,
    };
  },
  methods: {
    increase() {
      this.$store.commit("JIA", this.n);
    },
    unincrease() {
      this.$store.commit("JIAN", this.n);
    },
    increaseOdd() {
      this.$store.dispatch("jiaOdd", this.n);
    },
    increaseWait() {
      this.$store.dispatch("jiaWait", this.n);
    },
  },

  computed: {
    // 使用mapSate方法 生成计算属性(对象方法)
    // ...mapState({ sum: "sum" }),
    // 使用mapSate方法 生成计算属性(数组方法)
    ...mapState(['sum']),

    // 使用mapGettres方法 生成计算属性(对象方法)
    // ...mapGetters({ bigSum: "bigSum" }),
    // 使用mapGettres方法 生成计算属性(数组方法)
    ...mapGetters(['bigSum']),
  },
};
</script>

<style>
button {
  margin-right: 5px;
}
</style>