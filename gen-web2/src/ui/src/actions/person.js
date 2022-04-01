/*
Refactor opportunities
1.  create separate files for each logical group of action creators
2.  combine the separate action creator files here an export them
 */
import {getRequest, putRequest} from "../utils/authority";

export const PERSON_FETCH_SUCCESS = 'PERSON_FETCH_SUCCESS';
export function personFetchSuccess(person){
    console.log('DISPATCHING SUCCESS', person );
    return {
        type: PERSON_FETCH_SUCCESS,
        person: person
    }
}

export const PERSON_FETCH_ERROR = 'PERSON_FETCH_ERROR';
export function personFetchError(error){
    return {
        type: PERSON_FETCH_ERROR,
        error: error
    }
}

export function fetchPerson(url){
    console.log('Fetch of single person Invoked');
    return async dispatch => {
        try{
            const data = await getRequest(url);
            dispatch(personFetchSuccess(data))
        }catch (e) {
            dispatch(personFetchError(true))
        }   
    }
}

export const PERSON_EDIT = 'PERSON_EDIT';
export function editPerson(name, value){    
    return {
        type: PERSON_EDIT,
        name,
        value
    }
}

export const PERSON_SAVE_SUCCESS = 'PERSON_SAVE_SUCCESS';
export function savePersonSuccess(person){
    return {
        type: PERSON_SAVE_SUCCESS,
        person: person
    }
}

export const PERSON_SAVE_ERROR = 'PERSON_SAVE_ERROR';
export function savePersonError(error){
    return {
        type: PERSON_SAVE_ERROR,
        error
    }
}

export function savePerson(url, person){
    return async dispatch => {
        try {
            const data = await putRequest(url, person)
            dispatch(savePersonSuccess(data))
        }catch (e){
            alert(JSON.stringify(e))
        }
    }
}

/*---------------------------------------------------------*/

export const PERSONS_FETCH_SUCCESS = 'PERSONS_FETCH_SUCCESS';
export function personsFetchSuccess(persons, totalRecords, lastPage){
    console.log('DISPATCHING SUCCESS', persons );
    return {
        type: PERSONS_FETCH_SUCCESS,
        persons: persons,
        totalRecords,
        lastPage
    }
}

export const PERSONS_FETCH_ERROR = 'PERSONS_FETCH_ERROR';
export function personsFetchError(error){
    return {
        type: PERSONS_FETCH_ERROR,
        error: error
    }
}

const PERSONS_URI = 'persons'
export function fetchAllPersons(){
    console.log('Fetch Invoked');
    return async (dispatch, getState) => {
        const {first, rowsPerPage, pageNumber, sortSettings} = getState().persons
        try {
            const data = await getRequest(PERSONS_URI + '?page=' + (pageNumber + 1) + '&per_page=' + rowsPerPage +
                    '&sort_by=' + sortSettings.sortField + '&order=' + sortSettings.sortOrder);
            dispatch(personsFetchSuccess(data.rows, data.totalRecords, data.lastPage))
        }catch (e) {
            dispatch(personsFetchError(e))
        }
    }
}

export const PERSONS_CHANGE_PAGE = 'PERSONS_CHANGE_PAGE'
	export function personsChangePage(first, rowsPerPage, pageNumber){
	  return {
	      type: PERSONS_CHANGE_PAGE,
	      first,
	      rowsPerPage,
	      pageNumber
	
	  }
	}
    
export const PERSONS_SORT = 'PERSONS_SORT'
export function personsSort(sortField, sortOrder){
    return{
        type: PERSONS_SORT,
        sortField,
        sortOrder
    }
}    