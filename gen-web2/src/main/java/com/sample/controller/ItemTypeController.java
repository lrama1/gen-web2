package com.sample.controller;

import java.security.Principal;

import javax.annotation.Resource;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.sample.common.ListWrapper;
//import the domain
import com.sample.entity.ItemType;
import com.sample.service.ItemTypeService;

@RestController
public class ItemTypeController extends BaseController {

	@Autowired
	ItemTypeService itemTypeService;

	@Resource(name = "messageSource")
	private MessageSource messageSource;

	//@PreAuthorize("@sampleUserDetailsService.isAuthorizedToAccessData(#id)")	
	@RequestMapping(value = "/itemtype/{id}", method = RequestMethod.GET)
	public ItemType getItemType(@PathVariable("id") String id, Principal principal) {
		Authentication authenticationToken = (Authentication) principal;
		ItemType itemType = itemTypeService.getItemType(id);
		if (itemType == null)
			return new ItemType();
		else
			return itemType;
	}

	@RequestMapping(value = "/itemtype", headers = { "accept=application/json" }, method = RequestMethod.POST)
	public ItemType saveNewItemType(@Valid @RequestBody ItemType itemType) {
		itemTypeService.saveNewItemType(itemType);
		return itemType;
	}

	@RequestMapping(value = "/itemtype/{id}", headers = { "accept=application/json" }, method = RequestMethod.PUT)
	public ItemType updateItemType(@Valid @RequestBody ItemType itemType) {
		itemTypeService.saveItemType(itemType);
		return itemType;
	}

	@RequestMapping("/itemtypes")
	public ListWrapper<ItemType> getAllItemTypes(@RequestParam("page") int pageNumber,
			@RequestParam("per_page") int pageSize,
			@RequestParam(value = "sort_by", required = false) String sortByAttributeName,
			@RequestParam(value = "order", required = false) String sortDirection) {
		return itemTypeService.getItemTypes(pageNumber, pageSize, sortByAttributeName, sortDirection);

	}

	//=============
}
