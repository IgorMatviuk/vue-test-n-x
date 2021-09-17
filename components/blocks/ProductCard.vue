<template>
    <div>
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
export default {
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
    /*
    async nuxtServerInit({store}) {
        const products = await store.dispatch('products/fetch')
        return {products}
    },
  */
}
</script>

<style lang="scss">
    .p-card{
        display: flex;
        flex-direction: column;
        width: 300px;
        height: 420px;
        background-color: #FFFFFF;
        -webkit-box-shadow: 3px 3px 8px 7px rgba(34, 60, 80, 0.21);
        -moz-box-shadow: 3px 3px 8px 7px rgba(34, 60, 80, 0.21);
        box-shadow: 3px 3px 8px 7px rgba(34, 60, 80, 0.21);
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
        margin: 0px 0px 50px 0px;
        &__header{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 100%;
            min-height: 140px;
            /*background: rgb(142,68,173);
            background: linear-gradient(119deg, rgba(142,68,173,1) 18%, rgba(211,84,0,1) 47%, rgba(231,76,60,1) 86%);*/
            background-color: black;
            border-top-left-radius: 20px;
            border-top-right-radius: 20px;
            &__price{
                display: flex;
                justify-content: center;
                align-items: center;
                font-family: 'Roboto', sans-serif;
                letter-spacing: 0.7px;
                font-size: 15px;
                font-weight: 700;
                color: #FFFFFF;
                margin: 0px 50px 0px 50px;
                p{
                    display: flex;
                    text-align: center;
                    width: 100%;
                }
            }
        }
        &__body{
            display: flex;
            justify-content: space-between;
            flex-direction: column;
            height: 100%;
            margin: 0px 0px 0px 0px;
            &__image{
                display: flex;
                justify-content: center;
                margin: 20px 0px 0px 0px;
                img{
                width: 150px;
                max-height: 200px;
                }
            }
            &__price{
                margin: 20px 0px 0px 0px;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 20px;
                font-family: 'Roboto', sans-serif;
                font-size: 700;
            }
            &__button{
                display: flex;
                justify-content: center;
                margin: 0px 0px 20px 0px;
            }
        }
    }
</style>    
