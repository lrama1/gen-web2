
import {connect} from 'react-redux';
import ItemTypeList from '../components/ItemTypeList'
import {fetchItemType, fetchAllItemTypes, itemTypesChangePage, itemTypesSort} from '../actions/itemtype';


export const mapStateToProps = (state) => {
    console.log(state);
    return {
        itemTypes: state.itemTypes.records,
        totalRecords: state.itemTypes.totalRecords,
        first: state.itemTypes.first,
        sortSettings: state.itemTypes.sortSettings
    };
};

export const mapDispatchToProps = (dispatch) => {
    return{
        fetchItemType(url){
            dispatch(fetchItemType(url))
        },
        onItemTypesChangePage({first, rows, page}){
            console.log('change page')
            dispatch(itemTypesChangePage(first, rows, page))
            dispatch(fetchAllItemTypes())
        },
        onSort({sortField, sortOrder}){
            dispatch(itemTypesSort(sortField, sortOrder))
            dispatch(fetchAllItemTypes())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemTypeList);