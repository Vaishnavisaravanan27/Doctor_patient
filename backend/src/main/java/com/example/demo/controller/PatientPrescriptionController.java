package com.example.demo.controller;

import java.util.List;

import org.springframework.web.bind.annotation.*;

import com.example.demo.model.Prescription;
import com.example.demo.repository.PrescriptionRepository;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/patient")
public class PatientPrescriptionController {

    private final PrescriptionRepository repo;

    public PatientPrescriptionController(PrescriptionRepository repo) {
        this.repo = repo;
    }

    @GetMapping("/prescriptions/{patientId}")
    public List<Prescription> get(@PathVariable Long patientId) {
        return repo.findByPatientId(patientId);
    }
}

