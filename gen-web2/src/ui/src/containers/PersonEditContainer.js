import {connect} from 'react-redux';
import {editPerson, savePerson} from '../actions/person';
import PersonEdit from '../components/PersonEdit';

export const mapStateToProps = (state) => {
    console.log(state);
    return {
        selectedPerson: state.person
    };
};

export const mapDispatchToProps = (dispatch) => {
    return {
        onEditPerson(event){
            const {name, value} = event.target;
            dispatch(editPerson(name, value))
        },
        onSavePerson(url, person){
            dispatch(savePerson(url, person))
        }
    }
}
export default  connect(mapStateToProps, mapDispatchToProps)(PersonEdit);