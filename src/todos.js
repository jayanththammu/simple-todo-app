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

module.exports = { todos, addTodo, completeTodo };