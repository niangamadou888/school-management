package com.myapp.springbootbackend.repository;

import com.myapp.springbootbackend.model.Registration;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RegistrationRepository extends JpaRepository<Registration, Long> {
}
