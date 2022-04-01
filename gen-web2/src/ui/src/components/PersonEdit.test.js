import React from 'react';
import PersonEdit from './PersonEdit';
import {render, fireEvent} from '@testing-library/react'

describe("PersonEdit", ()=> {
    const mockChangeHandler = jest.fn();
    const mockSaveHandler = jest.fn();

    const mockSelectedPerson = {
                        personId: 'SamplepersonId'
                                ,firstName: 'SamplefirstName'    
                                ,lastName: 'SamplelastName'    
                    }

    const componentToTest = <PersonEdit selectedPerson={mockSelectedPerson} onEditPerson={mockChangeHandler}
                        onSavePerson={mockSaveHandler}/>    
    
    it('Renders fields correctly', () =>{        
        expect(componentToTest).toMatchSnapshot();
    });
        
    it('dispatches input changes', ()=> {
        const {container} = render(componentToTest)
        fireEvent.change(container.querySelector("input[name='personId'"), {target: {value: 'TEST'}})
        expect(mockChangeHandler).toBeCalledTimes(1);
    })
    
    it('calls save function on click of Save button', () => {
        const {container} = render(componentToTest)
        fireEvent.click(container.querySelector("button[id='saveButton']"))
        expect(mockSaveHandler).toBeCalledTimes(1);
        expect(mockSaveHandler).toHaveBeenCalledWith('person/SamplepersonId', mockSelectedPerson)
    })

})