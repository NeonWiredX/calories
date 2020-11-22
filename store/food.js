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
  }
};
