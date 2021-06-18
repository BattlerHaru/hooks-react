const initalState = [
  {
    id: 1,
    todo: "comprar pan",
    done: false,
  },
];

// Esto podria ser un reducer por que se regresa un state
const todoReducer = (state = initalState, action) => {
  if (action?.type === "agregar") {
    // No se deben agregar mediante el push
    // return state.push
    return [...state, action.payload];
  }
  return state;
};

let todos = todoReducer();

const newTodo = [
  {
    id: 2,
    todo: "comprar leche",
    done: false,
  },
];

const agregarTodoAction = {
  type: "agregar",
  payload: newTodo,
};

todos = todoReducer(todos, agregarTodoAction);

console.log(todos);
