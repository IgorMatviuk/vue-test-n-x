<template>
  <div class="main-page">
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
    <ProductCard
      v-for="product in products"
      :key="product._id"
      :product="product"
    />
        <div v-for="(product, index) in products" :key="index">
          <div>{{ product.price }}</div>
          <div>
          <div>
            <img width="300px" height="300px"
            :src="product.imageUrl"
          >
        </div>
          <nuxt-link :to="`/product-page/${id}`">
              {{ product.title }}
            </nuxt-link>
          </div>
          <div class="max-width:500px">
            <p>{{ product.description }}
            </p>
            </div>
        </div>
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
    async asyncData({ $axios }) {
      const products = await $axios.$get('http://localhost:54049/backend/products')
      return { products }
    },
      head () {
    return {
      title: 'Products'
    }
  },
}
</script>

<style lang="scss">
  .main-page{
    min-height: 900px;
  }
</style>