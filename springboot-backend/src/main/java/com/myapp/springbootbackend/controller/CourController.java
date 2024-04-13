package com.myapp.springbootbackend.controller;

import com.myapp.springbootbackend.exception.ResourceNotFoundException;
import com.myapp.springbootbackend.model.Cour;
import com.myapp.springbootbackend.repository.CourRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/v1/")
public class CourController {
    @Autowired
    private CourRepository courRepository;

    //get all cours
    @GetMapping("/cours")
    public List<Cour> getAllCours(){return courRepository.findAll();}

    //create cour rest api
    @PostMapping("/cours")
    public Cour createCour(@RequestBody Cour cour){ return courRepository.save(cour);}

    //get cour by id rest api
    @GetMapping("/cours/{id}")
    public ResponseEntity<Cour> getCourById(@PathVariable Long id){
        Cour cour = courRepository.findById(id)
                .orElseThrow(()-> new ResourceNotFoundException("Cour not exist with id:" + id));
        return ResponseEntity.ok(cour);
    }

    //update cour rest api
    @PutMapping("/cours/{id}")
    public ResponseEntity<Cour> updateCour(@PathVariable Long id, @RequestBody Cour courDetails){
        Cour cour = courRepository.findById(id)
                .orElseThrow(()-> new ResourceNotFoundException("Cour not exist with id:" + id));
        cour.setName(courDetails.getName());
        cour.setProgramme(courDetails.getProgramme());

        Cour updatedCour =  courRepository.save(cour);
        return ResponseEntity.ok(updatedCour);
    }

    //delete cour rest api
    @DeleteMapping("/cours/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteCour(@PathVariable Long id){
        Cour cour = courRepository.findById(id)
                .orElseThrow(()-> new ResourceNotFoundException("Cour not exist with id:" + id));

        courRepository.delete(cour);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
}
