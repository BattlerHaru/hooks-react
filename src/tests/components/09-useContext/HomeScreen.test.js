import { mount, shallow } from "enzyme";
import { HomeScreen } from "../../../components/09-useContext/HomeScreen";
import { UserContext } from "../../../components/09-useContext/UserContext";

describe("Prubas en <HomeScreen/>", () => {
  const user = {
    name: "Rebeca",
    email: "test@test.com",
  };

  const wrapper = mount(
    <UserContext.Provider value={{ user }}>
      <HomeScreen />
    </UserContext.Provider>
  );

  test("debe de mostrase correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
