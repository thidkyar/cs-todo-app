import { render, screen } from "@testing-library/react";
import App from "./App";
import { shallow, mount } from 'enzyme'
import TabView from './components/TabView/TabView'
import AddToDoButton from './components/AddToDoButton/AddToDoButton'

describe("App Component Testing", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<App />);
    });

    it("should render the TabView component", () => {
      expect(wrapper.containsMatchingElement(<TabView />)).toEqual(true);
    });

    it("should render the AddToDoButton component", () => {
      expect(wrapper.containsMatchingElement(<AddToDoButton />)).toEqual(true);
    });
});
