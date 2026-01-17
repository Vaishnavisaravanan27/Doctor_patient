import { useState } from "react";
import API from "../api";

function MedicalHistory() {
  const [patientId, setPatientId] = useState("");
  const [records, setRecords] = useState([]);

  const load = () => {
    fetch(`${API}/doctor/actions/history/${patientId}`)
      .then(res => res.json())
      .then(setRecords);
  };

  return (
    <>
      <h3>Medical History</h3>

      <input
        placeholder="Enter Patient ID"
        value={patientId}
        onChange={e => setPatientId(e.target.value)}
      />

      <button onClick={load}>View History</button>

      <hr />

      {records.length === 0 && <p>No history found</p>}

      {records.map(r => (
        <p key={r.id}>
          {r.visitDate} — {r.diagnosis}
        </p>
      ))}
    </>
  );
}

export default MedicalHistory;
