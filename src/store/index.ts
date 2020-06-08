import { getterTree, getAccessorType, mutationTree } from 'nuxt-typed-vuex'

export const state = () => ({
  loggedIn: false as boolean,
})

export type RootState = ReturnType<typeof state>

export const getters = getterTree(state, {
  loggedIn: state => state.loggedIn,
})

export const mutations = mutationTree(state, {
  setLoggedIn(state): void {
    state.loggedIn = true
  },
})

export const actions = {
  //
}

export const accessorType = getAccessorType({
  state,
  getters,
  mutations,
  actions,
  modules: {},
})
