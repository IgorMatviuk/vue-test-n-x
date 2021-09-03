<template>
<div class="popup-container">
<vue-draggable-resizable :w="100" :h="100" @dragging="onDrag" @resizing="onResize" :parent="true">
  <div class="popup-login based-shadow">
      <div class="popup-login__header gradient">
      <div class="popup-login__header__close" @click="hidePopupRegistration"></div>
      </div>
      <div class="popup-login__body">
          <div class="popup-login__body__title">
              <p>Зарегистрироваться</p>
          </div>
                <div class="">
    <b-form @submit="onSubmit">
      <b-form-group
        id="input-group-1"
        label="Логин:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="loginForm.login"
          type="text"
          placeholder="Введите логин"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Пароль:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="loginForm.password"
          placeholder="Введите пароль"
          required
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Создать</b-button>
    </b-form>
      </div>
      </div>
  </div>
     </vue-draggable-resizable>
</div>
</template>

<script>
export default {
        components: {
        VueDraggableResizable: () => import('vue-draggable-resizable')
    },
      data: function () {
    return {
      width: 0,
      height: 0,
      x: 0,
      y: 0,
              loginForm: {
          login: '',
          password: ''
        },
    }
  },
      mounted(){
      const {message} = this.$route.query

      if (message === 'login') {
        console.log('водите в панель администратора')  
      }
    },
    methods: {
        hidePopupRegistration() {
            this.$emit('closePopupRegistration')
        },
                onResize: function (x, y, width, height) {
          this.x = x
          this.y = y
          this.width = width
          this.height = height
        },
        onDrag: function (x, y) {
            this.x = x
            this.y = y
        },
              async onSubmit(event) {
        event.preventDefault()
        const formData = {
          login: this.loginForm.login,
          password: this.loginForm.password,
        }
        console.log(formData)
        console.log(JSON.stringify(this.loginForm))
        await this.$store.dispatch('auth/createUser', formData) 
        console.log('пользователь создан')
      }
    }
}
</script>

<style lang="scss">


</style>