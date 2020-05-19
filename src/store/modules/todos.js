import axios from 'axios';

// state
const state = {
  todos: []
};

// getters
const getters = {
  allTodos: (state) => state.todos
};

// actions
const actions = {
  async fetchTodos({ commit }) {
    const response = await axios.get('/api/todos');

    commit('setTodos', response.data);
  },

  async addTodo({ commit }, title) {
    const response = await axios.post('/api/todos', { title });

    commit('newTodo', response.data);
  },

  async deleteTodo({ commit }, id) {
    await axios.delete(`/api/todos/${id}`);

    commit('removeTodo', id)
  },

  async updateTodo({ commit }, id) {
    const response = await axios.patch(`/api/todos/${id}`);

    // console.log(response);
    commit('updTodo', response)
  }
};

// mutations
const mutations = {
  setTodos: (state, todos) => (state.todos = todos),
  newTodo: (state, todo) => state.todos.unshift(todo),
  removeTodo: (state, id) => state.todos = state.todos.filter(todo => todo.id !== id),
  updTodo: (state, id) => state.todos = state.todos.splice(todo => todo.id !== id),
};

export default {
  state,
  getters,
  actions,
  mutations
}