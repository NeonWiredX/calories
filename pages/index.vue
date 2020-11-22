<template>
  <div class="page" id="main">
    <div class="container">
      <div class="page__content"
           id="page__content">
          moved steps {{steps}}<br>
          spended calories {{getCalories}}
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
        watchId : null,
        steps: 0,
      }
    },
    mounted() {
      this.watchId = navigator.geolocation.watchPosition(this.gotPosition, this.errorGeo, {'enableHighAccuracy':true,'timeout':10000,'maximumAge':20000});
    },
    computed: {
      getCalories(){
        return this.steps*0.0736;
      }
    },


    methods: {
       gotPosition(geo){
         this.steps += geo.coords.speed / 0.762;
       },
      errorGeo(err){
        if(err.code==1){
          alert("User denied geolocation.");
        } else if(err.code==2){
          alert("Position unavailable.");
        } else if(err.code==3){
          alert("Timeout expired.");
        } else {
          alert("ERROR:"+ err.message);
        }
      }
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
