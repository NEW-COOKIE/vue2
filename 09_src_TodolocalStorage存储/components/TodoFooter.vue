<template>
  <div id="todo-footer" v-if="allTodo">
    <label>
      <!-- <input type="checkbox" :checked="isAll" @click="changeAllTodo"/> -->
      <input type="checkbox" v-model="isAll" />
    </label>
    <span>已完成{{ doneTodo }} </span>/ {{ allTodo }} 全部
    <button type="button" class="btn btn-danger" @click="clearTodo">删除已完成</button>
  </div>
</template>

<script>
export default {
  name: "TodoFooter",
  props: ["todos", "checkAllTodo", 'clearAllTodo'],
  computed: {
    allTodo() {
      return this.todos.length;
    },

    doneTodo() {
      return this.todos.reduce((pre, current) => {
        return pre + (current.done ? 1 : 0);
      }, 0);
    },

    isAll: {
      get() {
        return this.allTodo === this.doneTodo && this.allTodo > 0;
      },

      set(value) {
        this.checkAllTodo(value);
      }
    },
  },

  methods: {
    // changeAllTodo(event) {
    //   this.checkAllTodo(event.target.checked);
    // },

    clearTodo() {
      this.clearAllTodo();
    }
  },
};
</script>

<style scoped>
#todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}
#todo-footer label {
  display: inline-block;
  margin-right: 5px;
  cursor: pointer;
}

#todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

#todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>