export const Todo = {
    userId: Number,
    id: Number,
    title: String,
    completed: Boolean,
};

let todos = [];

export const getTodo = () => todos;

export const addTodo = (todo) => {
    todos.push(todo)
}

export const deleteTodos = (id) => {
    todos = todos.filter((todo) =>todo.id !== id);
}