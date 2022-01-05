<template>
<div class="container">
  <Comt></Comt>
  <hr>
  <Persons></Persons>
</div>
</template>

<script>
import Comt from './components/Comt.vue';
import Persons from './components/Persons.vue';

export default {
  name: 'App',
  components: {
    Comt,
    Persons
  }
}
</script>
