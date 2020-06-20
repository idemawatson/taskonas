import { accessorType } from '~/store'
import { Auth } from '@nuxtjs/auth'
import {} from '@nuxtjs/toast'

declare module 'vue/types/vue' {
  interface Vue {
    $accessor: typeof accessorType
    $auth: Auth
  }
}

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $accessor: typeof accessorType
  }
}
