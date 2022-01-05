<template>
  <div id="todo-container">
    <div class="todo-wrapper">
      <TodoHeader @addTodo="addTodo"></TodoHeader>
      <TodoList :todos="todos"></TodoList>
      <TodoFooter
        :todos="todos"
        @checkAllTodo="checkAllTodo"
        @clearAllTodo="clearAllTodo"
      ></TodoFooter>
    </div>
  </div>
</template>

<script>
import TodoHeader from "./components/TodoHeader.vue";
import TodoList from "./components/TodoList.vue";
import TodoFooter from "./components/TodoFooter.vue";

export default {
  name: "App",
  data() {
    return {
      todos: JSON.parse(localStorage.getItem("todos")) || [],
    };
  },

  methods: {
    addTodo(todoObj) {
      this.todos.unshift(todoObj);
    },

    changeTodo(id) {
      this.todos.forEach((todo) => {
        if (todo.id === id) {
          todo.done = !todo.done;
        }
      });
    },

    deleteTodo(id) {
      this.todos = this.todos.filter((todo) => {
        return todo.id !== id;
      });
    },

    checkAllTodo(event) {
      this.todos.forEach((todo) => {
        todo.done = event;
      });
    },

    clearAllTodo() {
      this.todos = this.todos.filter((todo) => {
        return !todo.done;
      });
    },
  },

  watch: {
    todos: {
      deep: true,
      handler(value) {
        localStorage.setItem("todos", JSON.stringify(value));
      },
    },
  },

  components: {
    TodoHeader,
    TodoList,
    TodoFooter,
  },

  mounted() {
    this.$bus.$on("changeTodo", this.changeTodo);
    this.$bus.$on("deleteTodo", this.deleteTodo);
  },

  beforeDestroy() {
    this.$bus.$off(["changeTodo", "deleteTodo"]);
  },
};
</script>

<style>
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 3px 12px;
  margin-bottom: 0px;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2) 0 1px 2px
    rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background: #bd362f;
}
.btn:focus {
  outline: none;
}

#todo-container {
  width: 600px;
  margin: 0 auto;
}

#todo-container .todo-wrapper {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
</style>