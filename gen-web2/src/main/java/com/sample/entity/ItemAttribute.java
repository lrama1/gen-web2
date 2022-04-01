package com.sample.entity;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
/**
 * ItemAttribute entity. @author MyEclipse Persistence Tools
 */
@Entity
@Table(name = "ITEM_ATTRIBUTE")

public class ItemAttribute implements java.io.Serializable {

	// Fields

	private String itemAttrId;
	private Item item;
	private String itemAttrValue;
	private String itemAttrTypeId;

	// Constructors

	/** default constructor */
	public ItemAttribute() {
	}

	/** minimal constructor */
	public ItemAttribute(String itemAttrId, Item item, String itemAttrTypeId) {
		this.itemAttrId = itemAttrId;
		this.item = item;
		this.itemAttrTypeId = itemAttrTypeId;
	}

	/** full constructor */
	public ItemAttribute(String itemAttrId, Item item, String itemAttrValue, String itemAttrTypeId) {
		this.itemAttrId = itemAttrId;
		this.item = item;
		this.itemAttrValue = itemAttrValue;
		this.itemAttrTypeId = itemAttrTypeId;
	}

	// Property accessors
	@Id

	@Column(name = "ITEM_ATTR_ID", unique = true, nullable = false, length = 32)

	public String getItemAttrId() {
		return this.itemAttrId;
	}

	public void setItemAttrId(String itemAttrId) {
		this.itemAttrId = itemAttrId;
	}

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "ITEM_ID", nullable = false)

	public Item getItem() {
		return this.item;
	}

	public void setItem(Item item) {
		this.item = item;
	}

	@Column(name = "ITEM_ATTR_VALUE", length = 256)

	public String getItemAttrValue() {
		return this.itemAttrValue;
	}

	public void setItemAttrValue(String itemAttrValue) {
		this.itemAttrValue = itemAttrValue;
	}

	@Column(name = "ITEM_ATTR_TYPE_ID", nullable = false, length = 32)

	public String getItemAttrTypeId() {
		return this.itemAttrTypeId;
	}

	public void setItemAttrTypeId(String itemAttrTypeId) {
		this.itemAttrTypeId = itemAttrTypeId;
	}

}