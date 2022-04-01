
import React from 'react';
import ItemTypeList from "../components/ItemTypeList";
import {render, screen, fireEvent} from '@testing-library/react'

describe("ItemTypeList", () => {
    const props = {
        history: []
    }

    const mockFetchItemType = jest.fn();
    const mockFetchAllItemTypes = jest.fn();
    const mockOnChangePage = jest.fn();
    const mockOnSort = jest.fn();
    const mockItemTypes =
        [
                                                                                                                                                                                                                                          
          {itemTypeId: 'Sample-itemTypeId0',itemTypeCode: 'Sample-itemTypeCode0',itemTypeName: 'Sample-itemTypeName0',itemTypeDesc: 'Sample-itemTypeDesc0'}
                                ,
                                                                                                                                                                                                                                  
          {itemTypeId: 'Sample-itemTypeId1',itemTypeCode: 'Sample-itemTypeCode1',itemTypeName: 'Sample-itemTypeName1',itemTypeDesc: 'Sample-itemTypeDesc1'}
                                ,
                                                                                                                                                                                                                                  
          {itemTypeId: 'Sample-itemTypeId2',itemTypeCode: 'Sample-itemTypeCode2',itemTypeName: 'Sample-itemTypeName2',itemTypeDesc: 'Sample-itemTypeDesc2'}
                                ,
                                                                                                                                                                                                                                  
          {itemTypeId: 'Sample-itemTypeId3',itemTypeCode: 'Sample-itemTypeCode3',itemTypeName: 'Sample-itemTypeName3',itemTypeDesc: 'Sample-itemTypeDesc3'}
                                ,
                                                                                                                                                                                                                                  
          {itemTypeId: 'Sample-itemTypeId4',itemTypeCode: 'Sample-itemTypeCode4',itemTypeName: 'Sample-itemTypeName4',itemTypeDesc: 'Sample-itemTypeDesc4'}
                                ,
                                                                                                                                                                                                                                  
          {itemTypeId: 'Sample-itemTypeId5',itemTypeCode: 'Sample-itemTypeCode5',itemTypeName: 'Sample-itemTypeName5',itemTypeDesc: 'Sample-itemTypeDesc5'}
                                ,
                                                                                                                                                                                                                                  
          {itemTypeId: 'Sample-itemTypeId6',itemTypeCode: 'Sample-itemTypeCode6',itemTypeName: 'Sample-itemTypeName6',itemTypeDesc: 'Sample-itemTypeDesc6'}
                                ,
                                                                                                                                                                                                                                  
          {itemTypeId: 'Sample-itemTypeId7',itemTypeCode: 'Sample-itemTypeCode7',itemTypeName: 'Sample-itemTypeName7',itemTypeDesc: 'Sample-itemTypeDesc7'}
                                ,
                                                                                                                                                                                                                                  
          {itemTypeId: 'Sample-itemTypeId8',itemTypeCode: 'Sample-itemTypeCode8',itemTypeName: 'Sample-itemTypeName8',itemTypeDesc: 'Sample-itemTypeDesc8'}
                                ,
                                                                                                                                                                                                                                  
          {itemTypeId: 'Sample-itemTypeId9',itemTypeCode: 'Sample-itemTypeCode9',itemTypeName: 'Sample-itemTypeName9',itemTypeDesc: 'Sample-itemTypeDesc9'}
                                ,
                                                                                                                                                                                                                                  
          {itemTypeId: 'Sample-itemTypeId10',itemTypeCode: 'Sample-itemTypeCode10',itemTypeName: 'Sample-itemTypeName10',itemTypeDesc: 'Sample-itemTypeDesc10'}
                                ,
                                                                                                                                                                                                                                  
          {itemTypeId: 'Sample-itemTypeId11',itemTypeCode: 'Sample-itemTypeCode11',itemTypeName: 'Sample-itemTypeName11',itemTypeDesc: 'Sample-itemTypeDesc11'}
                                ,
                                                                                                                                                                                                                                  
          {itemTypeId: 'Sample-itemTypeId12',itemTypeCode: 'Sample-itemTypeCode12',itemTypeName: 'Sample-itemTypeName12',itemTypeDesc: 'Sample-itemTypeDesc12'}
                                ,
                                                                                                                                                                                                                                  
          {itemTypeId: 'Sample-itemTypeId13',itemTypeCode: 'Sample-itemTypeCode13',itemTypeName: 'Sample-itemTypeName13',itemTypeDesc: 'Sample-itemTypeDesc13'}
                ]

        const componentToTest = <ItemTypeList history={props.history} fetchItemType={mockFetchItemType}
            fetchAllItemTypes={mockFetchAllItemTypes} itemTypes={mockItemTypes} first={0} totalRecords={11} 
            onItemTypesChangePage={mockOnChangePage} onSort={mockOnSort} sortSettings={{}}/>
        
        it('renders correctly', () => {            
            expect(componentToTest).toMatchSnapshot();
        })
        
        it('displays the correct number of rows', () => {
        	const {container} = render(componentToTest);
            const numberOfRowsRendered = container.querySelectorAll('div.p-datatable-wrapper > table > tbody > tr').length;
            expect(numberOfRowsRendered).toBe(10);
        })

        it('invokes row action', () =>{
            const {container} = render(componentToTest);
            fireEvent.click(container.querySelector("button[id='Sample-itemTypeId0']"));
            expect(mockFetchItemType).toBeCalledTimes(1);
        })
        
        it('invokes next page', () => {
        	const {container} = render(componentToTest);
            const selector = "button.p-paginator-next.p-paginator-element.p-link";
        	fireEvent.click(container.querySelector(selector));
            expect(mockOnChangePage).toBeCalledTimes(1);
        })
})