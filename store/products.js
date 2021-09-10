const backAPI = 'http://localhost:54049/'

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


    /* */
    async fetch({commit}) {
      try {
        const products = await this.$axios.$get(`${backAPI}backend/products`)
        commit('setProducts', products)
      } catch (e) {
        commit('Error', e)
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
}

export const getters = {
  products: s => s.products
}
