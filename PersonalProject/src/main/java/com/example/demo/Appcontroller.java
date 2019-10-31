package com.example.demo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


@CrossOrigin
	
@RestController
public class Appcontroller {
	@Autowired
	private diveEntryCollector dive;

	@GetMapping("/showAll")
	public List<dives> showAll(){
		return dive.findAll();
	}
	
	@GetMapping("/findById/{d}")
	public dives findById(@PathVariable int d){
		return dive.findById(d);
	}
	
	@PostMapping("/save")
	public void save(@RequestBody dives entry){
	try{
		entry.setDiveid(dive.findMaxId() + 1);
		dive.save(entry);
		}
		catch(Exception e){
			entry.setDiveid(1);
			dive.save(entry);
		}
	}
	
	@DeleteMapping("/deleteById")
	public void deleteById(@RequestBody dives entry) {
		int Id = entry.getDiveid();
		dive.deleteById(Id);
	}
	
	@CrossOrigin
	@PostMapping("/addNewRecord/{d}")
	public void addNewRecord1(@PathVariable dives d) {
		dive.save(d);
	}
	
	@PostMapping("/update")
	public void update(@RequestBody dives entry){
		dive.save(entry);
	}
}
