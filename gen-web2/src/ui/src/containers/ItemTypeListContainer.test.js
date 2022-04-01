
import React from 'react';
jest.mock('../actions/itemtype')
import {fetchItemType, ITEMTYPES_CHANGE_PAGE, itemTypesChangePage} from '../actions/itemtype';
import {mapStateToProps, mapDispatchToProps} from "./ItemTypeListContainer";

describe('ItemTypeListContainer', () => {
    const mockDispatch = jest.fn();
    
    afterEach(() => {
        mockDispatch.mockClear();
    });
    
    it('returns the expected state', ()=> {
        const sampleState = {
            itemTypes: {
                records: [],
                totalRecords: 0,
                first: 1
            }
        }
        const result = mapStateToProps(sampleState);
        expect(result).toMatchSnapshot();
    })
    
    it('dispatches fetchItemType', () => {
        fetchItemType.mockImplementation(()=> {
            return {param: 'SomeValue'}
        });
        
        mapDispatchToProps(mockDispatch).fetchItemType('mockurl', 1)
        expect(mockDispatch).toBeCalledWith({param:'SomeValue'})
    })
    
    it('invokes changePage action', ()=> {
        itemTypesChangePage.mockImplementation(() => {
            return{
                type: ITEMTYPES_CHANGE_PAGE,
                first: 0,
                rowsPerPage: 10,
                pageNumber: 1
            }
        })

        mapDispatchToProps(mockDispatch).onItemTypesChangePage({first:0, rows: 10, page:1})
        expect(mockDispatch).toBeCalledWith({type: ITEMTYPES_CHANGE_PAGE,  first: 0, pageNumber: 1, rowsPerPage: 10})
    })
});