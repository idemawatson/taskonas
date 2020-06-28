import { NuxtAxiosInstance } from '@nuxtjs/axios'
import { Context } from '@nuxt/types'
export default ({ store, $axios, $auth }: Context): void => {
  $axios.onRequest(config => {
    config.headers.common['Authorization'] = `${store.$auth.getToken('local')}`
    config.headers.common['Accept'] = 'application/json'
  })

  $axios.onResponseError(error => {
    const code = error.response?.status
    if ([401, 403].includes(code)) {
      store.$auth.reset()
    }
    return Promise.reject(error)
  })

  axios = $axios
}
export let axios: NuxtAxiosInstance
