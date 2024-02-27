package com.myapp.springbootbackend.model;

import jakarta.persistence.*;

@Entity
@Table(name = "registrations")
public class Registration {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "details")
    private String details;

    @Column(name = "student_name")
    private String studentName;

    @Column(name = "cour_name")
    private String courName;

    @Column(name = "year")
    private String year;

    public Registration() {
    }

    public Registration(String details, String studentName, String courName, String year) {
        this.details = details;
        this.studentName = studentName;
        this.courName = courName;
        this.year = year;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getDetails() {
        return details;
    }

    public void setDetails(String details) {
        this.details = details;
    }

    public String getStudentName() {
        return studentName;
    }

    public void setStudentName(String studentName) {
        this.studentName = studentName;
    }

    public String getCourName() {
        return courName;
    }

    public void setCourName(String courName) {
        this.courName = courName;
    }

    public String getYear() {
        return year;
    }

    public void setYear(String year) {
        this.year = year;
    }
}
