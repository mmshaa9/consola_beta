import dayjs, { locale } from 'dayjs'
import 'dayjs/locale/ru'

locale('ru')

export const clearPhone = (phone) => phone.replace(/[ ()-]/gi, '')

export const datePeriod = (date) => dayjs(date).format('DD MMMM')
export const dateConvert = (date) => dayjs(date).format('DD MMMM YYYY')

export const countDays = (start, finish) => {
  const date = dayjs(finish)
  return date.diff(start, 'day')
}

export const prepareCost = (cost) => cost.toLocaleString('ru')
