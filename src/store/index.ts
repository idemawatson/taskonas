import { getterTree, getAccessorType, mutationTree } from 'nuxt-typed-vuex'

export const state = () => ({})

export type RootState = ReturnType<typeof state>

export const getters = getterTree(state, {})

export const mutations = mutationTree(state, {})

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
