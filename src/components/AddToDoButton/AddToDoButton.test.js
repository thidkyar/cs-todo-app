import { render, screen } from "@testing-library/react";
import AddToDoButton from "./AddToDoButton";
import { shallow, mount } from 'enzyme'
import ToDoForm from "../Form/Form";

describe("AddToDoButton Component Testing", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = mount(<AddToDoButton/>);
    });

    it("should open form ToDoForm component on click", () => {
        expect(wrapper.find('.modal-dialog')).toBe(false)
        wrapper.find('.add-todo').simulate('click');
        expect(wrapper.find('.modal-dialog')).toBe(true)
    });
});
