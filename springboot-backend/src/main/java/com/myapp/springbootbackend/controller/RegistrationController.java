package com.myapp.springbootbackend.controller;

import com.myapp.springbootbackend.exception.ResourceNotFoundException;
import com.myapp.springbootbackend.model.Employee;
import com.myapp.springbootbackend.model.Registration;
import com.myapp.springbootbackend.repository.RegistrationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/v1")
public class RegistrationController {
    @Autowired
    private RegistrationRepository registrationRepository;

    //get all registrations
    @GetMapping("/registrations")
    public List<Registration> getAllRegistrations(){ return registrationRepository.findAll();}

    //create registration rest api
    @PostMapping("/registrations")
    public Registration createRegistration(@RequestBody Registration registration){
        return registrationRepository.save(registration);
    }

    //get registration by id rest api
    @GetMapping("/registrations/{id}")
    public ResponseEntity<Registration> getregistrationByID(@PathVariable Long id){
        Registration registration = registrationRepository.findById(id)
                .orElseThrow(()-> new ResourceNotFoundException("Registration not exist with id:" + id));
        return ResponseEntity.ok(registration);
    }

    //Update registration rest api
    @PutMapping("/registrations/{id}")
    public ResponseEntity<Registration> updateEmployee(@PathVariable Long id, @RequestBody Registration registrationDetails){
        Registration registration = registrationRepository.findById(id)
                .orElseThrow(()-> new ResourceNotFoundException("Registration not exist with id:" + id));
        registration.setDetails(registrationDetails.getDetails());
        registration.setStudentName(registrationDetails.getStudentName());
        registration.setCourName(registrationDetails.getCourName());
        registration.setYear(registrationDetails.getYear());

        Registration updatedRegistration =  registrationRepository.save(registration);
        return ResponseEntity.ok(updatedRegistration);
    }

    //Delete registration rest api
    @DeleteMapping("/registrations/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteRegistration(@PathVariable Long id){
        Registration registration = registrationRepository.findById(id)
                .orElseThrow(()-> new ResourceNotFoundException("Registration not exist with id:" + id));

        registrationRepository.delete(registration);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
}
