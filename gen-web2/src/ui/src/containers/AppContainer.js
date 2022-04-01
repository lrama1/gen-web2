import {fetchAllPersons} from '../actions/person'

import {connect} from "react-redux";
import App from '../components/App'
import {fetchAllItemTypes} from '../actions/itemtype'; 


const mapStateToProps = (state) => {
    console.log(state);
    return {
        persons: state.personsReducer
    };
};
const mapDispatchToProps = (dispatch) => {
    return{
        fetchAllPersons: (url) => dispatch(fetchAllPersons(url)),
	    fetchAllItemTypes: (url) => dispatch(fetchAllItemTypes(url))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)