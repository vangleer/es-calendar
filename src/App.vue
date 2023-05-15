<template>
  <div class="es-app">
    <CalendarTemp v-model="date" />
    <!-- <Calendar v-model="date" />
    <Calendar v-model="date" theme="light" color="#f63b09" />
    <Calendar v-model="date" mask-color="red" :mask-size="300" /> -->
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import Calendar from './calendar/src/calendar.vue'
import CalendarTemp from './calendar/src/calendarTemp.vue'

const date = ref(new Date())
</script>

<style lang="scss">
.es-app {
  display: flex;
  flex-wrap: wrap;
  background-color: #f8f8f8;
}
</style>