<template>
  <ul>
    <li>消息编号: {{id}}</li>
    <li>消息编号: {{title}}</li>
  </ul>
</template>

<script>
export default {
  props: ['id', 'title'],
  name: 'Detailed',
  // computed: {
  //   id() {
  //     return this.$route.query.id;
  //   },

  //   title() {
  //     return this.$route.query.title;
  //   }
  // }
}
</script>
