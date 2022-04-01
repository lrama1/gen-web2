package com.sample.web.domain;

public class ItemType {

	private String itemTypeId;

	private String itemTypeCode;

	private String itemTypeName;

	private String itemTypeDesc;

	public String getItemTypeId() {
		return itemTypeId;
	}

	public String getItemTypeCode() {
		return itemTypeCode;
	}

	public String getItemTypeName() {
		return itemTypeName;
	}

	public String getItemTypeDesc() {
		return itemTypeDesc;
	}

	public void setItemTypeId(String itemTypeId) {
		this.itemTypeId = itemTypeId;
	}

	public void setItemTypeCode(String itemTypeCode) {
		this.itemTypeCode = itemTypeCode;
	}

	public void setItemTypeName(String itemTypeName) {
		this.itemTypeName = itemTypeName;
	}

	public void setItemTypeDesc(String itemTypeDesc) {
		this.itemTypeDesc = itemTypeDesc;
	}

	public String toString() {
		return "itemTypeId = " + itemTypeId + ", itemTypeCode = " + itemTypeCode + ", itemTypeName = " + itemTypeName
				+ ", itemTypeDesc = " + itemTypeDesc;
	}
}
