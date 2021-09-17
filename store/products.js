const backAPI = 'http://localhost:57878/'

export const state = () => ({
    products: []
  })
  
export const mutations = {
  setProducts(state, products) {
    state.products = products
  },
  addProducts: (state, data) => {
    state.products.push(data);
  },
}
  
export const actions = {

  async fetch({commit}) {
    try {
      return await this.$axios.$get(`${backAPI}backend/products`)
    } catch (e) {
      commit('setError', e, {root: true})
      throw e
    }
  },
    
    /* */ 
    async fetchById({commit}, id) {
      try {
        return await this.$axios.$get(`${backAPI}backend/products/${id}`)
      } catch (e) { 
        commit('setError', e, {root: true})
        throw e
      }
    },

    /* */
    async create({commit}, {title, price, image, description}) {
      try {
        const fd = new FormData()
        fd.append('title', title) 
        fd.append('price', price)
        fd.append('description', description)
        fd.append('image', image)
  
        return await this.$axios.$post(`${backAPI}backend/products/marketer`, fd)
      } catch (e) {
        commit('setError', e, {root: true})
        throw e
      }
    },
    /* */
    async delete({commit}, {id}) {
      try {
        return await this.$axios.$delete()
      } catch (e) {
        commit('Error', e)
        throw e
      }
    },

    async addView({commit}, {views, _id}) {
      try {
        return await this.$axios.$put(`${backAPI}backend/products/add/view/${_id}`, {views})
      } catch (e) {
        commit('setError', e, {root: true})
        throw e
      }
    }
}

export const getters = {
  products: s => s.products
}
