document.addEventListener("DOMContentLoaded", () => {
  const routineBtn = document.getElementById("btn-routine");
  const recoveryBtn = document.getElementById("btn-recovery");
  const inspectionBtn = document.getElementById("btn-inspection");

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
});