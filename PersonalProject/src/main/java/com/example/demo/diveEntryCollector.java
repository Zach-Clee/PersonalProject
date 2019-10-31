package com.example.demo;


import java.util.ArrayList;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
interface diveEntryCollector extends JpaRepository<dives, Integer> {

	
	public dives findById(int d);
	public int findMaxId();
	public ArrayList<dives> findAll();
	public String deleteById(int Id);
}
