<template>
  <div>
    <div>{{ product.title }}</div>
    <div>{{ product.price }}</div>
          <div>
            <img width="300px" height="300px"
            :src="product.imageUrl"
          >
        </div>
    <div>{{ product.description }}</div>
  </div>
</template>

<script>
export default {
  async asyncData({store, params}) {
    const product = await store.dispatch('products/fetchById', params.id)
    return {product}
  },
}
</script>

<style>

</style>