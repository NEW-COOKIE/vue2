<template>
  <div>
    <h2>人员列表</h2>
    <h2 style="color: red">comt组件结果:{{ params }}</h2>
    <h2>第一个人员姓名:{{ firestPerson }}</h2>
    <input type="text" v-model="name" @keyup.enter="add" />
    <button type="button" @click="addWang">添加老王</button>
    <button type="button" @click="addAjxx">发送ajax</button>
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
      return this.$store.state.personsAbout.persons;
    },

    params() {
      return this.$store.state.countAbout.num;
    },

    firestPerson() {
      return this.$store.getters["personsAbout/firestName"];
    },
  },

  methods: {
    add() {
      if (!this.name.trim()) return alert("不能为空");
      const persons = { id: nanoid(), name: this.name };
      this.$store.commit("personsAbout/ADDPERSON", persons);
      this.name = "";
    },

    addWang() {
      if (!this.name.trim()) return alert("不能为空");
      const pObj = {id: nanoid(), name: this.name};
      this.$store.dispatch('personsAbout/addWang', pObj);
      this.name = '';
    },

    addAjxx() {
      this.$store.dispatch('personsAbout/addAjxx');
    }
  },
};
</script>