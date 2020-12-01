package com.example.demo.service;

import com.example.demo.dao.PersonDao;
import com.example.demo.model.Person;

public class PersonService {

    private final PersonDao personDao;

    public PersonService(PersonDao personDao) {
        this.personDao = personDao;
    }

    // Calls the function from the PersonDao interface
    // to create a person with a random ID
    public int addPerson(Person person) {
        return personDao.insertPerson(person);
    }
}
