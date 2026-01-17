import { useEffect, useState } from "react";
import API from "../api";

function MyAppointments() {
  const patient = JSON.parse(localStorage.getItem("patient"));
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`${API}/api/appointments/${patient.id}`)
      .then(res => res.json())
      .then(setData);
  }, []);

  return (
    <>
      <h3>My Appointments</h3>
      {data.length === 0 && <p>No appointments found</p>}
      {data.map(a => (
        <p key={a.appointmentId}>
          {a.department} - {a.status}
        </p>
      ))}
    </>
  );
}

export default MyAppointments;
