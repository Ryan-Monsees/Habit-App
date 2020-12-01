package com.example.demo.dao;

import com.example.demo.model.Person;

import java.util.UUID;

public interface PersonDao {

    // Is implemented in the class
    int insertPerson(UUID id, Person person);

    // generates a random ID and returns a
    // Person object with the ID and person that was
    // passed as a parameter
    default int addPerson(Person person) {
        UUID id = UUID.randomUUID();
        return insertPerson(id, person);
    }
}
