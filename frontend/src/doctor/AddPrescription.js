import { useState } from "react";
import API from "../api";

function AddPrescription() {
  const [patientId, setPatientId] = useState("");
  const [medicine, setMedicine] = useState("");
  const [dosage, setDosage] = useState("");

const add = () => {
  if (!patientId) return alert("Enter patient ID");
  fetch("http://localhost:8080/api/prescriptions", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      patientId: Number(patientId),
      doctorId: 101,
      medicineName: medicine,
      dosage: dosage
    })
  })
  .then(() => alert("Prescription Added"));
};


  return (
    <>
      <h3>Add Prescription</h3>
      <input placeholder="Patient ID" onChange={e => setPatientId(e.target.value)} />
      <input placeholder="Medicine" onChange={e => setMedicine(e.target.value)} />
      <input placeholder="Dosage" onChange={e => setDosage(e.target.value)} />
      <button onClick={add}>Save</button>
    </>
  );
}

export default AddPrescription;
