package com.example.demo;
import java.sql.Date;
import java.sql.Time;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;

@Entity
@NamedQueries (value= {
		@NamedQuery(
				name = "dives.findMaxId",
				query = "Select max(P.id) from dives P")	
})

class dives {
	@Id
	private int diveid;
	private String location;
	private double geolat;
	private double geolong;
	private Date divedate;
	private Time starttime;
	private Time finishtime;
	private float startingair;
	private float finishingair;
	private String partner;
	private String weather;
	private int divetype;
	private int accesstype;
	private String boatname;
	private int watertype;
	private float visability;
	private float weight;
	private float maxdepth;
	private String comments;
	public int getDiveid() {
		return diveid;
	}
	public void setDiveid(int diveid) {
		this.diveid = diveid;
	}
	public String getLocation() {
		return location;
	}
	public void setLocation(String location) {
		this.location = location;
	}
	public double getGeolat() {
		return geolat;
	}
	public void setGeolat(double geolat) {
		this.geolat = geolat;
	}
	public double getGeolong() {
		return geolong;
	}
	public void setGeolong(double geolong) {
		this.geolong = geolong;
	}
	public Date getDivedate() {
		return divedate;
	}
	public void setDivedate(Date divedate) {
		this.divedate = divedate;
	}
	public Time getStarttime() {
		return starttime;
	}
	public void setStarttime(Time starttime) {
		this.starttime = starttime;
	}
	public Time getFinishtime() {
		return finishtime;
	}
	public void setFinishtime(Time finishtime) {
		this.finishtime = finishtime;
	}
	public float getStartingair() {
		return startingair;
	}
	public void setStartingair(float startingair) {
		this.startingair = startingair;
	}
	public float getFinishingair() {
		return finishingair;
	}
	public void setFinishingair(float finishingair) {
		this.finishingair = finishingair;
	}
	public String getPartner() {
		return partner;
	}
	public void setPartner(String partner) {
		this.partner = partner;
	}
	public String getWeather() {
		return weather;
	}
	public void setWeather(String weather) {
		this.weather = weather;
	}
	public int getDivetype() {
		return divetype;
	}
	public void setDivetype(int divetype) {
		this.divetype = divetype;
	}
	public int getAccesstype() {
		return accesstype;
	}
	public void setAccesstype(int accesstype) {
		this.accesstype = accesstype;
	}
	public String getBoatname() {
		return boatname;
	}
	public void setBoatname(String boatname) {
		this.boatname = boatname;
	}
	public int getWatertype() {
		return watertype;
	}
	public void setWatertype(int watertype) {
		this.watertype = watertype;
	}
	public float getVisability() {
		return visability;
	}
	public void setVisability(float visability) {
		this.visability = visability;
	}
	public float getWeight() {
		return weight;
	}
	public void setWeight(float weight) {
		this.weight = weight;
	}
	public float getMaxdepth() {
		return maxdepth;
	}
	public void setMaxdepth(float maxdepth) {
		this.maxdepth = maxdepth;
	}
	public String getComments() {
		return comments;
	}
	public void setComments(String comments) {
		this.comments = comments;
	}
}