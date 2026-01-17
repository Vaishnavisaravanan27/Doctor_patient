import { useEffect, useState } from "react";
import API from "../api";

function Prescriptions() {

  const patient = JSON.parse(localStorage.getItem("patient"));
  const [list, setList] = useState([]);

  useEffect(() => {
    if (!patient) return;

    fetch(`${API}/api/prescriptions/${patient.id}`)
      .then(res => {
        if (!res.ok) throw new Error("API error");
        return res.json();
      })
      .then(data => {
        if (Array.isArray(data)) {
          setList(data);
        } else {
          setList([]);   // 👈 prevents map crash
        }
      })
      .catch(err => {
        console.error(err);
        setList([]);
      });
  }, []);

  if (!patient) return <h3>Please login again</h3>;

  return (
    <>
      <h3>Prescriptions</h3>

      {list.length === 0 && <p>No prescriptions found</p>}

      {list.map(p => (
  <p key={p.prescriptionId}>
    {p.medicineName} - {p.dosage}
  </p>
))}

    </>
  );
}

export default Prescriptions;
