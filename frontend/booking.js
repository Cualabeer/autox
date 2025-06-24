document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const type = params.get("type");

  const routine = document.getElementById("routine-form");
  const recovery = document.getElementById("recovery-form");
  const inspection = document.getElementById("inspection-form");
  const title = document.getElementById("form-title");

  if (type === "routine") {
    routine.classList.remove("hidden");
    title.textContent = "Routine Service Booking";
  } else if (type === "recovery") {
    recovery.classList.remove("hidden");
    title.textContent = "Emergency Recovery Request";
  } else if (type === "inspection") {
    inspection.classList.remove("hidden");
    title.textContent = "Pre-Purchase Inspection Booking";
  } else {
    title.textContent = "Invalid Booking Type";
  }

  // Optional: handle form submissions (e.g., send to backend)
});