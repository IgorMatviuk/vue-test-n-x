<template>
    <div class="product-gallery">
        <div v-for="(product, index) in products" :key="index">
            <div class="p-card">
                <div class="p-card__header">
                    <div class="p-card__header__price" @click="open(product._id)">
                        <p>{{ product.title }}</p>
                    </div>
                </div>
                <div class="p-card__body">
                    <div class="p-card__body__image">
                        <img
                        :src="product.imageUrl"
                        >
                    </div>
                    <div class="p-card__body__price">
                        <p>{{ product.price }}</p>
                    </div>
                    <div class="p-card__body__button">
                        <div class="based-button-black">
                            <p>Купить</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import ProductCard from './blocks/ProductCard.vue'

export default {
    components: {
        ProductCard
    },
    props: {
        products: {
            type: Object,
            required: true
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
    .product-gallery{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin: 50px 100px 0px 100px;
    }
</style>            