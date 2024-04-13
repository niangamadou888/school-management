package com.myapp.springbootbackend.controller;

import com.myapp.springbootbackend.exception.ResourceNotFoundException;
import com.myapp.springbootbackend.model.Annee;
import com.myapp.springbootbackend.model.Employee;
import com.myapp.springbootbackend.repository.AnneeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/v1/")
public class AnneeController {

    @Autowired
    private AnneeRepository anneeRepository;

    //get all annees
    @GetMapping("/annees")
    public List<Annee> getAllAnnees() { return anneeRepository.findAll();}

    //create annee rest api
    @PostMapping("/annees")
    public Annee createAnnee(@RequestBody Annee annee){ return anneeRepository.save(annee);}

    //get annee by id rest api
    @GetMapping("/annees/{id}")
    public ResponseEntity<Annee> getanneeByID(@PathVariable Long id){
        Annee annee = anneeRepository.findById(id)
                .orElseThrow(()-> new ResourceNotFoundException("Annee not exist with id:" + id));
        return ResponseEntity.ok(annee);
    }

    //update annee rest api
    @PutMapping("/annees/{id}")
    public ResponseEntity<Annee> updateAnnee(@PathVariable Long id, @RequestBody Annee anneeDetails){
        Annee annee = anneeRepository.findById(id)
                .orElseThrow(()-> new ResourceNotFoundException("Annee not exist with id:" + id));
        annee.setName(anneeDetails.getName());

        Annee updatedAnnee =  anneeRepository.save(annee);
        return ResponseEntity.ok(updatedAnnee);
    }

    //Delete annee rest api
    @DeleteMapping("/annees/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteAnnee(@PathVariable Long id){
        Annee annee = anneeRepository.findById(id)
                .orElseThrow(()-> new ResourceNotFoundException("Annee not exist with id:" + id));

        anneeRepository.delete(annee);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
}
