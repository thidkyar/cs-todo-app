import { render, screen } from "@testing-library/react";
import ToDoList from "./ToDoList";
import { shallow, mount } from 'enzyme'
import ToDoItem from "../ToDoItem/ToDoItem";

describe("ToDoList Component Testing", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<ToDoList />);
    });

    it("should render the ToDoItem component", () => {
      expect(wrapper.containsMatchingElement(<ToDoItem />));
    });
});
