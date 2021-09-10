<template>
  <div class="p-card">
      <div class="p-card__header">
          <div class="p-card__header__price">
              <p>Какой-то продукт</p>
          </div>
          <!-- -->

          <!-- -->
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
    .p-card{
        display: flex;
        flex-direction: column;
        width: 300px;
        height: 440px;
        background-color: #FFFFFF;
        -webkit-box-shadow: 3px 3px 8px 7px rgba(34, 60, 80, 0.21);
        -moz-box-shadow: 3px 3px 8px 7px rgba(34, 60, 80, 0.21);
        box-shadow: 3px 3px 8px 7px rgba(34, 60, 80, 0.21);
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
        &__header{
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 140px;
            background: rgb(142,68,173);
            background: linear-gradient(119deg, rgba(142,68,173,1) 18%, rgba(211,84,0,1) 47%, rgba(231,76,60,1) 86%);
            border-top-left-radius: 20px;
            border-top-right-radius: 20px;
            &__price{
                display: flex;
                font-family: 'Roboto', sans-serif;
                font-size: 23px;
                font-weight: 700;
                color: #FFFFFF;
            }
        }
    }
</style>    