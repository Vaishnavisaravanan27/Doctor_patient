function PatientDashboard() {
  const patient = JSON.parse(localStorage.getItem("patient"));

  if (!patient) return <h3>Please login again</h3>;

  return (
    <>
      <h2>Patient Dashboard</h2>

      <p><b>Name:</b> {patient.name}</p>
      <p><b>Age:</b> {patient.age}</p>
      <p><b>Gender:</b> {patient.gender}</p>
      <p><b>Phone:</b> {patient.phone}</p>

      <hr />

      <button onClick={() => window.location="/patient/book"}>
        Book Appointment
      </button>

      <button onClick={() => window.location="/patient/appointments"}>
        My Appointments
      </button>

      <button onClick={() => window.location="/patient/prescriptions"}>
        Prescriptions
      </button>

      <button onClick={() => window.location="/patient/bills"}>
        Bills
      </button>
    </>
  );
}

export default PatientDashboard;   // 🔥 THIS LINE IS MUST
