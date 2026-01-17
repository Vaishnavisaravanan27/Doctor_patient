package com.example.demo.controller;

import com.example.demo.model.Appointment;
import com.example.demo.repository.AppointmentRepository;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api/appointments")
public class AppointmentController {

    private final AppointmentRepository repo;

    public AppointmentController(AppointmentRepository repo) {
        this.repo = repo;
    }

    // Doctor view appointments
    @GetMapping("/doctor/{doctorId}")
    public List<Appointment> doctorAppointments(@PathVariable Integer doctorId) {
        return repo.findByDoctorId(doctorId);
    }

    // COMPLETE APPOINTMENT
    @PutMapping("/complete/{appointmentId}")
    public Appointment complete(@PathVariable Long appointmentId) {
        Appointment a = repo.findByAppointmentId(appointmentId)
                .orElseThrow(() -> new RuntimeException("Appointment not found"));
        a.setStatus("COMPLETED");
        return repo.save(a);
    }

    @PostMapping
    public Appointment bookAppointment(@RequestBody Appointment appointment) {
        appointment.setStatus("BOOKED");   // default status
        return repo.save(appointment);
    }

    // Patient view appointments
    @GetMapping("/{patientId}")
    public List<Appointment> patientAppointments(@PathVariable Long patientId) {
        return repo.findByPatientId(patientId);
    }

}

