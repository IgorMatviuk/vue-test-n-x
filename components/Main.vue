<template>
  <div>
    <h1>{{ $t("hello") }}</h1>
    <div>
        <Products-gallery :products = "products"/>
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

}
</script>

<style>

</style>