import { Middleware, Context } from '@nuxt/types'
const isAuthenticated: Middleware = ({ redirect, app: { store } }: Context) => {
  if (!store.$auth.loggedIn) {
    return redirect('/login')
  }
}
export default isAuthenticated
