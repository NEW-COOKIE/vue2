<template>
  <ul class="todo-main">
    <TodoItem
      v-for="todo in todos"
      :key="todo._id"
      :todoItem="todo"
      :chenckTodo="chenckTodo"
      :deleteTodo='deleteTodo'
    ></TodoItem>
  </ul>
</template>

<script>
import TodoItem from "./TodoItme";

export default {
  name: "TodoList",
  props: ["todos", "chenckTodo", "deleteTodo"],
  components: {
    TodoItem,
  },
};
</script>

<style scoped>
.todo-main {
  border: 1px solid #ddd;
  border-left: 0px;
  border-radius: 2px;
  padding: 0;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>