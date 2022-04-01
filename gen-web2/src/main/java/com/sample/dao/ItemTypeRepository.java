package com.sample.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sample.entity.ItemType;

@Repository
public interface ItemTypeRepository extends JpaRepository<ItemType, String> {

}
