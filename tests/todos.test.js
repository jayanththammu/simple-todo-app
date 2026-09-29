const { addTodo, completeTodo } = require("../src/todos");

test("adds a todo", () => {
  expect(addTodo("buy milk").title).toBe("buy milk");
});

test("completes a todo", () => {
  const t = addTodo("write code");
  expect(completeTodo(t.id).done).toBe(true);
});