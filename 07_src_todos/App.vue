<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <TodoHeader :addTodo="addTodo"></TodoHeader>
      <TodoList
        :todos="todos"
        :chenckTodo="chenckTodo"
        :deleteTodo="deleteTodo"
      ></TodoList>
      <TodoFooter :todos="todos" :checkAllTodo="checkAllTodo" :createDoneTodo='createDoneTodo'></TodoFooter>
    </div>
  </div>
</template>

<script>
import TodoHeader from "./components/TodoHeader";
import TodoList from "./components/TodoList";
import TodoFooter from "./components/TodoFooter";

export default {
  data() {
    return {
      todos: JSON.parse(localStorage.getItem('todos'))
    }
  },
  methods: {
    // 添加一个todo
    addTodo(todoObj) {
      this.todos.unshift(todoObj);
    },

    // 勾选or取消勾选一个组件
    chenckTodo(id) {
      this.todos.forEach((todo) => {
        if (todo._id === id) {
          todo.done = !todo.done;
        }
      });
    },

    // 删除item
    deleteTodo(id) {
      this.todos = this.todos.filter((todo) => {
        return todo._id !== id;
      });
    },

    // 勾选or取消构想所有
    checkAllTodo(event) {
      this.todos.forEach((todo) => {
        todo.done = event;
      });
    },

    //清楚已完成任务
    createDoneTodo() {
      this.todos = this.todos.filter((todo) => {
        return !todo.done;
      });
    },
  },

  watch: {
    todos: {
      deep: true,
      handler(value) {
        localStorage.getItem('todos', JSON.stringify(value));
      }
    }
  },

  components: {
    TodoHeader,
    TodoList,
    TodoFooter,
  },
};
</script>

<style>
/* base */
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

.todo-container {
  width: 600px;
  margin: 0 auto;
}

.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
