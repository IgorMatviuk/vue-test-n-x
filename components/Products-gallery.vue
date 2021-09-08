<template>
    <div class="product-gallery">
        <ProductCard
            v-for="product in 5"
            :key="product"
        />
    </div>
</template>

<script>

import ProductCard from './blocks/ProductCard.vue'

export default {
    components: {
        ProductCard
    }
}
</script>

<style lang="scss">
    .product-gallery{
        display: flex;
        justify-content: space-between;
        margin: 50px 100px 0px 100px;
    }
</style>