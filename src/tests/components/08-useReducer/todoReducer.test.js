import { todoReducer } from "../../../components/08-useReducer/todoReducer";
import { demoTodos } from "../../fixtures/demoTodos";

describe("Pruebas en todoReducer", () => {
  test("Debe de retornar el estado por defecto", () => {
    const state = todoReducer(demoTodos, {});
    expect(state).toEqual(demoTodos);
  });

  test("Debe de agregar un TODO", () => {
    const newTodo = {
      id: demoTodos.length + 1,
      desc: "Aprender Express",
      done: false,
    };

    const action = {
      type: "add",
      payload: newTodo,
    };

    const state = todoReducer(demoTodos, action);
    expect(state.length).toBe(3);
    expect(state).toEqual([...demoTodos, newTodo]);
  });

  test("Debe de borrar un TODO", () => {
    const action = {
      type: "delete",
      payload: 1,
    };

    const state = todoReducer(demoTodos, action);
    expect(state.length).toBe(1);
    expect(state).toEqual([demoTodos[1]]);
  });

  test("Debe de hacer el TOOGLE del TODO", () => {
    const action = {
      type: "toogle",
      payload: 1,
    };

    const state = todoReducer(demoTodos, action);
    expect(state[0].done).toBe(true);
    expect(state[1]).toEqual(demoTodos[1]);
  });
});
