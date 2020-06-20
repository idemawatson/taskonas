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
import { Component, Vue } from 'nuxt-property-decorator'

interface LoginForm {
  name: string
  email: string
  password: string
}
@Component({
  middleware: ({ store, redirect }) => {
    if (store.state.loggedIn) return redirect('/')
  },
})
export default class Login extends Vue {
  form: LoginForm = {
    name: '',
    email: '',
    password: '',
  }
  async login() {
    try {
      let response = await this.$auth.loginWith('local', { data: this.form })
      console.log(response)
    } catch (err) {
      if (err.status > 500) {
        alert('Internal server error')
      } else {
        this.$toast.error('認証に失敗しました。', { duration: 3000, position: 'top-right' })
      }
    }
  }
}
</script>
