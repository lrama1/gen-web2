package com.sample.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;

//import the domain
import com.sample.common.ListWrapper;
import com.sample.dao.ItemTypeRepository;
import com.sample.entity.ItemType;
import com.sample.common.SortedIndicator;

@Service
public class ItemTypeService {

	@Autowired
	ItemTypeRepository itemTypeRepository;

	public ListWrapper<ItemType> getItemTypes(int pageNumber, int pageSize, String sortByAttribute,
			String sortDirection) {
		//return itemTypeDAO.getItemTypes(pageNumber, pageSize, sortByAttribute, sortDirection);

		PageRequest request = PageRequest.of(pageNumber - 1, pageSize);
		if (!"".equals(sortByAttribute)) {
			Sort sortSetting = Sort.by("1".equals(sortDirection) ? Direction.ASC : Direction.DESC, sortByAttribute);
			request = PageRequest.of(pageNumber - 1, pageSize, sortSetting);
		}
		Page<ItemType> itemTypePage = itemTypeRepository.findAll(request);
		ListWrapper<ItemType> results = new ListWrapper<>();
		results.setRows(itemTypePage.getContent());
		results.setTotalRecords(new Long(itemTypePage.getTotalElements()).intValue());
		results.setCurrentPage(pageNumber - 1);
		results.setSortedIndicator(new SortedIndicator(sortByAttribute, sortDirection));
		return results;

	}

	public ItemType getItemType(String id) {
		return itemTypeRepository.findById(id).get();
	}

	public void saveNewItemType(ItemType itemType) {
		itemTypeRepository.saveAndFlush(itemType);
	}

	public void saveItemType(ItemType itemType) {
		itemTypeRepository.saveAndFlush(itemType);
	}
}
