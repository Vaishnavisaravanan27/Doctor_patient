import { useNavigate } from "react-router-dom";
import "./home.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">
      <h1>Hospital Management System</h1>

      <div className="btn-group">
        <button onClick={() => navigate("/admin/login")}>
          Admin
        </button>

        <button onClick={() => navigate("/doctor")}>
          Doctor
        </button>

        <button onClick={() => navigate("/patient")}>
          Patient
        </button>

        <button onClick={() => navigate("/reception/login")}>
          Receptionist
        </button>
      </div>
    </div>
  );
}

export default Home;
