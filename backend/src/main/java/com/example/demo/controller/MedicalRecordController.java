package com.example.demo.controller;

import com.example.demo.model.MedicalRecord;
import com.example.demo.model.Prescription;
import com.example.demo.repository.MedicalRecordRepository;
import com.example.demo.repository.PrescriptionRepository;

import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/doctor/actions")
public class MedicalRecordController {

    private final PrescriptionRepository pRepo;
    private final MedicalRecordRepository mRepo;

    public MedicalRecordController(PrescriptionRepository p,
                                   MedicalRecordRepository m) {
        this.pRepo = p;
        this.mRepo = m;
    }

    // 🔹 SAVE DIAGNOSIS (already there)
    @PostMapping("/diagnosis")
    public MedicalRecord addDiagnosis(@RequestBody MedicalRecord m) {
        return mRepo.save(m);
    }

    // 🔹 VIEW MEDICAL HISTORY (NEW – same file)
    @GetMapping("/history/{patientId}")
    public List<MedicalRecord> history(@PathVariable Long patientId) {
        return mRepo.findByPatientId(patientId);
    }
}
