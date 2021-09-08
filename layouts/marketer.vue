<template>
  <div>
      <div class="admin-panel-header">
        <NuxtLink class="white-link" to="/" prefetch>Главная</NuxtLink>
        <div>
            <NuxtLink class="white-link" to="/marketer/personalArea" prefetch>Личный кабинет</NuxtLink>
            <NuxtLink class="white-link" to="/marketer/listProducts" prefetch>Список товаров</NuxtLink>
            <NuxtLink class="white-link" to="/marketer/createProduct" prefetch>Добавить товар</NuxtLink>
            <NuxtLink class="white-link" to="/marketer/editProduct" prefetch>Редактировать товар</NuxtLink>
        </div>
        <div class="admin-panel-header__logout" v-on:click="logout()">
          <p style="color: #FFFFFF;">Выйти</p>
        </div>
      </div>
      <Nuxt />
  </div>
</template>

<script>
export default {
  methods: {
    logout(){
      this.$store.dispatch('auth/logout')
          this.$router.push('/marketer/login?message=logout')
    }
  }
}
</script>

<style lang="scss">
  .admin-panel-header{  
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 110px;
    background-color: #3498db;
    &__logout{
      display: flex;
    }
  }

    a.nuxt-link-active {
   color: #FFFFFF;
  }

    a.nuxt-link {
    color: #FFFFFF;
  }


</style>