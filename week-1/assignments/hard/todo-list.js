/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  toDos; // this is a list of all to-dos
  constructor() {
    this.toDos = [];
  }

  add(toDo) {
    this.toDos.push(toDo);
  }

  remove(indexOfTodo) {
    this.toDos.splice(indexOfTodo, 1);
    console.log(this.toDos);
  }

  update(index, updatedTodo) {
    if (index >= 0 && index < this.toDos.length) {
      this.toDos[index] = updatedTodo;
      return this.toDos;
    } else {
      return null;
    }
  }

  getAll() {
    return this.toDos;
  }

  get(indexOfTodo) {
    // index need to be in the range of the list
    if (indexOfTodo >= 0 && indexOfTodo < this.toDos.length) {
      return this.toDos[indexOfTodo];
    } else {
      //  index is out of range for this array. Hence, returning null (as expected by tests
      return null;
    }
  }

  clear() {
    this.toDos.splice(0, this.toDos.length);
  }
}

module.exports = Todo;
