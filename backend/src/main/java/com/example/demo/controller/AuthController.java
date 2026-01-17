package com.example.demo.controller;

import org.springframework.web.bind.annotation.*;
import com.example.demo.repository.PatientRepository;
import com.example.demo.model.Patient;

@RestController
@CrossOrigin
@RequestMapping("/api/auth")
public class AuthController {

    private final PatientRepository repo;
    public AuthController(PatientRepository repo) { this.repo = repo; }

    @PostMapping("/login")
    public Patient login(@RequestBody Patient req) {
        Patient p = repo.findByUsername(req.getUsername());
        if (p != null && p.getPassword().equals(req.getPassword())) {
            p.setPassword(null);
            return p;
        }
        return null;
    }
}
