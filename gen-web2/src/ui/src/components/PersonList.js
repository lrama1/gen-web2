import React from 'react';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {Button} from "primereact/button";

function PersonList({history, fetchPerson, fetchAllPersons, persons, first, totalRecords,
    onPersonsChangePage, sortSettings, onSort}){

    /*function pageAction({first,rows, page}){
        console.log(first)
        fetchAllPersons('persons?per_page=' + rows + '&page=' + (page+1), first )
    }*/
    
    function buttonClicked(event){
        fetchPerson('person/' + event.target.value)
        //tell route to display the Edit screen
        history.push({pathname: '/person'});
    }

    function actionTemplate(rowData, column){
        return (
            <Button id={rowData.personId} value={rowData.personId} onClick={buttonClicked}>Edit</Button>
        )
    }
       
    /*
    render a table component
     */
    return (
        <div>
        <DataTable first={first} paginator={true} value={persons} lazy={true} rows={10} totalRecords={totalRecords}
            onPage={onPersonsChangePage} selectionMode="single"
            sortField={sortSettings.sortField} sortOrder={sortSettings.sortOrder} onSort={onSort}>
                <Column field="personId" header="PERSONID" sortable/>
                <Column field="firstName" header="FIRSTNAME" sortable/>
                <Column field="lastName" header="LASTNAME" sortable/>
                <Column body={actionTemplate}/>
        </DataTable>
        </div>
    )
};

export default PersonList;