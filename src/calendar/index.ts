
import { App } from 'vue'
export * from './src/calendar'
import Calendar from './src/calendar.vue'

export const install = (app: App) => {
  app.component('es-calendar', Calendar)
}

export default Calendar