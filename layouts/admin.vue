<template>
  <div>
      <div class="admin-panel-header">
        <NuxtLink to="/" prefetch>Главная</NuxtLink>
        <div class="admin-panel-header__logout" v-on:click="logout()">
          <p>Выйти</p>
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
          this.$router.push('/admin/login?message=logout')
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
</style>