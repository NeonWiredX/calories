<template>
  <div class="page" id="main">
    <div class="container">

      <h2 class="title_list">Дневник</h2>

      <h3 class="title_list">Общая характеристика</h3>
      <div class="list__summary">
        <table class="list__summary__table">
          <tr>
            <td class="list__summary__heading">Белки</td>
            <td class="list__summary__heading">Жиры</td>
            <td class="list__summary__heading">Углеводы</td>
            <td class="list__summary__heading">Калории</td>
          </tr>
          <tr>
            <td class="list__summary__item__wrapper"><div class="list__summary__item">{{ squirrels }}</div></td>
            <td class="list__summary__item__wrapper"><div class="list__summary__item">{{ fats }}</div></td>
            <td class="list__summary__item__wrapper"><div class="list__summary__item">{{ carbons }}</div></td>
            <td class="list__summary__item__wrapper"><div class="list__summary__item">{{ calories }}</div></td>
          </tr>
        </table>
      </div>

      <h3 class="title_list">Список еды</h3>
      <div class="list__summary__main">
        <table class="list__summary__main__item" v-for="(item, index) in getFoods">
          <tr>
            <td class="list__summary__heading" colspan="4">{{ item.name }}, {{item.selectedWeight}}г.</td>
          </tr>
          <tr>
            <td class="list__summary__item">{{ item.squirrels /1000*item.selectedWeight }}</td>
            <td class="list__summary__item">{{ item.fats /1000*item.selectedWeight}}</td>
            <td class="list__summary__item">{{ item.carbons/1000*item.selectedWeight }}</td>
            <td class="list__summary__item">{{ item.calories/1000*item.selectedWeight }}</td>
          </tr>
        </table>

      </div>

    </div>

    <bottomMenu/>
    <scrollToTop id="#main"/>
  </div>
</template>

<script>

import bottomMenu from '~/components/bottomMenu/index'


export default {
  name: "list",
  components: {
    bottomMenu,
  },
  computed: {
    getFoods() {
      return this.$store.getters['food/getFood'];
    },
    squirrels() {//yea lol
      return (this.$store.getters['food/getFood'].length === 0) ? 0 : this.$store.getters['food/getFood']
        .reduce((accumulator, currentValue) => {return accumulator + (+currentValue.squirrels/1000*currentValue.selectedWeight)},0 );
    },
    fats() {
      return (this.$store.getters['food/getFood'].length === 0) ? 0 :
        this.$store.getters['food/getFood']
          .reduce((accumulator, currentValue) => {return accumulator + (+currentValue.fats/1000*currentValue.selectedWeight)},0 );
    },
    carbons() {//yea lol
      return (this.$store.getters['food/getFood'].length === 0) ? 0 : this.$store.getters['food/getFood']
        .reduce((accumulator, currentValue) => {return accumulator + (+currentValue.carbons/1000*currentValue.selectedWeight)},0 );
    },
    calories() {
      return (this.$store.getters['food/getFood'].length === 0) ? 0 : this.$store.getters['food/getFood']
        .reduce((accumulator, currentValue) => {return accumulator + (+currentValue.calories/1000*currentValue.selectedWeight)},0 );
    }
  },
}
</script>

<style scoped lang="scss">
.title_list {
  color: white;
  border-radius: 10px;
  text-align: center;
}

.list__summary {
  width: 100%;

  display: flex;
  background: white;

  &__table {
    height: 70px;
    width: 100%;
  }

  &__heading {
    text-align: center;
    color: gray;
    height: 40px;
    max-height: 40px;
  }

  &__item {
    text-align: center;

    height: 100%;
    &__wrapper{
      height: 40px;
      max-height: 40px;
    }
  }

  &__main {
    display: flex;
    flex-direction: column;
    height: calc(100vh - 360px);
    overflow-y: scroll;
    &__item {
      width: 100%;
      min-height: 60px;
      border-radius: 10px;
      background: white;
      margin-bottom: 2px;
    }

  }
}
</style>
