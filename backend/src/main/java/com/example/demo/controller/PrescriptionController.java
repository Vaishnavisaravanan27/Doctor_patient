package com.example.demo.controller;

import com.example.demo.model.Prescription;
import com.example.demo.repository.PrescriptionRepository;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api/prescriptions")
public class PrescriptionController {

    private final PrescriptionRepository repo;

    public PrescriptionController(PrescriptionRepository repo) {
        this.repo = repo;
    }
    @PostMapping
    public Prescription add(@RequestBody Prescription p) {


        return repo.save(p);
    }

    @GetMapping("/{patientId}")
    public List<Prescription> get(@PathVariable Long patientId) {
        return repo.findByPatientId(patientId);
    }

}
