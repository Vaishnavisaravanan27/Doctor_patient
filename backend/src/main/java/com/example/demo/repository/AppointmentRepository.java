package com.example.demo.repository;

import com.example.demo.model.Appointment;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;
public interface AppointmentRepository extends JpaRepository<Appointment, Long> {

    // Patient dashboard – My Appointments
    List<Appointment> findByPatientId(Long patientId);

    // Doctor dashboard – Today's Appointments
    List<Appointment> findByDoctorId(Integer doctorId);
    Optional<Appointment> findByAppointmentId(Long appointmentId);// ✅ ADD THIS
}
