<template>
  <ul class="todo-main">
    <todoItem v-for="todo in todos" :key="todo.id" :todo='todo' :changeTodo='changeTodo' :deleteTodo='deleteTodo'></todoItem>
  </ul>
</template>

<script>
import todoItem from "./TodoItem.vue";

export default {
  name: "TodoList",
  props: ['todos', 'changeTodo', 'deleteTodo'],
  components: { todoItem },
};
</script>

<style scoped>
.todo-main {
  border: 1px solid #ccc;
  border-left: 0;
  border-right: 2px;
  padding: 0;
}
</style>