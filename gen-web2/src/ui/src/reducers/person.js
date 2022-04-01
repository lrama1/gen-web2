
import {PERSON_FETCH_SUCCESS , PERSON_EDIT, PERSON_SAVE_SUCCESS, PERSON_SAVE_ERROR,
    PERSONS_FETCH_SUCCESS, PERSONS_CHANGE_PAGE, PERSONS_SORT} from '../actions/person'

const initialPersons = {
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

export const persons = (state = initialPersons, action) => {
    if(action.type === 'PERSONS_FETCH_SUCCESS'){
        return {
            ...state,
            records: action.persons,
            totalRecords: action.totalRecords
        }
    }else if(action.type === PERSONS_CHANGE_PAGE){
        return{
            ...state,
            rowsPerPage: action.rowsPerPage,
            pageNumber: action.pageNumber,
            first: action.first
        }
    }else if(action.type === PERSONS_SORT){
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

const initialPerson = {
        personId: ''    
            ,firstName: ''    
            ,lastName: ''    
    }

export const person = (state = initialPerson, action) => {
    if (action.type === PERSON_FETCH_SUCCESS){
        return action.person
        
    }else if(action.type === PERSON_EDIT){
        return {
        	...state,
        	[action.name]: action.value
        	}
    }else if(action.type === PERSON_SAVE_SUCCESS){
        return action.person;
    }else if(action.type === PERSON_SAVE_ERROR){
        alert(action.error)
        return state;
    }
    return state;
}
