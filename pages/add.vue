<template>
  <div class="page" id="#main">
    <div class="container">
      <h2 class="title_list">Добавить</h2>
      <div class="add">
        <div class="list__summary">
          <table class="list__summary__table" v-show="this.selectedItem!==null">
            <tr>
              <td class="list__summary__heading">Белки</td>
              <td class="list__summary__heading">Жиры</td>
              <td class="list__summary__heading">Углеводы</td>
              <td class="list__summary__heading">Калории</td>
            </tr>
            <tr>
              <td class="list__summary__item__wrapper">
                <div class="list__summary__item">{{ ((selectedItem || {} ).molecules || {}).proteins }}</div>
              </td>
              <td class="list__summary__item__wrapper">
                <div class="list__summary__item">{{ ((selectedItem || {}).molecules || {}).fats }}</div>
              </td>
              <td class="list__summary__item__wrapper">
                <div class="list__summary__item">{{ ((selectedItem|| {}).molecules || {}).carbonhydrates }}</div>
              </td>
              <td class="list__summary__item__wrapper">
                <div class="list__summary__item">{{ (selectedItem|| {}).cCal }}</div>
              </td>
            </tr>
            <tr>
              <td colspan="4" class="button_add">
                <button class="button_add__button" @click="addFood()">Добавить</button>
              </td>
            </tr>
          </table>
        </div>
        <div class="category__block">
          <span class="category__item" v-for="(item, index) in getPreparedData" @click="selectCategory(index)">
              {{ item.categoryName }}
          </span>
        </div>
        <table class="list__summary__main__item" v-show="selectedCategory.length>0" v-for="(item, index) in selectedCategory" @click="selectItem(index)">
          <tr>
            <td class="list__summary__heading" colspan="1"><img :src="item.imageName" /></td>
            <td class="list__summary__heading" colspan="3">{{ item.name }}, 300г.</td>
          </tr>
          <tr>
            <td class="list__summary__item">{{ item.molecules.proteins  }}</td>
            <td class="list__summary__item">{{ item.molecules.fats }}</td>
            <td class="list__summary__item">{{ item.molecules.carbonhydrates }}</td>
            <td class="list__summary__item">{{ item.cCal }}</td>
          </tr>
        </table>
      </div>
    </div>

    <bottomMenu/>
    <scrollToTop id="#main"/>
  </div>
</template>

<script>
import Errors from '~/core/Errors'
import bottomMenu from '~/components/bottomMenu/index'

export default {
  name: "add",
  components: {
    bottomMenu
  },

  mounted() {
    console.log(this.getPreparedData)
  },
  data() {
    return {
      categories: [],
      products: [],
      selectedProduct: null,
      selectedItem: null,
      selectedCategory: [],
    }
  },

  methods: {
    addFood(e) {
      this.$store.commit('food/addFood', {
        name: this.selectedItem.name,
        squirrels: this.selectedItem.molecules.proteins,
        fats: this.selectedItem.molecules.fats,
        carbons: this.selectedItem.molecules.carbonhydrates,
        calories: this.selectedItem.cCal,
        selectedWeight: 300,
        steps: this.selectedItem.steps,
      });
    },
    selectCategory(index) {
      this.selectedCategory = this.getPreparedData[index].items;
    },
    selectItem(index) {
      this.selectedItem = this.selectedCategory[index];
    },


    requestCategories() {
      var json = `[{"id":1,"categoryName":"Категория1"},{"id":2,"categoryName":"Категория2"},{"id":3,"categoryName":"Категория3"}]`;

      return JSON.parse(json);
    },

    requestData() {
      var jsonData = `[{"id":1,"name":"Овсянка, сэр","imageName":"https://static.1000.menu/img/content/33926/ovsyanka-v-mikrovolnovke-na-moloke_1554407360_7_max.jpg","cCal":150.2,"steps":100,"type":3,"molecules":{"id":1,"proteins":100,"fats":300,"carbonhydrates":125},"dateAdd":"2020-10-11"},{"id":2,"name":"бургер","imageName":"https://obtorg.ru/image/catalog/news/otkrytie-burgernoj.jpg","cCal":450.2,"steps":10000,"type":3,"molecules":{"id":2,"proteins":90,"fats":450,"carbonhydrates":455},"dateAdd":"2020-10-11"},{"id":3,"name":"бургер с курицей","imageName":"https://img.postershop.me/1160/Products/578985_1506535456.2736_original.jpg","cCal":450.2,"steps":10000,"type":3,"molecules":{"id":3,"proteins":310,"fats":430,"carbonhydrates":520},"dateAdd":"2020-10-11"},{"id":4,"name":"лазанья","imageName":"https://taganrogprav.ru/wp-content/uploads/2020/04/lazanya.jpg","cCal":135,"steps":3500,"type":1,"molecules":{"id":4,"proteins":80,"fats":120,"carbonhydrates":320},"dateAdd":"2020-10-11"},{"id":5,"name":"пицца","imageName":"https://dostavka-eda-demo.ultronsale.ru/images/categories/pizza.jpg","cCal":560,"steps":9600,"type":1,"molecules":{"id":5,"proteins":30,"fats":120,"carbonhydrates":112},"dateAdd":"2020-10-11"},{"id":6,"name":"кола","imageName":"https://i.ytimg.com/vi/u2umigSv7nU/maxresdefault.jpg","cCal":45,"steps":120,"type":1,"molecules":{"id":6,"proteins":0,"fats":0,"carbonhydrates":0},"dateAdd":"2020-10-11"},{"id":7,"name":"йогурт","imageName":"https://kto-chto-gde.ru/wp-content/uploads/2016/11/Yoghurt.jpg","cCal":120,"steps":2000,"type":2,"molecules":{"id":7,"proteins":90,"fats":45,"carbonhydrates":20},"dateAdd":"2020-10-11"}]`;

      return JSON.parse(jsonData);
    }
  },
  computed: {
    getPreparedData() {
      var cats = this.requestCategories();
      var items = this.requestData();
      cats.forEach(category => {
        category.items = items.filter(x => (x.type === category.id));
      });
      return cats;
    },
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

.add {
  background: white;
  height: calc(100% - 175px);
}
</style>

<style scoped lang="scss">
.title_list {
  color: white;
  border-radius: 10px;
  text-align: center;
}
.button_add{


  &__button{
    margin-left: 40%;
    margin-right: 40%;
  }
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
    max-width: 40px;
  }

  &__item {
    text-align: center;

    height: 100%;

    &__wrapper {
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

.category {
  &__block {
    padding: 10px 3px;
    display: flex;
    align-items: stretch;
  }

  &__item {
    line-height: 1.2;
    font-size: 15px;
    min-width: 60px;
    padding: 0 10px;
  }

}
</style>
