
<template>
  <div>
    <input type="email" name="email" id="email" />
    <input type="text" name="nome" id="nome" />
    <button>teste!</button>
    <h4>{{parametroDaRota}}</h4>
  </div>
</template>
<script>
export default {
    created(){
        console.log("Wesley")
        console.log(this.$route.params.id)
        this.parametroDaRota = this.$route.params.dado;
    },
    data(){
        return{
            parametroDaRota:"Nada"
        }
    }
};
</script>
