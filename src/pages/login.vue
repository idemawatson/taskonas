<template>
  <v-container>
    <v-card>
      <v-card-text>
        <v-form>
          <v-text-field label="Name" v-model="form.name"></v-text-field>
          <v-text-field label="Email" v-model="form.email"></v-text-field>
          <v-text-field label="Password" type="password" v-model="form.password"></v-text-field>
          <v-btn color="primary" @click="login">LOGIN</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  middleware({ store, redirect }) {
    if (store.state.loggedIn) {
      return redirect('/')
    }
  },
  data: () => ({
    form: {
      name: '',
      email: '',
      password: '',
    },
  }),
  methods: {
    async login() {
      try {
        let response = await this.$auth.loginWith('local', { data: this.form })
        console.log(response)
      } catch (err) {
        console.error(err)
      }
    },
  },
})
</script>
