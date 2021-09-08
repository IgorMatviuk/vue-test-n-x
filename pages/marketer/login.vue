<template>
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
</template>

<script>
  export default {
    data() {
      return {
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
      async onSubmit(event) {
        event.preventDefault()
        const formData = {
          login: this.loginForm.login,
          password: this.loginForm.password
        }
        console.log(formData)
        console.log(JSON.stringify(this.loginForm))
        await this.$store.dispatch('auth/loginMarketer', formData) 
        this.$router.push('/marketer')
      }
    }
  }
</script>