<template>
  <div class="wrapper" id="wrapper">
    <div class="wrapper__content" id="wrapper__content">

        <nuxt />

    </div>
    <div class="wrapper__notification"
         :class="{'is-active' : getNotification.active.status,
                        'save': getNotification.active.name === 'save' || getNotification.active.name === 'send',
                        'error': getNotification.active.name === 'error'}">
      {{ getNotification.active.text }}
      <button type="button"
              @click="closeNotification()"
              class="wrapper__notificationBtn">
        <svg-icon class="wrapper__notificationSvg"
                  name="close"/>
      </button>
    </div>

  </div>
</template>


<script>

  export default {
    components: {
    },
    mixins: [],

    mounted() {},

    data() {
      return {}
    },

    computed: {
      isMain() {
        return ['index', 'recovery', 'setting'].includes(this.$route.name);
      },
      getNotification() {
        return this.$store.getters['notification/getNotification'];
      },
    },

    methods: {
      closeNotification() {
        this.$store.commit('notification/defaultNotification');
      },
    },
  }
</script>


<style lang="scss">
  .wrapper {
    position: relative;
   // min-width: 1440px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    height: 100%;
    min-height: 100vh;
    background-color:  #f7a945;

    &__notification {
      display: none;
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 40px;

      align-items: center;
      justify-content: center;
      z-index: 200;

      text-transform: uppercase;
      font-size: 14px;
      color: white;
      opacity: 0.7;
      letter-spacing: 1.1px;

      &.is-active {
        display: flex;
      }

      &.save {
        background-color: #64B003;
      }

      &.error {
        background-color: #D50000;
      }
    }

    &__notificationBtn {
      position: absolute;
      right: 30px;
      top: 50%;
      transform: translateY(-50%);
      width: 15px;
      height: 15px;
      display: flex;
      align-items: center;
      justify-content: center;

    }

    &__notificationSvg {
      width: 12px;
      height: 12px;
      fill: white;
    }

    &__content {
      position: relative;
      display: flex;
      align-items: stretch;
      flex-grow: 1;
      width: 100%;
      height: 100%;

      //padding-bottom: 150px;
    }

  }

</style>
