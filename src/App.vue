<template>
  <div class="es-app">
    <Calendar v-model="date" />
    <Calendar v-model="date" theme="light" color="#f63b09" />
    <Calendar v-model="date" color="#f63b09" mask-color="#f63b09" :mask-size="200" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import 'es-calendar/lib/style.css'
import Calendar from 'es-calendar'

const date = ref(new Date())
</script>

<style lang="scss">
.es-app {
  display: flex;
  flex-wrap: wrap;
  background-color: #f8f8f8;
  > div {
    margin: 20px;
  }
}
</style>