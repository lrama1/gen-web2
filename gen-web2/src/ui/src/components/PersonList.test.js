
import React from 'react';
import PersonList from "../components/PersonList";
import {render, screen, fireEvent} from '@testing-library/react'

describe("PersonList", () => {
    const props = {
        history: []
    }

    const mockFetchPerson = jest.fn();
    const mockFetchAllPersons = jest.fn();
    const mockOnChangePage = jest.fn();
    const mockOnSort = jest.fn();
    const mockPersons =
        [
                                                                                                                                                                                           
          {personId: 'Sample-personId0',firstName: 'Sample-firstName0',lastName: 'Sample-lastName0'}
                                ,
                                                                                                                                                                                   
          {personId: 'Sample-personId1',firstName: 'Sample-firstName1',lastName: 'Sample-lastName1'}
                                ,
                                                                                                                                                                                   
          {personId: 'Sample-personId2',firstName: 'Sample-firstName2',lastName: 'Sample-lastName2'}
                                ,
                                                                                                                                                                                   
          {personId: 'Sample-personId3',firstName: 'Sample-firstName3',lastName: 'Sample-lastName3'}
                                ,
                                                                                                                                                                                   
          {personId: 'Sample-personId4',firstName: 'Sample-firstName4',lastName: 'Sample-lastName4'}
                                ,
                                                                                                                                                                                   
          {personId: 'Sample-personId5',firstName: 'Sample-firstName5',lastName: 'Sample-lastName5'}
                                ,
                                                                                                                                                                                   
          {personId: 'Sample-personId6',firstName: 'Sample-firstName6',lastName: 'Sample-lastName6'}
                                ,
                                                                                                                                                                                   
          {personId: 'Sample-personId7',firstName: 'Sample-firstName7',lastName: 'Sample-lastName7'}
                                ,
                                                                                                                                                                                   
          {personId: 'Sample-personId8',firstName: 'Sample-firstName8',lastName: 'Sample-lastName8'}
                                ,
                                                                                                                                                                                   
          {personId: 'Sample-personId9',firstName: 'Sample-firstName9',lastName: 'Sample-lastName9'}
                                ,
                                                                                                                                                                                   
          {personId: 'Sample-personId10',firstName: 'Sample-firstName10',lastName: 'Sample-lastName10'}
                                ,
                                                                                                                                                                                   
          {personId: 'Sample-personId11',firstName: 'Sample-firstName11',lastName: 'Sample-lastName11'}
                                ,
                                                                                                                                                                                   
          {personId: 'Sample-personId12',firstName: 'Sample-firstName12',lastName: 'Sample-lastName12'}
                                ,
                                                                                                                                                                                   
          {personId: 'Sample-personId13',firstName: 'Sample-firstName13',lastName: 'Sample-lastName13'}
                ]

        const componentToTest = <PersonList history={props.history} fetchPerson={mockFetchPerson}
            fetchAllPersons={mockFetchAllPersons} persons={mockPersons} first={0} totalRecords={11} 
            onPersonsChangePage={mockOnChangePage} onSort={mockOnSort} sortSettings={{}}/>
        
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
            fireEvent.click(container.querySelector("button[id='Sample-personId0']"));
            expect(mockFetchPerson).toBeCalledTimes(1);
        })
        
        it('invokes next page', () => {
        	const {container} = render(componentToTest);
            const selector = "button.p-paginator-next.p-paginator-element.p-link";
        	fireEvent.click(container.querySelector(selector));
            expect(mockOnChangePage).toBeCalledTimes(1);
        })
})