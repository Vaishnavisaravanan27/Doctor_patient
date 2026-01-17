package com.example.demo.controller;

import com.example.demo.model.Doctor;
import com.example.demo.repository.DoctorRepository;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
@RequestMapping("/doctor")
public class DoctorController {

    private final DoctorRepository repo;

    public DoctorController(DoctorRepository repo) {
        this.repo = repo;
    }

    @PostMapping("/login")
    public String login(@RequestBody Doctor d) {

        Doctor doc = repo.findById(d.getDoctorId()).orElse(null);
        System.out.println("Doctor from DB: " + doc);

        return (doc != null && doc.getPassword().equals(d.getPassword()))
                ? "SUCCESS"
                : "FAIL";
    }

}
