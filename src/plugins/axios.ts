import { NuxtAxiosInstance } from '@nuxtjs/axios'
import { Context } from '@nuxt/types'
export default ({ store, $axios }: Context): void => {
  $axios.onRequest(config => {
    config.headers.common['Authorization'] = `Bearer ${store.state.token}`
    config.headers.common['Accept'] = 'application/json'
  })

  axios = $axios
}
export let axios: NuxtAxiosInstance
