//DomainDetail-template.js
import React from 'react';
import {InputText} from "primereact/inputtext";
import {Button} from "primereact/button";

function ItemTypeEdit({selectedItemType, onEditItemType, onSaveItemType}){

    function buttonEventHandler(event){
        onSaveItemType('itemtype/' + selectedItemType.itemTypeId,
        		selectedItemType);
        event.preventDefault();
    }

    return(
      <div className="p-grid">
          <form>
                        <div className="p-col-4">
		      <label htmlFor="itemTypeId">itemTypeId</label>
		      <InputText id="itemTypeId" name="itemTypeId" value={selectedItemType.itemTypeId}
		          onChange={onEditItemType}/>
		    </div>
		                <div className="p-col-4">
		      <label htmlFor="itemTypeCode">itemTypeCode</label>
		      <InputText id="itemTypeCode" name="itemTypeCode" value={selectedItemType.itemTypeCode}
		          onChange={onEditItemType}/>
		    </div>
		                <div className="p-col-4">
		      <label htmlFor="itemTypeName">itemTypeName</label>
		      <InputText id="itemTypeName" name="itemTypeName" value={selectedItemType.itemTypeName}
		          onChange={onEditItemType}/>
		    </div>
		                <div className="p-col-4">
		      <label htmlFor="itemTypeDesc">itemTypeDesc</label>
		      <InputText id="itemTypeDesc" name="itemTypeDesc" value={selectedItemType.itemTypeDesc}
		          onChange={onEditItemType}/>
		    </div>
		    		    
            <Button id="saveButton" onClick={buttonEventHandler}>Save</Button>
          </form>
      </div>
    );
}

export default ItemTypeEdit;