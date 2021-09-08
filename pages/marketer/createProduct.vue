<template>
    <div>
        <h1>Добавить товар</h1>
        <div>
            <form @submit.prevent="createProduct()">
                <div>
                    <label>Краткое название</label>
                    <input type="text" v-model="title">
                </div>
                <div>
                <label>Описание</label>
                    <input type="text" v-model="description">
                </div>
                <div>
                    <label>Стоимость</label>
                    <input type="text" v-model="price">
                </div>
                <div class="form-group">
                  <label for="exampleFormControlFile1">Example file input</label>
                  <input type="file" class="form-control-file" id="exampleFormControlFile1">
                </div>
                <button type="submit">добавить товар</button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    layout: 'marketer',
    middleware: ['marketer-auth'],
    data() {
        return {
          title: '',
          price: '',
          description: '',
        }
    },
     methods: { 
        async createProduct () {
          const data = {
            title: this.title,
            price: this.price,
            description: this.description,
          }
        await this.$store.dispatch('products/create', { data })
        console.log(data)
        this.title = ''
        this.price = ''
        this.description = ''
        },
     }
}
</script>

<style>

</style>