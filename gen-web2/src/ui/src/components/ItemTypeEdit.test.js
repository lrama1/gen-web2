import React from 'react';
import ItemTypeEdit from './ItemTypeEdit';
import {render, fireEvent} from '@testing-library/react'

describe("ItemTypeEdit", ()=> {
    const mockChangeHandler = jest.fn();
    const mockSaveHandler = jest.fn();

    const mockSelectedItemType = {
                        itemTypeId: 'SampleitemTypeId'
                                ,itemTypeCode: 'SampleitemTypeCode'    
                                ,itemTypeName: 'SampleitemTypeName'    
                                ,itemTypeDesc: 'SampleitemTypeDesc'    
                    }

    const componentToTest = <ItemTypeEdit selectedItemType={mockSelectedItemType} onEditItemType={mockChangeHandler}
                        onSaveItemType={mockSaveHandler}/>    
    
    it('Renders fields correctly', () =>{        
        expect(componentToTest).toMatchSnapshot();
    });
        
    it('dispatches input changes', ()=> {
        const {container} = render(componentToTest)
        fireEvent.change(container.querySelector("input[name='itemTypeId'"), {target: {value: 'TEST'}})
        expect(mockChangeHandler).toBeCalledTimes(1);
    })
    
    it('calls save function on click of Save button', () => {
        const {container} = render(componentToTest)
        fireEvent.click(container.querySelector("button[id='saveButton']"))
        expect(mockSaveHandler).toBeCalledTimes(1);
        expect(mockSaveHandler).toHaveBeenCalledWith('itemtype/SampleitemTypeId', mockSelectedItemType)
    })

})