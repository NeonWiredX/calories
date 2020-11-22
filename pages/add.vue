<template>
  <div class="page" id="#main">
    <div class="container">
        <h2>Добав</h2>
        add
        <button type="button" @click="addFood({})">add</button>

    </div>

    <bottomMenu />
    <scrollToTop id="#main"/>
  </div>
</template>

<script>
  import Errors from '~/core/Errors'
  import bottomMenu from '~/components/bottomMenu/index'

  export default {
    name: "add",
    components:{
      bottomMenu
    },
    data() {
      return {

      }
    },

    methods: {
      addFood(e){
        this.$store.commit('food/addFood',{
          name:"test",
          squirrels: 100,
          fats:100,
          carbons: 100,
          calories:100
        });
      }
   },

    head() {
      return {
        title: 'Добавление',
        meta: [
          {hid: 'description', name: 'description', content: ''},
          {name: 'og:type', content: 'website'},
        ],
      }
    },
  }
</script>

<style lang="scss">

</style>
