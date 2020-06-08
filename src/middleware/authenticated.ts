import { Middleware, Context } from '@nuxt/types'
const isAuthenticated: Middleware = ({ redirect, app: { $accessor } }: Context) => {
  if ($accessor.loggedIn) {
    return redirect('/login')
  }
}
export default isAuthenticated
