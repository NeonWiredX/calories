export const state = () => ({
  food: []
});

export const mutations = {
  addFood(state, food) {
    state.food.push(food);
  },
  removeFood(state, food) {

  }
};

export const actions = {

  async nuxtServerInit(context, route) {

  },
};

export const getters = {
  getFood(state) {
    return state.food
  },
  getCalories(state){
    var calories = state.food.reduce(function (acc,curr){
      return acc+ (+curr.calories/1000*curr.selectedWeight);
    },0);
    return (calories==0)?calories:100;
  },
  getNeededSteps(state){

    return 100;
  }
};
