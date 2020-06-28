<template>
  <div>
    <v-container>
      <v-card v-for="task in tasks" :key="task.index">{{ task }}</v-card>
      <v-card v-if="tasks.length === 0">タスクがありません。</v-card>
    </v-container>
    <addTaskModal @submit="addTask"></addTaskModal>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { Context } from '@nuxt/types'
import authenticated from '@/middleware/authenticated'
import addTaskModal, { TaskForm } from '../components/modal/addTask.vue'

@Component({
  components: {
    addTaskModal,
  },
  middleware: authenticated,
  async asyncData({ app, redirect }: Context) {
    try {
      const res = await app.$axios.get('api/getTasks')
      return { tasks: res.data }
    } catch (err) {
      if (err.response.status === 401) redirect('/login')
    }
  },
})
export default class Board extends Vue {
  tasks: Array<Object> = []
  async addTask(form: TaskForm) {
    try {
      await this.$axios.post('/api/addTask', form)
      const res = await this.$axios.get('api/getTasks')
      this.tasks = res.data
    } catch (err) {
      this.$toast.error(err.response.message)
    }
  }
}
</script>
