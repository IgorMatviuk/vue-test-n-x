<template>
  <div class="header">
    <div class="header__container">
      <div class="header__container__left">logo</div>
      <div class="header__container__center">
        <div class="header__container__center__menu">
          <div class="header__container__center__menu__item">
              <NuxtLink to="/" prefetch>Главная</NuxtLink>
              <NuxtLink to="/draggableTest" prefetch>Перетаскивание</NuxtLink>
          </div>
        </div>
      </div>
      <div class="header__container__right">

        <div class="header__container__right__lang">
          <div class="header__container__right__lang__select">
      <div style="color: #FFFFFF;"><h3>{{ $t("lang") }}</h3></div>
        <select v-model="$i18n.locale">
      <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang" >
        {{ lang }}
      </option>
    </select>
          </div>
        </div>
        <div class="header__container__right__buttons">
          <div class="based-button">
            <p @click="showPopupLogin" >Войти</p>
          </div>
          <div class="based-button">
            <p @click="showPopupRegistration">Зарегистрироваться</p>
          </div>
        </div>
      </div>
    </div>
    <Login 
      v-if="IsPopupLoginShow"
      @closePopupLogin="hidePopupLogin"
    />
    <Registration
      v-if="IsPopupRegistrationShow"
      @closePopupRegistration="hidePopupRegistration"
    />
  </div>
</template>

<script>

import Login from '../popups/login.vue'
import Registration from '../popups/registration.vue'

export default {
  
  data() {
    return {
      IsPopupLoginShow: false,
      IsPopupRegistrationShow: false,
      langs: ['ru', 'en', 'is'],
    }
  },

  methods: {
    showPopupLogin() {
      this.IsPopupLoginShow = true;
    },
    
    hidePopupLogin() {
            this.IsPopupLoginShow = false;
    },
    showPopupRegistration() {
      this.IsPopupRegistrationShow = true;
    },
    
    hidePopupRegistration() {
      this.IsPopupRegistrationShow = false;
    },
  },

  components: {
    Login,
    Registration
  }
}
</script>

<style lang="scss">
.header{
    display: flex;
    height: 120px;
    /*background-color: #c0392b;*/
    background-color: black;
    width: 100%;
    &__container{
      display: flex;
      width: 100%;
      justify-content: space-between;
      margin: 20px 50px 0px 50px;
      &__left{
        display: flex;
      }
      &__center{
        display: flex;
        &__menu{
          display: flex;
          &__item a{
            color: #FFFFFF;
            
          }
        }
      }
      &__right{
        display: flex;
        &__lang{
          display:flex;
          justify-content: center;
          align-items: center;
          margin: 0px 30px 0px 0px;
          select{
            display: flex;
            width: 165px;
          }
        }
        &__buttons{
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 80px;
        }
      }
    }

  a.nuxt-link-active {
    color: #bdc3c7;
  }

    a.nuxt-link {
    color: #FFFFFF;
  }
  
}
</style>