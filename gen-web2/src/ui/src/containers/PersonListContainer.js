
import {connect} from 'react-redux';
import PersonList from '../components/PersonList'
import {fetchPerson, fetchAllPersons, personsChangePage, personsSort} from '../actions/person';


export const mapStateToProps = (state) => {
    console.log(state);
    return {
        persons: state.persons.records,
        totalRecords: state.persons.totalRecords,
        first: state.persons.first,
        sortSettings: state.persons.sortSettings
    };
};

export const mapDispatchToProps = (dispatch) => {
    return{
        fetchPerson(url){
            dispatch(fetchPerson(url))
        },
        onPersonsChangePage({first, rows, page}){
            console.log('change page')
            dispatch(personsChangePage(first, rows, page))
            dispatch(fetchAllPersons())
        },
        onSort({sortField, sortOrder}){
            dispatch(personsSort(sortField, sortOrder))
            dispatch(fetchAllPersons())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PersonList);