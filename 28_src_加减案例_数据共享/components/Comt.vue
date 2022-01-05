<template>
  <div>
    <h2>计算的结果为:{{ num }}</h2>
    <h2>结果十倍:{{ bigNum }}</h2>
    <h2 style="color: red;">comt组件结果:{{persons.length}}</h2>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="incease(n)">+</button>
    <button @click="unincease(n)">-</button>
    <button @click="jiaOdd(n)">和为奇数时才加</button>
    <button @click="jiaWait(n)">延迟加</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  name: "Comt",
  data() {
    return {
      n: 1,
    };
  },
  methods: {
    // incease() {
    //   this.$store.commit("JIA", this.n);
    // },

    ...mapMutations({incease: 'JIA', unincease: 'JIAN'}),

    // unincease() {
    //   this.$store.commit("JIAN", this.n);
    // },

    // inceaseOdd() {
    //   this.$store.dispatch("jiaOdd", this.n);
    // },

    // inceaseWait() {
    //   this.$store.dispatch("jiaWait", this.n);
    // },

    ...mapActions(['jiaOdd', 'jiaWait'])
  },

  computed: {
    ...mapState(["num", 'persons']),
    ...mapGetters(["bigNum"]),
  },
};
</script>

<style>
button {
  margin-left: 5px;
}
</style>