import GET_SVRS from '@/graphql/query/getSvrs.gql'
import GET_SVR_BY_ID from '@/graphql/query/getSvrById.gql'
import GET_PROGRAM_BY_ID from '@/graphql/query/getProgramById.gql'
import CREATE_SUBSCRIBER from '@/graphql/mutation/createSubscriber.gql'

const endpoint = '/graphql'

export const state = () => ({
  showFilter: false,
  isDesktop: false,
  isMobile: false,
  mask: {
    phone: '+7 (###) ###-##-##',
  },
  blogs: [
    {
      image: 'test-image-v1',
      name: 'Как выбрать детский лагерь 1',
      text: '1 простых шага до выбора лагеря',
    },
    {
      image: 'test-image-v2',
      name: 'Как выбрать детский лагерь 2',
      text: '2 простых шага до выбора лагеря',
    },
    {
      image: 'test-image-v3',
      name: 'Как выбрать детский лагерь 3',
      text: '3 простых шага до выбора лагеря',
    },
  ],
  menu: [
    { name: 'Главная', path: '/' },
    { name: 'Каталог', path: '/catalog' },
    { name: 'Блог', path: '/blog' },
    { name: 'О нас', path: '/about' },
    { name: 'Соглашения', path: '/agreements' },
    { name: 'Контакты', path: '/card' },
  ],
  program: {},
})

export const getters = {}

export const mutations = {
  changeVisibleFilter(state, payload) {
    state.showFilter = payload
  },
  updateWidth(state, payload) {
    if (payload >= 1170) {
      state.isDesktop = true
      state.isMobile = false
    } else {
      state.isMobile = true
      state.isDesktop = false
    }
  },
  setProgram(state, payload) {
    state.program = payload
  },
}

export const actions = {
  async get_svrs() {
    let result = []
    try {
      const body = {
        query: GET_SVRS,
        variables: {},
      }
      const res = await this.$axios.post(endpoint, body)
      const { svrs } = res.data.data
      result = svrs.filter((obj) => obj.published)
    } catch (err) {}
    return result
  },

  async get_svr_by_id(_ctx, id) {
    let result = {}
    try {
      const body = {
        query: GET_SVR_BY_ID,
        variables: { id },
      }
      const res = await this.$axios.post(endpoint, body)
      result = res.data.data.svrs_by_id
    } catch (err) {}
    return result
  },

  async get_program_by_id({ commit }, id) {
    let result = {}
    try {
      const body = {
        query: GET_PROGRAM_BY_ID,
        variables: { id },
      }
      const res = await this.$axios.post(endpoint, body)
      result = res.data.data.programs_by_id
    } catch (err) {}
    commit('setProgram', result)
  },

  async createSubscriber(_ctx, { firstName, lastName, email, phone }) {
    try {
      const body = {
        query: CREATE_SUBSCRIBER,
        variables: {
          firstName,
          lastName,
          email,
          phone,
        },
      }
      await this.$axios.post(endpoint, body)
    } catch (err) {}
  },

  async getCoords(_ctx, address) {
    const key = 'a15fb839-cec6-45d7-b22f-e243bbf38c2b'
    const path = 'https://geocode-maps.yandex.ru/1.x/'
    let res, pos, coords

    try {
      const uri = `${path}?geocode=${address}&apikey=${key}&format=json`
      const encoded = encodeURI(uri)
      res = await this.$axios.get(decodeURI(encoded))
      pos =
        res.data.response.GeoObjectCollection.featureMember[0].GeoObject.Point
          .pos
      const arr = pos.split(' ')
      coords = [+arr[1], +arr[0]]
    } catch (err) {
      res = {}
      /* eslint-disable */
      coords = [54.82896654088406, 39.831893822753904]
    }

    return coords
  },
}
