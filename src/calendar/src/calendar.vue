<template>
  <div :class="n()" :style="calendarStyle">
    <div :class="n('header')">
      <div :class="[n('header-title')]">
        {{ title }}
      </div>
      <div :class="n('prev-btn')" @click="change('month', -1)"></div>
      <div :class="n('next-btn')" @click="change('month', 1)"></div>
    </div>
    
    <div
      :class="n('body')"
      ref="wrapRef"
      @mousemove="onMousemove"
      @mouseenter="showMask = true"
      @mouseleave="showMask = false"
    >
      <table
        :class="n('table')"
        cellpadding="0"
        cellspacing="0"
      >
        <tbody>
          <tr>
            <th v-for="item in WEEKS" :aria-label="item + ''" scope="col">
              <div :class="n('col-title')">{{ item }}</div>
            </th>
          </tr>
          <tr v-for="row, rowKey in rows" :key="rowKey">
            <td
              v-for="col, colKey in row"
              :key="`${rowKey + colKey}`"
              :class="[n('col'), col.type, { selected: col.isSelected }]"
              @click="handleCellClick(col)"
            >
              <div :class="n('col-wrap')">
                <div :class="n('col-wrap-box')">
                  <div :class="n('col-inner')">
                    {{ col.text }}
                  </div>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      <div
        v-show="showMask"
        ref="maskRef"
        :class="n('circle')"
        :style="maskPosition"
      >
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { DateCellType, DateCell, createNamespace } from './calendar'
import { computed, PropType, ref } from 'vue'
import dayjs, { Dayjs, ManipulateType } from 'dayjs'
import localeData from 'dayjs/plugin/localeData.js'
dayjs.extend(localeData)

type ThemeType = 'black' | 'light'
const props = defineProps({
  modelValue: [String, Number, Date],
  theme: {
    type: String as PropType<ThemeType>,
    default: 'black'
  },
  color: {
    type: String,
    default: '#0078d7'
  },
  maskColor: {
    type: String,
    default: '#818383'
  },
  maskSize: {
    type: Number,
    default: 150
  }
})
const emit = defineEmits(['update:modelValue'])
const { n } = createNamespace('calendar')

const wrapRef = ref<HTMLElement>()
const maskRef = ref<HTMLElement>()
const showMask = ref(false)
const maskPosition = ref({
  left: '0px',
  top: '0px'
})

const wrapRect = computed(() => wrapRef.value!.getBoundingClientRect())
const maskRect = computed(() => maskRef.value!.getBoundingClientRect())
const calendarStyle = computed(() => ({
  '--es-calendar-color-bg': `var(--es-calendar-${props.theme}-bg)`,
  '--es-color-primary': props.color,
  '--es-text-color': `var(--es-calendar-${props.theme}-color)`,
  '--es-calendar-mask-color': props.maskColor,
  '--es-calendar-mask-size': props.maskSize + 'px',
}))

// 鼠标移动计算mask的位置
const onMousemove = (e: MouseEvent) => {
  const x = e.clientX - wrapRect.value.left - maskRect.value.width / 2
  const y = e.clientY - wrapRect.value.top - maskRect.value.height / 2
  maskPosition.value = { left: x + 'px', top: y + 'px' }
}

const title = computed(() => date.value.get('year') + ' ' + date.value.format('MMMM'))

const selectedDay = ref<Dayjs>()
const date = computed<Dayjs>({
  get: () => {
    return props.modelValue ? dayjs(props.modelValue) : dayjs(selectedDay.value)
  },
  set: (val) => {
    selectedDay.value = val
    emit('update:modelValue', val.toDate())
  }
})
const tableRows = ref<DateCell[][]>([[], [], [], [], [], []])

// 使用dayjs获取weekdays
const WEEKS_CONSTANT = computed(() => date.value
  .locale('en')
  .localeData()
  .weekdaysShort()
  .map((_) => _.toLowerCase())
)

// 表头数据
const WEEKS = computed(() => WEEKS_CONSTANT.value.map(w => w[0].toUpperCase() + w.substring(1)))

// 表格开始日期
const startDate = computed(() => {
  const startDayOfMonth = date.value.startOf('month')
  return startDayOfMonth.subtract(startDayOfMonth.day() || 7, 'day')
})

// 表格数据
const rows = computed(() => {
  const rows_ = tableRows.value
  const cols = WEEKS.value.length

  // 当前选中的日期
  const cur = date.value
  // 当月第一天
  const monthstartDay = cur.startOf('month').day()
  // 当月最后一天
  const lastDate = cur.endOf('month').date()

  let count = 1
  // 循环填充表格，6行7列
  for (let row = 0; row < tableRows.value.length; row++) {
    for (let col = 0; col < cols; col++) {
      const cellDate = startDate.value.add(count, 'day')
      const text = cellDate.date()
      // 是否选中
      const isSelected = cellDate.format('YYYY-MM-DD') === date.value.format('YYYY-MM-DD')
      // 默认当月日期
      let type: DateCellType = 'normal'
      if (count < monthstartDay) { // 上个月日期
        type = 'prev-month'
      } else if (count - monthstartDay >= lastDate) { // 下个月日期
        type = 'next-month'
      }

      rows_[row][col] = {
        type,
        date: cellDate,
        text,
        isSelected
      }
      count++
    }
  }

  return rows_
})

// 点击日期
function handleCellClick(cell: DateCell) {
  date.value = cell.date
}

// 改变日期
function change(type: ManipulateType, num: number) {
  date.value = dayjs(date.value.toDate()).add(num, type)
}

</script>

<style lang='scss' scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.es-calendar {
  --es-calendar-light-bg: #fff;
  --es-calendar-black-bg: #242729;
  --es-calendar-light-color: #242729;
  --es-calendar-black-color: #fff;

  --es-color-primary: #0078d7;
  --es-text-color: var(--es-calendar-black-color);
  --es-calendar-mask-color: #818383;
  --es-calendar-mask-size: 150px;
  --es-calendar-color-bg: var(--es-calendar-black-bg);

  width: 300px;
  background-color: var(--es-calendar-color-bg);
  color: var(--es-text-color);
  padding: 10px;
  font-size: 14px;

  &__header {
    display: flex;
    align-items: center;
    padding: 12px 0;

    &-title {
      flex: 1;
    }
  }

  &__prev-btn,
  &__next-btn {
    width: 10px;
    height: 10px;
    border-top: 1px solid var(--es-text-color);
    border-right: 1px solid var(--es-text-color);
    margin-left: 40px;
  }

  &__prev-btn {
    transform: rotate(-45deg) translateY(50%);
  }

  &__next-btn {
    transform: rotate(135deg) translateY(50%);
  }

  &__body {
    position: relative;
    overflow: hidden;
  }
  
  &__table {
    position: relative;
    width: 100%;
    background-color: var(--es-calendar-color-bg);
  }
  th {
    position: relative;
    width: 42px;
    height: 42px;
  }
  &__col-title {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
    width: 100%;
    height: 100%;
    background-color: var(--es-calendar-color-bg);
  }
  &__col {
    position: relative;
    width: 42px;
    height: 42px;
    font-size: 14px;
    &.selected {
      .es-calendar__col-wrap {
        border: 2px solid var(--es-color-primary);
        .es-calendar__col-wrap-box {
          border-color: var(--es-calendar-color-bg);
        }
        .es-calendar__col-inner {
          background-color: var(--es-color-primary);
        }
      }
    }

    &.next-month, &.prev-month {
      color: #5b5b5b;
    }
  }
  &__col-wrap {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    border: 1px solid var(--es-calendar-color-bg);
    cursor: pointer;
    &:hover {
      .es-calendar__col-wrap-box {
        border-color: var(--es-calendar-mask-color);
      }
    }
    &-box {
      width: 100%;
      height: 100%;
      border: 2px solid transparent;
    }

    .es-calendar__col-inner {
      width: 100%;
      height: 100%;
      background-color: var(--es-calendar-color-bg);
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  &__circle {
    position: absolute;
    width: var(--es-calendar-mask-size);
    height: var(--es-calendar-mask-size);
    background: radial-gradient(var(--es-calendar-mask-color) 0px, transparent calc(var(--es-calendar-mask-size) / 2.5));
  }
}

</style>