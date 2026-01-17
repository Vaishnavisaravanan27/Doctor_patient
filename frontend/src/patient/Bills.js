import { useEffect, useState } from "react";
import API from "../api";

function Bills() {
  const patient = JSON.parse(localStorage.getItem("patient"));
  const [bills, setBills] = useState([]);

  useEffect(() => {
    fetch(`${API}/api/bills/${patient.id}`)
      .then(res => res.json())
      .then(setBills);
  }, []);

  return (
    <>
      <h3>Bills</h3>
      {bills.map(b => (
        <p key={b.id}>₹{b.amount} - {b.status}</p>
      ))}
    </>
  );
}

export default Bills;
