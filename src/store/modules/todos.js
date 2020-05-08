import axios from 'axios';

const state = {
  todos: []
};

const getters = {
  allTodos: (state) => state.todos
};

const actions = {
  async fetchTodos({ commit }) {
    const response = await axios.get('/api/todos');
    console.log('fetch', response.data);

    commit('setTodos', response.data);
  },

  async addTodo( { commit }, title) {
    const response = await axios.post('/api/todos', { title });

    console.log('add', response.data);
    commit('newTodo', response.data);
  },

  async deleteTodo({ commit }, id) {
    await axios.delete(`/api/todos/${id}`);

    console.log('delete', id);
    commit('removeTodo', id)
  }
};

const mutations = {
  setTodos: (state, todos) => (state.todos = todos),
  newTodo: (state, todo) => state.todos.unshift(todo),
  removeTodo: (state, id) => state.todos = state.todos.filter(todo => todo.id !== id)
};

export default {
  state,
  getters,
  actions,
  mutations
}