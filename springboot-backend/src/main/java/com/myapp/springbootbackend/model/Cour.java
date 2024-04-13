package com.myapp.springbootbackend.model;

import jakarta.persistence.*;

import java.util.Date;

@Entity
@Table(name = "cours")
public class Cour {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column(name = "name")
    private String name;
    @Column(name = "programme")
    private String programme;

    public Cour() {

    }

    public Cour(String name, String programme) {
        this.name = name;
        this.programme = programme;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getProgramme() {
        return programme;
    }

    public void setProgramme(String programme) {
        this.programme = programme;
    }
}
