<template>
  <div id="app">
    <div class="container">
      <div class="row container d-flex justify-content-center">

        <!-- jumbotron -->
        <div class="py-5 text-center">
          <img class="d-block mx-auto mb-4" src="./assets/logo.png" alt="" width="72" height="72">
          <h3>Vue and Vuex with Mirage JS</h3>
          <p class="lead">Below is an example form built entirely with Bootstrap's form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.</p>
        </div>

        <!-- todo container -->
        <div class="col-lg-12">
          <div class="card px-3">
              <div class="card-body">
                <AddTodo />
                <Todos />
              </div>
          </div>
        </div>
      </div>
  </div>
</div>
</template>

<script>
import Todos from './components/Todos.vue';
import AddTodo from './components/AddTodo';

export default {
  name: 'App',
  components: {
    AddTodo,
    Todos
  }
}
</script>

<style>
dl, ol, ul, li {
  list-style: none;
  padding: 0;
  margin: 0;
}
input {
  margin-right: 10px;
  border: 1px solid rgba(0,0,0,.125);
  border-radius: .25rem;
}
.container {
  max-width: 940px;
  margin: 0 auto;
}
.lead {
  padding: 0 75px;
  margin-bottom: -5px;
}
</style>