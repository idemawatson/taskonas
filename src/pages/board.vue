<template>
  <v-container>
    <v-card></v-card>
  </v-container>
</template>
<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { Context } from '@nuxt/types'
import authenticated from '@/middleware/authenticated'

@Component({
  middleware: authenticated,
  async asyncData({ app }: Context) {
    try {
      const res = await app.$axios.get('api/getTasks')
      return { tasks: res.data }
    } catch (err) {
      if (err.status > 500) {
        alert('Internal server error')
      } else if (err.status === '401') {
        app.$toast.error('再度ログイン')
      }
    }
  },
})
export default class Board extends Vue {
  tasks: []
}
</script>
