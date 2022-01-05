<template>
<div>
  <Student name='李四' sex='女' :age='19'></Student>
</div>
</template>

<script>
import Student from './components/Student.vue'

export default {
  components: {
    Student
  }
}
</script>
