<template>
  <div class="menu bottomMenu">
    <ul class="bottomMenu__wrapper">
      <li class="bottomMenu__item"
          v-for="(item, index) in buttons"
          :key="item.id + '__menu'">
        <NuxtLink :to=item.link>
          <button type="button">
            <template v-if="item.id!==$nuxt.$route.name">
              <img :src=item.image :alt=item.id>
            </template>
            <template v-else>
              <img :src=item.imageActive :alt=item.id>
            </template>
          </button>
        </NuxtLink>
      </li>

    </ul>
  </div>
</template>

<script>
export default {
  name: "bottomMenu",
  props: {},

  data() {
    return {
      buttons: [
        {
          id: "index",
          name: "home",
          image: "img/home.png",
          imageActive: "img/homeA.png",
          link: "/"
        },
        {
          id: "list",
          name: "list",
          image: "img/list.png",
          imageActive: "img/listA.png",
          link: "/list"
        },
        {
          id: "add",
          name: "add",
          image: "img/add.png",
          imageActive: "img/addA.png",
          link: "/add"
        }
      ],
    }
  },

  methods: {
    changeTab(id) {
      this.$emit('change', this.filtered)
    },
  },
  computed: {
    curLink(){
      return $nuxt.$route.name;
    }
  }
}
</script>

<style lang="scss">

.bottomMenu {
  display: block;
  width: 100%;
  max-width: 820px;
  margin: 65px auto;
  justify-content: space-between;

  &__wrapper {

    display: flex;
    flex-direction: row;
    align-items: stretch;
    justify-content: space-between;
    margin-bottom: 35px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  &__item {
    list-style-type: none;
    margin-left: auto;
    margin-right: auto;
    cursor: pointer;

    a {
      max-width: 100px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      border: 8px solid white;
      padding: 15px;
      transition: all 0.3s ease;

      &:hover, &:focus, &.nuxt-link-exact-active {
        border-color: darken($secondaryColor, 10%);
      }

      @include below(768px) {
        padding: 10px;
        max-width: 80px;
        border: 6px solid white;
      }
    }
  }

  &__tab {
    width: 100%;
    height: 44px;
    margin-bottom: 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    background: $greyBlue;
    padding: 3px;
    border-radius: 10px;
    overflow: hidden;
  }

  &__tabBtn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 100%;
    transition: all .3s;

    background-color: transparent;
    font-weight: 600;
    border-radius: 10px;


    &.isActive {
      color: $secondaryColor;
      background-color: $white;
      box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
    }
  }

  &__promo {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  &__promoImg {
    height: 170px;
    margin-bottom: 10px;
  }

  &__promoTitle {
    font-weight: 600;
    margin-bottom: 4px;
  }

  &__promoText {
    max-height: 40px;
    height: 100%;
    color: $grey;

    display: -webkit-box;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    word-wrap: break-word;
    word-break: break-word;
    line-break: auto;
    -webkit-hyphens: manual;
    -ms-hyphens: manual;
    hyphens: manual;
    overflow: hidden;
  }


  &__menuCaption {
    color: $grey;
    margin-bottom: 8px;
  }

  &__menuItemCaption {
    color: $black;
    font-weight: 600;
  }

  &__menuItems {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  &__menuItem {
    width: 100%;
    display: flex;
    align-items: center;

    background-color: $white;
    border-radius: 10px;
    height: 48px;
    padding: 0 8px;

    &.isActive {
      background-color: $greyBlue;

      .sideBar__menuItemSvg {
        fill: $black;
      }
    }


    &:hover {
      background-color: $greyBlue;

      .sideBar__menuItemSvg {
        fill: $black;
      }
    }
  }

  &__menuCount {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: auto;

    background-color: $secondaryColor;
    border-radius: 10px;
    color: $white;
    padding: 5px 6px;
  }

  &__menuItemSvg {
    width: 16px;
    height: 16px;
    fill: $grey;
    margin-right: 14px;
  }

  &__btn {
    width: 100%;
    margin-bottom: 30px;
  }

  &__affix {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    width: 100%;
    max-width: 260px;

    &.affix-top {
      left: 0 !important;
    }

    &.affix-bottom {
      left: 0 !important;
    }

    /*&.affix {*/
    /*  top: 30px !important;*/
    /*}*/
  }

  &__content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;

    background-color: $white;
    border-radius: 20px;
    padding: 20px;
    margin-bottom: 20px;

    &:last-child {
      margin-bottom: 0;
    }
  }

}
</style>
