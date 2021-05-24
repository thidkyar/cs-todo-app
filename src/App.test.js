import { render, screen } from "@testing-library/react";
import App from "./App";
import { shallow } from 'enzyme'
describe("App Component Testing", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<App />);
    });
    test("should render the component", () => {});
});
