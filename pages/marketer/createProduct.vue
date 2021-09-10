<!--

<template>
    <div>
        <h1>Добавить товар</h1>
        <div>
            <form 
                :model="controls"
                ref="form"
                @submit.prevent="onSubmit"
            >
                <div>
                    <label>Краткое название</label>
                    <input type="text" v-model="controls.title">
                </div>
                <div>
                <label>Описание</label>
                    <input type="text" v-model="controls.description">
                </div>
                <div>
                    <label>Стоимость</label>
                    <input type="text" v-model="controls.price">
                </div>
                <div class="form-group">
                  <input 
                        type="file"
                        ref="upload"
                        :on-change="handleImageChange"
                        :auto-upload="false"
                    >
                </div>
                <button 
                    type="submit"
                    round
                >добавить товар</button>
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
            image: null,
            controls: {
                title: '',
                price: '',
                description: '',
            }
        }
    },

    methods: {
        handleImageChange(file, fileList) {
          this.image = file.raw
        },
        async onSubmit() {
          const formData = {
            title: this.controls.title,
            price: this.controls.price,
            description: this.controls.description,
            image: this.image
          }
            await this.$store.dispatch('products/create', formData)
            this.controls.title = ''
            this.controls.price = ''
            this.controls.description = ''
            this.image = null
            this.$refs.upload.clearFiles()
        }
  }
}
</script>

<style>

</style>

-->

<template>
  <ElForm
    :model="controls"
    ref="form"
    @submit.native.prevent="onSubmit"
  >
    <ElFormItem label="Введите название поста" prop="title">
      <ElInput
        v-model="controls.title"
      />
    </ElFormItem>

    <ElFormItem label="price" prop="price">
      <ElInput
        v-model="controls.price"
      />
    </ElFormItem>

    <ElFormItem label="description" prop="description">
      <ElInput
        v-model="controls.description"
      />
    </ElFormItem>

    <ElUpload
      class="mb"
      drag
      ref="upload"
      action="https://jsonplaceholder.typicode.com/posts/"
      :on-change="handleImageChange"
      :auto-upload="false"
    >
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">Перетащите картинку <em>или нажмите</em></div>
      <div class="el-upload__tip" slot="tip">файлы с расширением jpg/png</div>
    </ElUpload>

    <ElFormItem>
      <ElButton
        type="primary"
        native-type="submit"
        round
        :loading="loading"
      >
        Создать пост
      </ElButton>
    </ElFormItem>
  </ElForm>
</template>

<script>
export default {
  layout: 'admin',
  middleware: ['admin-auth'],
  data() {
    return {
      image: null,
      previewDialog: false,
      loading: false,
      controls: {
            title: '',
            price: '',
            description: '',
      },
    }
  },
  methods: {
    handleImageChange(file, fileList) {
      this.image = file.raw
    },
    async onSubmit() {

          const formData = {
            title: this.controls.title,
            price: this.controls.price,
            description: this.controls.description,
            image: this.image
          }
            await this.$store.dispatch('products/create', formData)
            this.controls.title = ''
            this.controls.price = ''
            this.controls.description = ''
            this.image = null
            this.$refs.upload.clearFiles()
            this.$message.success('Пост создан')
    }
  }
}
</script>

<style lang="scss" scoped>
  form {
    width: 600px;
  }
</style>
