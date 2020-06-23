import { accessorType } from '~/store'
import { Auth } from '@nuxtjs/auth'
import { NuxtAxiosInstance } from '@nuxtjs/axios'
import {} from '@nuxtjs/toast'

declare module 'vue/types/vue' {
  interface Vue {
    $accessor: typeof accessorType
    $auth: Auth
    $axios: NuxtAxiosInstance
  }
}

declare module 'vuex/types/index' {
  interface Store<S> {
    $auth: Auth
  }
}

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $accessor: typeof accessorType
  }
}
