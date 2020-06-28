<template>
  <div class="text-center">
    <v-bottom-sheet v-model="sheet" persistent>
      <template v-slot:activator="{ on, attrs }">
        <v-btn absolute dark fab bottom right color="primary" v-on="on" v-bind="attrs">
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </template>
      <v-sheet class="text-center" height="auto">
        <v-card>
          <v-card-text>
            <v-card-title>タスク追加</v-card-title>
            <v-form>
              <v-row align="center" justify="center">
                <v-col cols="10">
                  <v-text-field label="タイトル(必須)" v-model="form.title" clearable></v-text-field>
                </v-col>
                <v-col cols="10" class="pt-0">
                  <v-text-field v-model="form.deadline" label="期限" @click="showDatePicker = true" clearable></v-text-field>
                </v-col>
              </v-row>
              <v-expand-transition>
                <div v-show="showDatePicker" class="pb-4">
                  <v-date-picker v-model="form.deadline" @change="showDatePicker = false" color="primary" flat no-title></v-date-picker>
                </div>
              </v-expand-transition>
              <v-fade-transition>
                <v-btn color="primary" v-show="form.title" @click="onSubmit">追加</v-btn>
              </v-fade-transition>
              <v-btn text color="error" light @click="sheet = !sheet">閉じる</v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-sheet>
    </v-bottom-sheet>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
export interface TaskForm {
  title: string
  deadline: string
}
@Component
export default class addTaskModal extends Vue {
  sheet: boolean = false
  form: TaskForm = {
    title: '',
    deadline: '',
  }
  showDatePicker: boolean = false
  onSubmit() {
    this.$emit('submit', this.form)
    this.sheet = false
  }
}
</script>
<style scoped>
.v-picker {
  box-shadow: initial;
}
</style>
