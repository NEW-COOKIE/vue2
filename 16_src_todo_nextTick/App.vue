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
import pubsub from 'pubsub-js'; // 引入订阅发布库

import TodoHeader from "./components/TodoHeader.vue";
import TodoList from "./components/TodoList.vue";
import TodoFooter from "./components/TodoFooter.vue";

export default {
  name: "App",
  data() {
    return {
      todos: JSON.parse(localStorage.getItem("todos")) || [], // 获取localStorage数据
    };
  },

  methods: {
    // 添加todo事件
    addTodo(todoObj) {
      this.todos.unshift(todoObj);
    },

    // 勾选 or 取消勾选
    changeTodo(id) {
      this.todos.forEach((todo) => {
        if (todo.id === id) {
          todo.done = !todo.done;
        }
      });
    },

    // 修改
    updateDeit(id, value) {
      this.todos.forEach((todo) => {
        if (todo.id === id) {
          todo.title = value;
        }
      });
    },

    // 删除
    deleteTodo(_, id) {
      this.todos = this.todos.filter((todo) => {
        return todo.id !== id;
      });
    },

    // 勾选所有 or 取消勾选所有
    checkAllTodo(event) {
      this.todos.forEach((todo) => {
        todo.done = event;
      });
    },

    // 删除已完成
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
        localStorage.setItem("todos", JSON.stringify(value)); // 修改localStorage数据
      },
    },
  },

  components: {
    TodoHeader,
    TodoList,
    TodoFooter,
  },

  mounted() {
    this.$bus.$on("changeTodo", this.changeTodo); // 绑定changeTodo事件总线
    this.$bus.$on('updateDeit', this.updateDeit);
    this.pubId = pubsub.subscribe('deleteTodo', this.deleteTodo); // 订阅
  },

  beforeDestroy() {
    this.$bus.$off("changeTodo"); // 解绑changeTodo事件总线
    this.unsubscribe(this.pubId); // 取消订阅
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

.btn-edit {
  color: #fff;
  background: #71c6e0;
  border: 1px solid #509fe0;
  margin-right: 5px;
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