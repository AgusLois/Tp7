<template>

  <section class="src-componentes-formulario-av">
     <div class="jumbotron">
      <h2>Formulario</h2>
      <hr>
      <br>

      <vue-form :state="formState" @submit.prevent="enviar()">
    
        <validate tag="div">
        <label for="nombre">Nombre</label>
          <input type="text" id="nombre" name="nombre" class = "form-control" autocomplete="off" v-model.trim="formData.nombre" required :minlength="nombreMinLength" :maxlength="caracterMaximo" no-espacios/>
          <field-messages name="nombre" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
            <div slot="minlength" class="alert alert-danger mt-1">Debe tener minimo {{nombreMinLength}} caracteres </div>
            <div v-if="formData.nombre && (formData.nombre.length == 15)" class="alert alert-danger mt-1">Debe tener máximo 15 caracteres</div>
            <div slot="no-espacios" class="alert alert-danger mt-1">No se permiten espacios intermedios </div>
          </field-messages>
        </validate>
        <br>
         <validate tag="div">
        <label for="edad">Edad</label>
          <input type="number" id="edad" name="edad" class = "form-control" autocomplete="off" v-model.number="formData.edad" required :min="edadMin" :max="edadMax"/>
    
          <field-messages name="edad" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
            <div slot="min" class="alert alert-danger mt-1">Debe tener minimo {{edadMin}} años</div>
            <div slot="max" class="alert alert-danger mt-1">Debe tener máximo{{edadMax}} años</div>
          </field-messages>
        </validate>
        <br>
        <validate tag="div">
        <label for="email">Email</label>
          <input type="email" id="email" name="email" class = "form-control" autocomplete="off" v-model.trim="formData.email" required />
    
          <field-messages name="email" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
            <div slot="email" class="alert alert-danger mt-1">Email no valido</div>
          </field-messages>
        </validate>
        <br>
    
        <button class="btn-btn-sucess my-3" :disabled="formState.$invalid">Enviar</button>
      </vue-form>
      </div>
  </section>

</template>

<script>
    import axios from 'axios'
  export default  {
    name: 'src-componentes-formulario-av',
    props: [],
    mounted () {
    },
    data () {
      return {
        formState:{}, 
        formData:this.getInicialData(),
        nombreMinLength:3,
        caracterMaximo:15,
        edadMin:18,
        edadMax:120,
        url:'https://62842ba33060bbd3473556b1.mockapi.io/users'
      }
    },
    methods: {
      getInicialData(){
      return{
          nombre: " ",
          apellido: " ",
          edad: " ",
          mail: " "
      }
    },
    enviar(){
      console.log({...this.formData})
      this.formData=this.getInicialData()
      this.formState._reset()
  
    let json = {
        id:this.edad,
        email : this.mail,
        password : this.nombre,
      }
      axios.post('/users', json).then(response => {
        console.log(response)
      })
       .catch(error =>{
        console.log(error)
       })
       }
    },
    computed: {
    }
}
</script>

<style scoped lang="css">
  /* .src-componentes-formulario-av {
  } */
  .jumbotron{
    background-color: white;
    color: black;
  }
  hr{
    background-color: #bbb;
  }
  pre{
    color:white
  }
</style>