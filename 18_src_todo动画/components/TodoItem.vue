<template>
  <li>
    <label>
      <input
        type="checkbox"
        :checked="todo.done"
        @change="handerTodo(todo.id)"
      />
      <span v-show="!todo.isDeit">{{ todo.title }}</span>
      <input type="text" :value="todo.title" v-show="todo.isDeit" @blur="deitBlur($event, todo)" ref="inputTitel">
    </label>
    <button type="button" class="btn btn-danger" @click="deleteItem(todo.id)">
      删除
    </button>
    <button type="button" class="btn btn-edit" v-show="!todo.isDeit" @click="handleDeit(todo)">编辑</button>
  </li>
</template>

<script scoped>
import pubsub from "pubsub-js"; // 引入订阅发布库

export default {
  name: "TodoItem",
  props: ["todo"],
  methods: {
    handerTodo(id) {
      this.$bus.$emit("changeTodo", id); // 获取事件总线
    },

    deleteItem(id) {
      if (confirm("是否删除?")) {
        pubsub.publish("deleteTodo", id); // 发布
      }
    },

    handleDeit(todo) {
      if (Object.prototype.hasOwnProperty.call(todo, 'isDeit')) {
        todo.isDeit = true;
      }else {
        this.$set(todo, 'isDeit', true);
      }

      this.$nextTick(function() {
        this.$refs.inputTitel.focus();
      })
    },

    deitBlur(event, todo) {
      todo.isDeit = false;
      if (!event.target.value.trim()) return alert('修改内容不能为空');
      this.$bus.$emit('updateDeit', todo.id, event.target.value);
    }
  },
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