<template>
  <v-container>
    <v-card>
      <v-card-text>
        <v-form>
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
  email: string
  password: string
}
@Component({
  middleware: ({ store, redirect }) => {
    if (store.$auth.loggedIn) return redirect('/')
  },
})
export default class Login extends Vue {
  form: LoginForm = {
    email: '',
    password: '',
  }
  async login() {
    try {
      let response = await this.$auth.loginWith('local', { data: this.form })
      console.log(this.$store.$auth.loggedIn)
      console.log(response)
    } catch (err) {
      if (err.status > 500) {
        alert('Internal server error')
      } else {
        this.$toast.error('ログインできません。パスワードとメールアドレスを確認してください。', { duration: 3000, position: 'top-right' })
      }
    }
  }
}
</script>
