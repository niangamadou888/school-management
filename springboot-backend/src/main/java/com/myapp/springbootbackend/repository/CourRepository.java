package com.myapp.springbootbackend.repository;

import com.myapp.springbootbackend.model.Cour;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CourRepository extends JpaRepository<Cour, Long> {
}
