<template>
  <div class="page" id="#main">
    <div class="container">
      <h2 class="title_list">Добавить</h2>
      <div class="add">
          <button type="button" @click="addFood(e)">asdfsdf</button>
      </div>
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
        categories: [],
        products: [],
        selectedProduct : null,
      }
    },

    methods: {
      addFood(e){
        this.$store.commit('food/addFood',{
          name:"test",
          squirrels: 100,
          fats:100,
          carbons: 100,
          calories:100,
          selectedWeight: 100
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
.title_list {
  color: white;
  border-radius: 10px;
  text-align: center;
}
.add{
  background: white;
  height: calc(100% - 175px);
}
</style>
