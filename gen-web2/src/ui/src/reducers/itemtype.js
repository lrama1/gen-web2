
import {ITEMTYPE_FETCH_SUCCESS , ITEMTYPE_EDIT, ITEMTYPE_SAVE_SUCCESS, ITEMTYPE_SAVE_ERROR,
    ITEMTYPES_FETCH_SUCCESS, ITEMTYPES_CHANGE_PAGE, ITEMTYPES_SORT} from '../actions/itemtype'

const initialItemTypes = {
     records: [],
     totalRecords: 0,
     first: 0,
     rowsPerPage: 10,
     pageNumber: 0,
     sortSettings: {
         sortField: '',
         sortOrder: ''
     }
} 

export const itemTypes = (state = initialItemTypes, action) => {
    if(action.type === 'ITEMTYPES_FETCH_SUCCESS'){
        return {
            ...state,
            records: action.itemTypes,
            totalRecords: action.totalRecords
        }
    }else if(action.type === ITEMTYPES_CHANGE_PAGE){
        return{
            ...state,
            rowsPerPage: action.rowsPerPage,
            pageNumber: action.pageNumber,
            first: action.first
        }
    }else if(action.type === ITEMTYPES_SORT){
        return{
            ...state,
            sortSettings: {
                sortField: action.sortField,
                sortOrder: action.sortOrder
            }
        }
    }
    return state;
}

const initialItemType = {
        itemTypeId: ''    
            ,itemTypeCode: ''    
            ,itemTypeName: ''    
            ,itemTypeDesc: ''    
    }

export const itemType = (state = initialItemType, action) => {
    if (action.type === ITEMTYPE_FETCH_SUCCESS){
        return action.itemType
        
    }else if(action.type === ITEMTYPE_EDIT){
        return {
        	...state,
        	[action.name]: action.value
        	}
    }else if(action.type === ITEMTYPE_SAVE_SUCCESS){
        return action.itemType;
    }else if(action.type === ITEMTYPE_SAVE_ERROR){
        alert(action.error)
        return state;
    }
    return state;
}
