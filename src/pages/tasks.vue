<template>
  <v-container>
    <v-card v-for="task in tasks" :key="task.index"></v-card>
  </v-container>
</template>
<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { Context } from '@nuxt/types'
@Component({
  async asyncData({ app }): Promise<void> {
    const tasks = await app.$axios.post('/getTasks', { id: app.store.$auth.user.id })
  },
})
export default class Login extends Vue {
  tasks: []
}
</script>
