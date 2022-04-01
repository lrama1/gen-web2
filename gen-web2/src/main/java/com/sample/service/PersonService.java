package com.sample.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;

//import the domain
import com.sample.web.domain.Person;
import com.sample.common.ListWrapper;
import com.sample.dao.PersonRepository;
import com.sample.common.SortedIndicator;

@Service
public class PersonService {

	@Autowired
	PersonRepository personRepository;

	public ListWrapper<Person> getPersons(int pageNumber, int pageSize, String sortByAttribute, String sortDirection) {
		//return personDAO.getPersons(pageNumber, pageSize, sortByAttribute, sortDirection);

		PageRequest request = PageRequest.of(pageNumber - 1, pageSize);
		if (!"".equals(sortByAttribute)) {
			Sort sortSetting = Sort.by("1".equals(sortDirection) ? Direction.ASC : Direction.DESC, sortByAttribute);
			request = PageRequest.of(pageNumber - 1, pageSize, sortSetting);
		}
		Page<Person> personPage = personRepository.findAll(request);
		ListWrapper<Person> results = new ListWrapper<>();
		results.setRows(personPage.getContent());
		results.setTotalRecords(new Long(personPage.getTotalElements()).intValue());
		results.setCurrentPage(pageNumber - 1);
		results.setSortedIndicator(new SortedIndicator(sortByAttribute, sortDirection));
		return results;

	}

	public Person getPerson(String id) {
		return personRepository.findById(id).get();
	}

	public void saveNewPerson(Person person) {
		personRepository.saveAndFlush(person);
	}

	public void savePerson(Person person) {
		personRepository.saveAndFlush(person);
	}
}
