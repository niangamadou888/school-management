package com.myapp.springbootbackend.repository;

import com.myapp.springbootbackend.model.Annee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AnneeRepository extends JpaRepository<Annee, Long> {
}
