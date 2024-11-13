<template>
  <div>
    <div class="form">
      <p class="title">
        Registrarse
      </p>
      <p class="message">
        Registrate ahora y obten acceso a nuestro sitio web.
      </p>
      <div class="flex">
        <label>
          <input required="" placeholder="" type="text" class="input">
          <span>Nombre</span>
        </label>

        <label>
          <input required="" placeholder="" type="text" class="input">
          <span>Apellido</span>
        </label>
      </div>
      <label>
        <input required="" placeholder="" type="email" class="input">
        <span>Correo</span>
      </label>
      <label>
        <input required="" placeholder="" type="password" class="input">
        <span>Contraseña</span>
      </label>
      <label>
        <input required="" placeholder="" type="password" class="input">
        <span>Confirmar contraseña</span>
      </label>
      <button class="submit">
        Enviar
      </button>
      <p class="signin">
        Ya tienes una cuenta ? <a @click="switchF">Ingresar</a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  emits: ['switchForms'],
  data () {
    return {
      nombre: '',
      apellido: '',
      correo: '',
      password: ''
    }
  },
  methods: {
    switchF () {
      this.$emit('switchForms')
    }
  }
}
</script>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 100%;
  background-color: #fff;
  padding: 20px;
  border-radius: 20px;
  position: relative;
}
.title {
  font-size: 28px;
  color: royalblue;
  font-weight: 600;
  letter-spacing: -1px;
  position: relative;
  display: flex;
  align-items: center;
  padding-left: 30px;
}
.title::before,.title::after {
  position: absolute;
  content: "";
  height: 16px;
  width: 16px;
  border-radius: 50%;
  left: 0px;
  background-color: royalblue;
}
.title::before {
  width: 18px;
  height: 18px;
  background-color: royalblue;
}
.title::after {
  width: 18px;
  height: 18px;
  animation: pulse 1s linear infinite;
}
.message, .signin {
  color: rgba(88, 87, 87, 0.822);
  font-size: 14px;
}
.signin {
  text-align: center;
}
.signin a {
  color: royalblue;
}
.signin a:hover {
  text-decoration: underline royalblue;
}
.flex {
  display: flex;
  width: 100%;
  gap: 6px;
}
.form label {
  position: relative;
}
.form label .input {
  width: 100%;
  padding: 10px 10px 20px 10px;
  outline: 0;
  border: 1px solid rgba(105, 105, 105, 0.397);
  border-radius: 10px;
}
.form label .input + span {
  position: absolute;
  left: 10px;
  top: 15px;
  color: grey;
  font-size: 0.9em;
  cursor: text;
  transition: 0.3s ease;
}
.form label .input:placeholder-shown + span {
  top: 15px;
  font-size: 0.9em;
}
.form label .input:focus + span,.form label .input:valid + span {
  top: 30px;
  font-size: 0.7em;
  font-weight: 600;
}
.form label .input:valid + span {
  color: green;
}
.submit {
  margin-top: 1.2em;
  border: none;
  outline: none;
  background-color: #3563e3;
  padding: 10px;
  border-radius: 10px;
  color: #fff;
  font-size: 16px;
  transform: .3s ease;
}
.submit:hover {
  background-color: #2929da;
}

@keyframes pulse {
  from {
    transform: scale(0.9);
    opacity: 1;
  }

  to {
    transform: scale(1.8);
    opacity: 0;
  }
}
</style>
