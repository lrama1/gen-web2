package com.sample.web.domain;

import org.hibernate.validator.constraints.NotBlank;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity(name = "person")
public class Person {
	@Id
	@NotBlank(message = "personId is mandatory")
	private String personId;
	@NotBlank(message = "firstName is mandatory")
	private String firstName;
	@NotBlank(message = "lastName is mandatory")
	private String lastName;

	public String getPersonId() {
		return personId;
	}

	public String getFirstName() {
		return firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setPersonId(String personId) {
		this.personId = personId;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public void populateWithSample() {
		int appender = getNextNumber();
		personId = "Sample Value personId " + appender;
		firstName = "Sample Value firstName " + appender;
		lastName = "Sample Value lastName " + appender;
	}

	static int sampleCounter = 0;

	private static int getNextNumber() {
		sampleCounter++;
		return sampleCounter;
	}

	public String toString() {
		return "personId = " + personId + ", firstName = " + firstName + ", lastName = " + lastName;
	}
}
