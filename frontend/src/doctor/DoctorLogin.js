import { useState } from "react";
import API from "../api";

function DoctorLogin() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
  fetch(`${API}/doctor/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ doctorId: id, password })
  })
    .then(res => res.text())
    .then(result => {
  if (result.trim() === "SUCCESS") {
    window.location = "/doctor/dashboard";
  } else {
    alert("Invalid Doctor ID or Password");
  }
});

};


  return (
    <>
      <h2>Doctor Login</h2>
      <input placeholder="Doctor ID" onChange={e => setId(e.target.value)} />
      <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
      <button onClick={login}>Login</button>
    </>
  );
}

export default DoctorLogin;
