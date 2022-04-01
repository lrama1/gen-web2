package com.sample.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sample.web.domain.Person;

@Repository
public interface PersonRepository extends JpaRepository<Person, String> {

}
