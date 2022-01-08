<template>
  <v-app>
    <v-main>
      <div id="backgroundcolor">
              <Home/>
      </div>
    </v-main>
  </v-app>
</template>

<script>
  import Home from './components/Home.vue'

  export default {
    name: 'App',
    data () {
      return {

      }
    },
    // created: function(){
    //   console.log("Teste"); 
    // },
    components: {
      Home
    },

  }
</script>
<style lang="scss">
#backgroundcolor{
    height: 100%;
    width: 100%;
    background: #3A1C71;
    background: linear-gradient(90deg, rgba(0,29,45,1) 0%, rgba(0,29,45,0.5) 100%);
    background: linear-gradient(90deg, rgba(0,29,45,1) 0%, rgba(0,29,45,0.5) 100%);
}
</style>
