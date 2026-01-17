import { useState } from "react";
import API from "../api";

function PatientLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    fetch(`${API}/api/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password })
    })
      .then(res => res.json())
      .then(data => {
        localStorage.setItem("patient", JSON.stringify(data));
        window.location = "/patient/dashboard";
      });
  };

  return (
    <div className="login">
      <h2>Patient Login</h2>
      <input placeholder="Username" onChange={e => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
      <button onClick={login}>Login</button>
    </div>
  );
}

export default PatientLogin;
