package com.example.demo.api;

import com.example.demo.model.Person;
import com.example.demo.service.PersonService;

public class PersonController {

    private final PersonService personService;

    public PersonController(PersonService personService) {
        this.personService = personService;
    }

    // Creates a person using the PersonService
    // class which has a random ID
    public void addPerson(Person person) {
        personService.addPerson(person);
    }
}
