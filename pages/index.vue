<template>
  <div class="main-page">
    <Main :products = "products"/>
    <!--
    <div
      v-for="product in products"
      :key="product"
      >
        <div>
            <img
            :src="product.imageUrl"
          >
        </div>
        <div>{{product.title}}</div>
    </div>
  -->


    <!--
        <div v-for="(product, index) in products" :key="index">
          <div>{{ product.price }}</div>
          <div>
          <div>
            <img width="300px" height="300px"
            :src="product.imageUrl"
          >
        </div>
          <div @click="open(product._id)">
                        {{ product.title }}
          </div>
          </div>
          <div class="max-width:500px">
            <p>{{ product.description }}
            </p>
            </div>
        </div>
        -->
  </div>
</template>
<script>

import ProductCard from '../components/blocks/ProductCard.vue'

export default {
  components: {
    ProductCard
  },
  data() {
    return {

    }
  },
    async asyncData({store}) {
      const products = await store.dispatch('products/fetch')
      return {products}
    },
      head () {
    return {
      title: 'Products'
    }
  },
    methods: {
    open(id) {
      this.$router.push(`/product-page/${id}`)
    },
  }
}
</script>

<style lang="scss">
  .main-page{
    min-height: 900px;
  }
</style>