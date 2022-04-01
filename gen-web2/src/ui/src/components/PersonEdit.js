//DomainDetail-template.js
import React from 'react';
import {InputText} from "primereact/inputtext";
import {Button} from "primereact/button";

function PersonEdit({selectedPerson, onEditPerson, onSavePerson}){

    function buttonEventHandler(event){
        onSavePerson('person/' + selectedPerson.personId,
        		selectedPerson);
        event.preventDefault();
    }

    return(
      <div className="p-grid">
          <form>
                        <div className="p-col-4">
		      <label htmlFor="personId">personId</label>
		      <InputText id="personId" name="personId" value={selectedPerson.personId}
		          onChange={onEditPerson}/>
		    </div>
		                <div className="p-col-4">
		      <label htmlFor="firstName">firstName</label>
		      <InputText id="firstName" name="firstName" value={selectedPerson.firstName}
		          onChange={onEditPerson}/>
		    </div>
		                <div className="p-col-4">
		      <label htmlFor="lastName">lastName</label>
		      <InputText id="lastName" name="lastName" value={selectedPerson.lastName}
		          onChange={onEditPerson}/>
		    </div>
		    		    
            <Button id="saveButton" onClick={buttonEventHandler}>Save</Button>
          </form>
      </div>
    );
}

export default PersonEdit;