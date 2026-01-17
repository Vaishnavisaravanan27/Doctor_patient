import { useState } from "react";
import API from "../api";

function BookAppointment() {
  const patient = JSON.parse(localStorage.getItem("patient"));
  const [dept, setDept] = useState("");

  const book = () => {
    fetch(`${API}/api/appointments`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        patientId: patient.id,
        department: dept,
        // doctorName: "Dr. Arun",
        appointmentDate: "2026-01-15",
        appointmentTime: "10:00"
      })
    }).then(() => alert("Appointment Booked"));
  };

  return (
    <>
      <h3>Book Appointment</h3>
      <input placeholder="Department" onChange={e => setDept(e.target.value)} />
      <button onClick={book}>Book</button>
    </>
  );
}

export default BookAppointment;
