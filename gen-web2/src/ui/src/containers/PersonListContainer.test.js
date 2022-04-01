
import React from 'react';
jest.mock('../actions/person')
import {fetchPerson, PERSONS_CHANGE_PAGE, personsChangePage} from '../actions/person';
import {mapStateToProps, mapDispatchToProps} from "./PersonListContainer";

describe('PersonListContainer', () => {
    const mockDispatch = jest.fn();
    
    afterEach(() => {
        mockDispatch.mockClear();
    });
    
    it('returns the expected state', ()=> {
        const sampleState = {
            persons: {
                records: [],
                totalRecords: 0,
                first: 1
            }
        }
        const result = mapStateToProps(sampleState);
        expect(result).toMatchSnapshot();
    })
    
    it('dispatches fetchPerson', () => {
        fetchPerson.mockImplementation(()=> {
            return {param: 'SomeValue'}
        });
        
        mapDispatchToProps(mockDispatch).fetchPerson('mockurl', 1)
        expect(mockDispatch).toBeCalledWith({param:'SomeValue'})
    })
    
    it('invokes changePage action', ()=> {
        personsChangePage.mockImplementation(() => {
            return{
                type: PERSONS_CHANGE_PAGE,
                first: 0,
                rowsPerPage: 10,
                pageNumber: 1
            }
        })

        mapDispatchToProps(mockDispatch).onPersonsChangePage({first:0, rows: 10, page:1})
        expect(mockDispatch).toBeCalledWith({type: PERSONS_CHANGE_PAGE,  first: 0, pageNumber: 1, rowsPerPage: 10})
    })
});