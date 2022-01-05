<template>
  <li>
    <label>
      <input type="checkbox" :checked='todo.done' @change="handerTodo(todo.id)"/>
      <span>{{todo.title}}</span>
    </label>
    <button type="button" class="btn btn-danger" @click="deleteItem(todo.id)">删除</button>
  </li>
</template>

<script scoped>
export default {
  name: "TodoItem",
  props: ['todo', 'changeTodo', 'deleteTodo'],
  methods: {
    handerTodo(id) {
      this.changeTodo(id);
    },

    deleteItem(id) {
      this.deleteTodo(id);
    }
  }
};
</script>

<style scoped>
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label,
li input {
  vertical-align: middle;
  margin-left: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

li:hover {
  background: #ccc;
  display: block;
}

li:hover button {
  display: block;
}
</style>