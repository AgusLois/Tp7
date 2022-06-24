<template>

  <section class="src-components-users">
    <hr>
    <h1>Usuarios</h1>

    <button class="btn btn-success my-3 mr-3" @click="getPostsUsers()">Pedir usuarios</button>
    <button class="btn btn-success my-3 mr-3" @click="getPostsAxios()">Pedir usuarios</button>
    <button class="btn btn-danger my-3" @click="usuarios=[]">Cerrar</button>


     <br>
         <div v-if="usuarios.length" class="table-responsive">
          <table class="table table-dark">
              <tr>
                 <th>id</th>
                 <th>email</th>
              </tr>
              <tr v-for="(usuario,index) in usuarios" :key="index">
                 <td>{{ usuario.id }}</td>
                 <td>{{ usuario.email }}</td>
              </tr>
          </table>
           <h4 class="alert alert-primary">Se encontraron {{usuarios.length}} usuarios</h4>
         </div>
            <h4 v-else class="alert alert-danger text-center">No se encontraron Usuarios</h4>


  </section>

</template>

<script>
  import axios from 'axios'
  export default  {
    name: 'src-components-users',
    props: [],
    mounted () {
    },
    data () {
      return {
        usuarios:[],
        criterioDeBusqueda: '',
        url:'https://62842ba33060bbd3473556b1.mockapi.io/users'
      }
    },
    methods: {
       async getPostsUsers(){
      try{
      let {data} = await axios(this.url)
      this.usuarios=data
      }catch(error){
         console.log("Error Axios", error)
      }
      },
      getPostsAxios(){
        axios(this.url)
         .then(({data})=>{
         this.usuarios=data
         })
         .catch(error => console.log("Error Axios", error))
      }
    },
    computed: {
     
    
  }
}
</script>

<style scoped lang="css">
  h1{
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  }
</style>