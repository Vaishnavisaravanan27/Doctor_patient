package com.example.demo.controller;

import com.example.demo.model.Bill;
import com.example.demo.repository.BillRepository;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api/bills")
public class BillController {

    private final BillRepository repo;

    public BillController(BillRepository repo) {
        this.repo = repo;
    }

    @GetMapping("/{patientId}")
    public List<Bill> getBills(@PathVariable Long patientId) {
        return repo.findByPatientId(patientId);
    }
}
