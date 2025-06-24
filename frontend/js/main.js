// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", () => {
  // Get button elements by ID
  const routineBtn = document.getElementById("btn-routine");
  const recoveryBtn = document.getElementById("btn-recovery");
  const inspectionBtn = document.getElementById("btn-inspection");

  // Redirect to booking page with correct service type
  if (routineBtn) {
    routineBtn.addEventListener("click", () => {
      window.location.href = "booking.html?type=routine";
    });
  }

  if (recoveryBtn) {
    recoveryBtn.addEventListener("click", () => {
      window.location.href = "booking.html?type=recovery";
    });
  }

  if (inspectionBtn) {
    inspectionBtn.addEventListener("click", () => {
      window.location.href = "booking.html?type=inspection";
    });
  }

  // Optional: log which button was clicked
  console.log("Homepage buttons are ready.");
});