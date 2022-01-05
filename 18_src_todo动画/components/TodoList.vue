<template>
  <ul class="todo-main">
    <transition-group name="todo" appear>
      <todoItem v-for="todo in todos" :key="todo.id" :todo="todo"></todoItem>
    </transition-group>
  </ul>
</template>

<script>
import todoItem from "./TodoItem.vue";

export default {
  name: "TodoList",
  props: ["todos"],
  components: { todoItem },
};
</script>

<style scoped>
.todo-main {
  border: 1px solid #ccc;
  border-right: 2px;
  padding: 0;
}

.todo-enter-active {
  animation: guigu 0.5s linear;
}

.todo-leave-active {
  animation: guigu 0.5s linear reverse;
}

@keyframes guigu {
  from {
    transform: translateX(100%)
  }
  to {
    transform: translateX(0);
  }
}
</style>