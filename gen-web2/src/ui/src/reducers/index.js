import {combineReducers} from 'redux'
import { persons, person } from './person';
import { itemTypes, itemType } from './itemtype';

/*
By combining reducers, you now have to use the namespace of the reducer
when mapping State-to-Props in your components
 */
export default combineReducers({
    person,
    persons,
    itemType,
    itemTypes
});

 