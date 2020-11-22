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
            <td class="list__summary__item">{{ squirrels }}</td>
            <td class="list__summary__item">{{ fats }}</td>
            <td class="list__summary__item">{{ carbons }}</td>
            <td class="list__summary__item">{{ calories }}</td>
          </tr>
        </table>
      </div>

      <h3 class="title_list">Общая характеристика</h3>
      <div class="list__summary__main">
        <table class="list__summary__main__item" v-for="(item, index) in getFoods">
          <tr>
            <td class="list__summary__heading" colspan="4">{{ item.name }}</td>
          </tr>
          <tr>
            <td class="list__summary__item">{{ item.squirrels }}</td>
            <td class="list__summary__item">{{ item.fats }}</td>
            <td class="list__summary__item">{{ item.carbons }}</td>
            <td class="list__summary__item">{{ item.calories }}</td>
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
      return (this.$store.getters['food/getFood'].length === 0) ? 0 : this.$store.getters['food/getFood'].reduce((accumulator, currentValue) => +accumulator.squirrels + currentValue);
    },
    fats() {
      return (this.$store.getters['food/getFood'].length === 0) ? 0 :
        this.$store.getters['food/getFood']
          .reduce((accumulator, currentValue) => +accumulator.fats + currentValue);
    },
    carbons() {//yea lol
      return (this.$store.getters['food/getFood'].length === 0) ? 0 : this.$store.getters['food/getFood'].reduce((accumulator, currentValue) => +accumulator.carbons + currentValue);
    },
    calories() {
      return (this.$store.getters['food/getFood'].length === 0) ? 0 : this.$store.getters['food/getFood'].reduce((accumulator, currentValue) => +accumulator.calories + currentValue);
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
    height: 15vh;
    width: 100%;
  }

  &__heading {
    text-align: center;
    color: gray;
  }

  &__item {
    text-align: center;
  }

  &__main {
    display: flex;
    flex-direction: column;

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
