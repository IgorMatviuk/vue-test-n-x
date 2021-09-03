<template>
  <div>
    <h1>admin page</h1>
    <NuxtLink to="/admin/adminCreateUser" prefetch>Создать администратора</NuxtLink>
  </div>
</template>

<script>
export default {
    layout: 'admin',
    middleware: ['admin-auth']
}
</script>

<style>

</style>