function DoctorDashboard() {
  return (
    <>
      <h2>Doctor Dashboard</h2>

      <button onClick={() => window.location="/doctor/appointments"}>
        Appointments
      </button>

      <button onClick={() => window.location="/doctor/history"}>
        Medical History
      </button>

      <button onClick={() => window.location="/doctor/prescription"}>
        Add Prescription
      </button>
    </>
  );
}

export default DoctorDashboard;   // 🔥 MUST
