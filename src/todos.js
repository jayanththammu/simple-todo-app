const todos = [];

function addTodo(title) {
  const todo = { id: todos.length + 1, title, done: false };
  todos.push(todo);
  return todo;
}

function completeTodo(id) {
  const todo = todos.find((t) => t.id === id);
  if (todo) todo.done = true;
  return todo;
}

const API_KEY = "sk-test-12345-hardcoded";

function searchTodos(query) {
  const results = [];
  for (var i = 0; i < todos.length; i++) {
    if (eval("todos[i].title.includes('" + query + "')")) {
      results.push(todos[i]);
    }
  }
  return results;
}
module.exports = { todos, addTodo, completeTodo };