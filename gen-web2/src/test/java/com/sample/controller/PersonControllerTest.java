package com.sample.controller;

import static org.junit.Assert.*;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.powermock.modules.junit4.PowerMockRunner;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;

import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.when;

import java.security.Principal;
import java.util.Collection;

//import the domain
import com.sample.web.domain.Person;

import com.sample.service.PersonService;

@RunWith(PowerMockRunner.class)
public class PersonControllerTest {

	@Mock
	PersonService mockPersonService;

	@InjectMocks
	PersonController classToTest;

	@Test
	public void testUpdate() {
		Person person = new Person();
		person.setPersonId("1111");
		when(mockPersonService.getPerson("1111")).thenReturn(person);
		Person personToReturn = classToTest.getPerson("1111", getMockPrincipal());

		assertEquals("1111", personToReturn.getPersonId());
	}

	private Principal getMockPrincipal() {
		Principal principal = new Authentication() {

			@Override
			public String getName() {
				return "axlrama";
			}

			@Override
			public void setAuthenticated(boolean arg0) throws IllegalArgumentException {
				// TODO Auto-generated method stub

			}

			@Override
			public boolean isAuthenticated() {
				// TODO Auto-generated method stub
				return false;
			}

			@Override
			public Object getPrincipal() {
				// TODO Auto-generated method stub
				return null;
			}

			@Override
			public Object getDetails() {
				// TODO Auto-generated method stub
				return null;
			}

			@Override
			public Object getCredentials() {
				// TODO Auto-generated method stub
				return null;
			}

			@Override
			public Collection<? extends GrantedAuthority> getAuthorities() {
				// TODO Auto-generated method stub
				return null;
			}
		};
		return principal;
	}
}
