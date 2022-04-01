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
 * ItemAttrTypeDatatype entity. @author MyEclipse Persistence Tools
 */
@Entity
@Table(name = "ITEM_ATTR_TYPE_DATATYPE")

public class ItemAttrTypeDatatype implements java.io.Serializable {

	// Fields

	private Byte itemAttrTypeDatatypeId;
	private String itemAttrTypeDatatypeName;
	private String itemAttrTypeDatatypeDesc;
	private String regexPattern;
	private Set<ItemAttributeType> itemAttributeTypes = new HashSet<ItemAttributeType>(0);

	// Constructors

	/** default constructor */
	public ItemAttrTypeDatatype() {
	}

	/** minimal constructor */
	public ItemAttrTypeDatatype(Byte itemAttrTypeDatatypeId, String itemAttrTypeDatatypeName) {
		this.itemAttrTypeDatatypeId = itemAttrTypeDatatypeId;
		this.itemAttrTypeDatatypeName = itemAttrTypeDatatypeName;
	}

	/** full constructor */
	public ItemAttrTypeDatatype(Byte itemAttrTypeDatatypeId, String itemAttrTypeDatatypeName,
			String itemAttrTypeDatatypeDesc, String regexPattern, Set<ItemAttributeType> itemAttributeTypes) {
		this.itemAttrTypeDatatypeId = itemAttrTypeDatatypeId;
		this.itemAttrTypeDatatypeName = itemAttrTypeDatatypeName;
		this.itemAttrTypeDatatypeDesc = itemAttrTypeDatatypeDesc;
		this.regexPattern = regexPattern;
		this.itemAttributeTypes = itemAttributeTypes;
	}

	// Property accessors
	@Id

	@Column(name = "ITEM_ATTR_TYPE_DATATYPE_ID", unique = true, nullable = false, precision = 2, scale = 0)

	public Byte getItemAttrTypeDatatypeId() {
		return this.itemAttrTypeDatatypeId;
	}

	public void setItemAttrTypeDatatypeId(Byte itemAttrTypeDatatypeId) {
		this.itemAttrTypeDatatypeId = itemAttrTypeDatatypeId;
	}

	@Column(name = "ITEM_ATTR_TYPE_DATATYPE_NAME", nullable = false, length = 32)

	public String getItemAttrTypeDatatypeName() {
		return this.itemAttrTypeDatatypeName;
	}

	public void setItemAttrTypeDatatypeName(String itemAttrTypeDatatypeName) {
		this.itemAttrTypeDatatypeName = itemAttrTypeDatatypeName;
	}

	@Column(name = "ITEM_ATTR_TYPE_DATATYPE_DESC", length = 64)

	public String getItemAttrTypeDatatypeDesc() {
		return this.itemAttrTypeDatatypeDesc;
	}

	public void setItemAttrTypeDatatypeDesc(String itemAttrTypeDatatypeDesc) {
		this.itemAttrTypeDatatypeDesc = itemAttrTypeDatatypeDesc;
	}

	@Column(name = "REGEX_PATTERN", length = 256)

	public String getRegexPattern() {
		return this.regexPattern;
	}

	public void setRegexPattern(String regexPattern) {
		this.regexPattern = regexPattern;
	}

	@OneToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY, mappedBy = "itemAttrTypeDatatype")

	public Set<ItemAttributeType> getItemAttributeTypes() {
		return this.itemAttributeTypes;
	}

	public void setItemAttributeTypes(Set<ItemAttributeType> itemAttributeTypes) {
		this.itemAttributeTypes = itemAttributeTypes;
	}

}