import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home";
import "./styles/dashboard.css";   // 🔥 MUST

// Patient
import PatientLogin from "./patient/PatientLogin";
import PatientDashboard from "./patient/PatientDashboard";
import BookAppointment from "./patient/BookAppointment";
import MyAppointments from "./patient/MyAppointments";
import Prescriptions from "./patient/Prescriptions";
import Bills from "./patient/Bills";

// Doctor
import DoctorLogin from "./doctor/DoctorLogin";
import DoctorDashboard from "./doctor/DoctorDashboard";
import DoctorAppointments from "./doctor/DoctorAppointments";
import AddPrescription from "./doctor/AddPrescription";
import MedicalHistory from "./doctor/MedicalHistory";

// Dummy pages (for now)
import AdminLogin from "./admin/AdminLogin";
import ReceptionLogin from "./reception/ReceptionLogin";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* HOME */}
        <Route path="/" element={<Home />} />

        {/* PATIENT */}
        <Route path="/patient" element={<PatientLogin />} />
        <Route path="/patient/dashboard" element={<PatientDashboard />} />
        <Route path="/patient/book" element={<BookAppointment />} />
        <Route path="/patient/appointments" element={<MyAppointments />} />
        <Route path="/patient/prescriptions" element={<Prescriptions />} />
        <Route path="/patient/bills" element={<Bills />} />

        {/* DOCTOR */}
        <Route path="/doctor" element={<DoctorLogin />} />
        <Route path="/doctor/dashboard" element={<DoctorDashboard />} />
        <Route path="/doctor/appointments" element={<DoctorAppointments />} />
        <Route path="/doctor/prescription" element={<AddPrescription />} />
        <Route path="/doctor/history" element={<MedicalHistory />} />

        {/* ADMIN */}
        <Route path="/admin/login" element={<AdminLogin />} />

        {/* RECEPTION */}
        <Route path="/reception/login" element={<ReceptionLogin />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
