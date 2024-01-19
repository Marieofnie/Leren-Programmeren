// TODOLIST
function TodoList(name) {
  this.name = name;
  this.todos = [];
}
TodoList.prototype.setName = function (str) {
  this.name = str;
};
TodoList.prototype.add = function (str) {
  this.todos.push(new TodoItem(str));
};
TodoList.prototype.delete = function (id) {
  this.todos.splice(
    this.todos.findIndex((todo) => todo.id === id),
    1
  );
};
TodoList.prototype.deleteByName = function (task) {
  this.todos.splice(
    this.todos.findIndex((todo) => todo.task === task),
    1
  );
};
TodoList.prototype.printList = function () {
  return `<ul>${this.todos
    .map(({ task }) => `<li>${task}</li>`)
    .join("")}</ul>`;
};

// TODOITEM
function TodoItem(task) {
  this.id = Math.random().toString(36).substring(2);
  this.task = task;
  this.isDone = false;
}
TodoItem.prototype.setTask = function () {};
TodoItem.prototype.toggle = function () {};

const list1 = new TodoList("festival");

list1.setName("camping");

const list2 = new TodoList("school");

list1.add("tent");
list1.add("schoenen");
list1.add("bbq");

list2.add("balpen");
list2.add("js taak");
list2.add("php herhalen");

console.log(list2.printList());
