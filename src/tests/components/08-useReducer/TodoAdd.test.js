import { shallow } from "enzyme";
import { TodoAdd } from "../../../components/08-useReducer/TodoAdd";

describe("Pruebas en <TodoAdd />", () => {
  const handleAddTodo = jest.fn();

  const wrapper = shallow(<TodoAdd handleAddTodo={handleAddTodo} />);

  test("debe de mostrase correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("NO debe de llamar addTodo", () => {
    const formSubmit = wrapper.find("form").prop("onSubmit");

    formSubmit({ preventDefault() {} });

    expect(handleAddTodo).toHaveBeenCalledTimes(0);
  });

  test("Debe de llamar handleAddTodo", () => {
    const value = "Aprender React";

    wrapper.find("input").simulate("change", {
      target: {
        value,
        name: "description",
      },
    });

    const formSubmit = wrapper.find("form").prop("onSubmit");

    formSubmit({ preventDefault() {} });

    expect(handleAddTodo).toHaveBeenCalledTimes(1);
    expect(handleAddTodo).toHaveBeenCalledWith(expect.any(Object));
    expect(handleAddTodo).toHaveBeenCalledWith({
      id: expect.any(Number),
      desc: value,
      done: false,
    });
    expect(wrapper.find("input").prop("value")).toBe("");
  });
});
