import {
  makeConstCreator,
  assignStoreState,
  delayPromise,
} from '@/shared/utils/tools';

const makeConst = makeConstCreator('global');

// getters
export const state = makeConst('state');
export const count = makeConst('count');
// mutations
export const SET_STATE = makeConst('SET_STATE');
export const ADD_COUNT = makeConst('ADD_COUNT');
// actions
export const add = makeConst('add');
export const addAsync = makeConst('addAsync');

export default {
  state: {
    count: 0,
  },
  getters: {
    [state]: state => state,
    [count]: state => state.count,
  },
  mutations: {
    /**
     * @param  {object} payload
     */
    [SET_STATE](state, payload) {
      assignStoreState(state, payload);
    },

    /**
     * @param  {number} payload
     */
    [ADD_COUNT](state, payload) {
      state.count += payload;
    },
  },
  actions: {
    /**
     * @param  {number} payload
     */
    async [add]({ commit }, payload) {
      commit(ADD_COUNT, payload);
    },

    /**
     * @param  {number} payload
     */
    async [addAsync]({ commit }, payload) {
      await delayPromise();
      commit(ADD_COUNT, payload);
    },
  },
};
