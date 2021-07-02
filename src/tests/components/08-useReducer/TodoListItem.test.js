import { shallow } from "enzyme";
import { TodoListItem } from "../../../components/08-useReducer/TodoListItem";
import { demoTodos } from "../../fixtures/demoTodos";

describe("Pruebas en <TodoLissItem />", () => {
  const handleDelete = jest.fn();
  const handleToogle = jest.fn();

  const wrapper = shallow(
    <TodoListItem
      todo={demoTodos[0]}
      i={demoTodos[0].id}
      handleDelete={handleDelete}
      handleToogle={handleToogle}
    />
  );

  test("Debe de mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe de llamar la funcion handleDelete", () => {
    wrapper.find("button").simulate("click");

    expect(handleDelete).toHaveBeenCalledWith(1);
  });

  test("Debe de llamar la funcion handleToogle", () => {
    wrapper.find("p").simulate("click");

    expect(handleToogle).toHaveBeenCalledWith(demoTodos[0].id);
  });

  test("debe de mostrar el texto correctamente", () => {
    const p = wrapper.find("p");
    expect(p.text().trim()).toBe(
      `${demoTodos[0].id + 1}. ${demoTodos[0].desc}`
    );
  });

  test("Debe de tener la clase complete si TODO.done=true", () => {
    const todo = demoTodos[0];
    todo.done = true;

    const wrapper = shallow(<TodoListItem todo={todo} />);
    expect(wrapper.find("p").hasClass("complete")).toBe(true);
  });
});
