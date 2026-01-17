package com.example.demo.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "appointments")
@Getter @Setter
public class Appointment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "appointment_id")
    private Long appointmentId;

    @Column(name = "patient_id")
    private Long patientId;

    @Column(name = "doctor_id")
    private Integer doctorId;

    @Column(name = "department")   // ⭐ ADD
    private String department;

    @Column(name = "date")
    private String appointmentDate;

    @Column(name = "time")
    private String appointmentTime;

    private String status;
    private String diagnosis;
}




