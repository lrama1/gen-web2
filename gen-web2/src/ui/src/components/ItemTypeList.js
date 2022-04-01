import React from 'react';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {Button} from "primereact/button";

function ItemTypeList({history, fetchItemType, fetchAllItemTypes, itemTypes, first, totalRecords,
    onItemTypesChangePage, sortSettings, onSort}){

    /*function pageAction({first,rows, page}){
        console.log(first)
        fetchAllItemTypes('itemtypes?per_page=' + rows + '&page=' + (page+1), first )
    }*/
    
    function buttonClicked(event){
        fetchItemType('itemtype/' + event.target.value)
        //tell route to display the Edit screen
        history.push({pathname: '/itemType'});
    }

    function actionTemplate(rowData, column){
        return (
            <Button id={rowData.itemTypeId} value={rowData.itemTypeId} onClick={buttonClicked}>Edit</Button>
        )
    }
       
    /*
    render a table component
     */
    return (
        <div>
        <DataTable first={first} paginator={true} value={itemTypes} lazy={true} rows={10} totalRecords={totalRecords}
            onPage={onItemTypesChangePage} selectionMode="single"
            sortField={sortSettings.sortField} sortOrder={sortSettings.sortOrder} onSort={onSort}>
                <Column field="itemTypeId" header="ITEMTYPEID" sortable/>
                <Column field="itemTypeCode" header="ITEMTYPECODE" sortable/>
                <Column field="itemTypeName" header="ITEMTYPENAME" sortable/>
                <Column field="itemTypeDesc" header="ITEMTYPEDESC" sortable/>
                <Column body={actionTemplate}/>
        </DataTable>
        </div>
    )
};

export default ItemTypeList;