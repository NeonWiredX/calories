<template>
  <div class="page" id="main">
    <div class="container">
      <div class="page__content"
           id="page__content">
          INDEX
      </div>
    </div>


    <bottomMenu />
    <scrollToTop id="#main"/>
  </div>
</template>

<script>

  import Errors from '~/core/Errors'
  import base from '../base.config'
  import bottomMenu from '~/components/bottomMenu/index'

  export default {
    name: 'index',
    components: {
      bottomMenu,
    },


    async asyncData({store, redirect, params, app, $axios, query}) {

      return {
      }
    },


    data() {
      return {

      }
    },


    methods: {

    },

    head() {
      return {
        title: 'Calories',
        meta: [
          {hid: 'description', name: 'description', content: ''},
          {name: 'og:type', content: 'website'},
        ],
      }
    },
  }
</script>

<style>

</style>
