import { useEffect, useState } from "react";
import API from "../api";

function DoctorAppointments() {
  const [apps, setApps] = useState([]);
  const [diagText, setDiagText] = useState("");
  const [selected, setSelected] = useState(null);

  const load = () => {
    fetch(`${API}/api/appointments/doctor/101`)
      .then(res => res.json())
      .then(setApps);
  };

  useEffect(load, []);

  const saveDiagnosis = () => {
  fetch(`${API}/doctor/actions/diagnosis`, {   // ✅ FIXED
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      patientId: selected.patientId,
      doctorId: 101,
      appointmentId: selected.appointmentId,
      diagnosis: diagText,
      visitDate: new Date().toISOString().split("T")[0]
    })
  }).then(() => {
    alert("Diagnosis saved");
    setSelected(null);
    setDiagText("");
    load();
  });
};

  const complete = (id) => {
    fetch(`${API}/api/appointments/complete/${id}`, { method: "PUT" })
      .then(load);
  };

  return (
    <>
      <h3>Doctor Appointments</h3>

      {apps.map(a => (
        <div key={a.appointmentId} style={{ marginBottom: 10 }}>
          <b>Patient:</b> {a.patientId} |
          <b> Time:</b> {a.appointmentTime} |
          <b> Status:</b> {a.status}

          <button onClick={() => setSelected(a)}>Diagnose</button>

          <button
            disabled={a.status === "COMPLETED"}
            onClick={() => complete(a.appointmentId)}
          >
            Complete
          </button>
        </div>
      ))}

      {selected && (
        <div>
          <h4>Diagnosis for Patient {selected.patientId}</h4>
          <textarea
            value={diagText}
            onChange={e => setDiagText(e.target.value)}
          />
          <br />
          <button onClick={saveDiagnosis}>Save</button>
        </div>
      )}
    </>
  );
}

export default DoctorAppointments;
