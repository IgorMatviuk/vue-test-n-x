<template>
<div class="popup-container">
<vue-draggable-resizable :w="100" :h="100" @dragging="onDrag" @resizing="onResize" :parent="true">
  <div class="popup-login based-shadow">
      <div class="popup-login__header gradient">
      <div class="popup-login__header__close" @click="hidePopupLogin"></div>
      </div>
      <div class="popup-login__body">
          <div class="popup-login__body__title">
              <p>Войти</p>
          </div>
          <div>
                <div>
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

      <b-button type="submit" variant="primary">Войти</b-button>
    </b-form>
  </div>
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
        hidePopupLogin() {
            this.$emit('closePopupLogin')
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
          password: this.loginForm.password
        }
        console.log(formData)
        console.log(JSON.stringify(this.loginForm))
        await this.$store.dispatch('auth/loginUser', formData) 
        this.$router.push('/user/personalArea')
      }
    }
}
</script>

<style lang="scss">

    .popup-container{
        position: absolute;
        width: 100%;
        height: 100%;
    }

    .popup-login{
        margin: 0px 0px 0px 0px;
        display: flex;
        flex-direction: column;
        width: 400px;
        height: 500px;
        background-color: #FFFFFF;
            border-top-left-radius: 15px;
            border-top-right-radius: 15px;
        &__header{
            display: flex;
            width: 100%;
            height: 70px;
            border-top-left-radius: 15px;
            border-top-right-radius: 15px;
            &__close{
                display: flex;
                width: 30px;
                height: 30px;
                background-color: #FFFFFF;
                border-radius: 50%;
                margin: 20px 0px 0px 350px;
            }
        }
        &__body{
            display: flex;
            flex-direction: column;
            &__title{
                display: flex;
                justify-content: center;
                align-items: center;
                width: 100%;
                height: 50px;
                font-family: 'Roboto', sans-serif;
                color: #2c3e50;
                font-size: 30px;
                font-weight: 900;
                letter-spacing: 1px;
                margin: 0px 0px 0px 0px;
            }
        }
    }

</style>