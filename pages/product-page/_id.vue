<template>
<!--
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
-->
                <!--
                <img width="300px" height="300px"
                  :src="product.imageUrl"
                >
              -->

              <!-- 
            <carousel
              :perPage="1"
              :autoplay="false"
            >
              <slide v-for="(item, index) in productsFake"
                :key="index"
              >
              {{item.number}}
              </slide>
            </carousel>
              -->

  
  <div class="global-container">
    <div class="product-page">
      <div class="product-page__main">
        <div class="product-page__main__left">
          <div class="product-page__main__left__slider">
          <!-- -->
            <div class="carousel">
    <div class="carousel-inner">
        <div v-for="(image, index) in productsFake" class="carousel-inner-image" :data-active-slide="activeIndex === index">
                  <img 
                  :src="product.imageUrl"
                >
                          <div>{{image.number}}</div>
        </div>
      </div>
  </div>

          <!-- -->
          </div>
          <div class="product-page__main__left__description">
            <p>{{ product.description }}</p>
          </div>
        </div>
        <div class="product-page__main__right">
        <div class="product-page__main__right__title">
          <p>{{ product.title }}</p>
        </div>
        <div class="product-page__main__right__price">
        <p>Цена: {{ product.price }}</p>
        </div>
        <div class="product-page__main__right__slide-selected">
          <div v-for="(image,index) in productsFake" class="thumbs-thumbnail">
            <button :data-active-button="activeIndex === index" @click="update(index)">
              <div class="product-page__main__right__slide-selected__item">
                <div>{{image.number}}</div>
              </div>
            </button>
          </div>
        </div>
        <div class="product-page__main__right__sub-title">
         <p>Материал: {{ product.material }}</p>
        </div>
        <div class="product-page__main__right__sub-title">
         <p>Цвет: {{ product.color}}</p>
        </div>
        <div class="product-page__main__right__sub-title">
         <p>Страна: {{ product.manufacturerСountry }}</p>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  data() {
    return {
      productsFake: [
        {number: "1"},
        {number: "2"},
        {number: "3"},
        {number: "4"},
        {number: "5"},
        {number: "6"},
        {number: "7"},
        {number: "8"},
      ],
      activeIndex: 0,
      images: [42, 10, 2, 123, 234]
    }
  },
    validate({params}) {
    return Boolean(params.id)
  },
  async asyncData({store, params}) {
    const product = await store.dispatch('products/fetchById', params.id)
    await store.dispatch('products/addView', product)
    return {
      product: {...product, views: ++product.views}
    }
  },

  methods: {
    update(index) {
      this.activeIndex = index;
    }
  }
}
</script>

<style lang="scss">
  .product-page{
    display: flex;
    height: 900px;
    width: 100%;
    margin: 50px 0px 50px 0px;
    &__main{
      display: flex;
      box-sizing: border-box;
      border: 2px solid black;
      &__left{
        display: flex;
        flex-direction: column;
          border-right: 2px solid black;
        &__slider{
          display: flex;
          width: 700px;
          height: 500px;
          border-bottom: 2px solid black;
        }
        &__description{
          display: flex;
          font-size: 18px;
          font-weight: 600;
          width: 600px;
          margin: 40px 0px 0px 20px;
        }
      }
      &__right{
        display: flex;
          flex-direction: column;
          width: 602px;
        &__price{
          display: flex;
          font-size: 25px;
          font-weight: 700;
          margin: -15px 20px 0px 20px;
        }
        &__title{
          display: flex;
          font-size: 30px;
          font-weight: 700;
          margin: 20px 20px 0px 20px;
        }
        &__sub-title{
          display: flex;
          font-size: 20px;
          font-weight: 700;
          margin: 0px 20px 0px 20px;
        }
        &__slide-selected{
          display: flex;
          margin: 0px 20px 20px 20px;
          height: auto;
          border: 2px solid black;
          box-sizing: border-box;
          &__item{
            display: flex;
            align-items: center;
            justify-content: center;
            width: 40px;
            height: 40px;
            margin: 10px 0px 10px 10px;
            box-sizing: border-box;
            border: 2px solid black;
          }
        }
      }
    }
  }

  .VueCarousel{
    width: 700px;
  }

  .VueCarousel-wrapper{
    width: 700px;
    height: 500px;
  }


  .carousel-inner {
  display: flex;
  overflow: hidden;
}

.carousel-inner-image {
  width: 100%;
  margin-right: -100%;
  opacity: 0;
  transform: translate(-100%);
  transition: 500ms ease-out;
  img {
    display: block;
    width: 100%;
  }
}

.carousel-inner-image[data-active-slide] {
  transform: translateX(0);
  opacity: 1;
}

.carousel-inner-image[data-active-slide] ~ .carousel-inner-image {
  transform: translateX(100%);
}



.thumbs {

  display: flex;
}

.thumbs-thumbnail {
  flex: 1;
  
  & img {

  }
  & button {
    background-color: white;
  }
}

button {
  padding: 0;
  border:0;
  outline: 0;
  cursor: pointer;
  overflow: hidden;
  
  img {
    display: block;
    transition: 500ms ease-out;
    transform: scale(1.05);
    filter: grayscale(100%);
  }
  
  &:hover img {
    filter: grayscale(0%);
    transform: scale(1.15);
    transform-origin: center;
  }
}

button[data-active-button] img {
    filter: grayscale(0%);
    transform: scale(1.15);
}

</style>