import { Server } from 'miragejs';

new Server({
  seeds(server) {
    server.db.loadData({
      todos: [
        {
          "title": "Mow the lawn",
          "completed": false
        },
        {
          "title": "Go get pizza and beers",
          "completed": false
        },
        {
          "title": "Clean the porch",
          "completed": false
        },
        {
          "title": "Code some more",
          "completed": false
        }
      ]
    })
  },
  routes() {
    this.namespace = 'api';

    this.get('/todos', (schema) => {
      return schema.db.todos;
    });

    this.post('/todos', (schema, request) => {
      const todo = JSON.parse(request.requestBody);
      console.log('request', todo);

      return schema.db.todos.insert({
        'title': todo.title,
        'completed': false,
      });
    });

    this.patch('/todos/:id', (schema, request) => {
      const todo = JSON.parse(request.requestBody);

      console.log('UPDATE FROM BACKEND', request, todo);
      return schema.db.todos.update(todo.id);
    });

    this.delete('/todos/:id', (schema, request) => {
      console.log('delete', request.params.id);
      return schema.db.todos.remove(request.params.id)
    });
  }
});
