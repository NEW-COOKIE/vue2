<template>
  <div>
    <h2>人员列表</h2>
    <h2 style="color: red">comt组件结果:{{ params }}</h2>
    <input type="text" v-model="name" @keyup.enter="add" />
    <ul>
      <li v-for="person in persons" :key="person.id">{{ person.name }}</li>
    </ul>
  </div>
</template>

<script>
import { nanoid } from "nanoid";
export default {
  name: "Person",
  data() {
    return {
      name: "",
    };
  },
  computed: {
    persons() {
      return this.$store.state.persons;
    },

    params() {
      return this.$store.state.num;
    },
  },

  methods: {
    add() {
      if (!this.name.trim()) return alert("不能为空");
      const persons = { id: nanoid(), name: this.name };
      this.$store.commit("ADDPERSON", persons);
      this.name = "";
    },
  },
};
</script>