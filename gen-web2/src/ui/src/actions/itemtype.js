/*
Refactor opportunities
1.  create separate files for each logical group of action creators
2.  combine the separate action creator files here an export them
 */
import {getRequest, putRequest} from "../utils/authority";

export const ITEMTYPE_FETCH_SUCCESS = 'ITEMTYPE_FETCH_SUCCESS';
export function itemTypeFetchSuccess(itemType){
    console.log('DISPATCHING SUCCESS', itemType );
    return {
        type: ITEMTYPE_FETCH_SUCCESS,
        itemType: itemType
    }
}

export const ITEMTYPE_FETCH_ERROR = 'ITEMTYPE_FETCH_ERROR';
export function itemTypeFetchError(error){
    return {
        type: ITEMTYPE_FETCH_ERROR,
        error: error
    }
}

export function fetchItemType(url){
    console.log('Fetch of single itemType Invoked');
    return async dispatch => {
        try{
            const data = await getRequest(url);
            dispatch(itemTypeFetchSuccess(data))
        }catch (e) {
            dispatch(itemTypeFetchError(true))
        }   
    }
}

export const ITEMTYPE_EDIT = 'ITEMTYPE_EDIT';
export function editItemType(name, value){    
    return {
        type: ITEMTYPE_EDIT,
        name,
        value
    }
}

export const ITEMTYPE_SAVE_SUCCESS = 'ITEMTYPE_SAVE_SUCCESS';
export function saveItemTypeSuccess(itemType){
    return {
        type: ITEMTYPE_SAVE_SUCCESS,
        itemType: itemType
    }
}

export const ITEMTYPE_SAVE_ERROR = 'ITEMTYPE_SAVE_ERROR';
export function saveItemTypeError(error){
    return {
        type: ITEMTYPE_SAVE_ERROR,
        error
    }
}

export function saveItemType(url, itemType){
    return async dispatch => {
        try {
            const data = await putRequest(url, itemType)
            dispatch(saveItemTypeSuccess(data))
        }catch (e){
            alert(JSON.stringify(e))
        }
    }
}

/*---------------------------------------------------------*/

export const ITEMTYPES_FETCH_SUCCESS = 'ITEMTYPES_FETCH_SUCCESS';
export function itemTypesFetchSuccess(itemTypes, totalRecords, lastPage){
    console.log('DISPATCHING SUCCESS', itemTypes );
    return {
        type: ITEMTYPES_FETCH_SUCCESS,
        itemTypes: itemTypes,
        totalRecords,
        lastPage
    }
}

export const ITEMTYPES_FETCH_ERROR = 'ITEMTYPES_FETCH_ERROR';
export function itemTypesFetchError(error){
    return {
        type: ITEMTYPES_FETCH_ERROR,
        error: error
    }
}

const ITEMTYPES_URI = 'itemtypes'
export function fetchAllItemTypes(){
    console.log('Fetch Invoked');
    return async (dispatch, getState) => {
        const {first, rowsPerPage, pageNumber, sortSettings} = getState().itemTypes
        try {
            const data = await getRequest(ITEMTYPES_URI + '?page=' + (pageNumber + 1) + '&per_page=' + rowsPerPage +
                    '&sort_by=' + sortSettings.sortField + '&order=' + sortSettings.sortOrder);
            dispatch(itemTypesFetchSuccess(data.rows, data.totalRecords, data.lastPage))
        }catch (e) {
            dispatch(itemTypesFetchError(e))
        }
    }
}

export const ITEMTYPES_CHANGE_PAGE = 'ITEMTYPES_CHANGE_PAGE'
	export function itemTypesChangePage(first, rowsPerPage, pageNumber){
	  return {
	      type: ITEMTYPES_CHANGE_PAGE,
	      first,
	      rowsPerPage,
	      pageNumber
	
	  }
	}
    
export const ITEMTYPES_SORT = 'ITEMTYPES_SORT'
export function itemTypesSort(sortField, sortOrder){
    return{
        type: ITEMTYPES_SORT,
        sortField,
        sortOrder
    }
}    