window.addEventListener("DOMContentLoaded", () => {
  const query = new URLSearchParams(window.location.search);
  const service = query.get("service");
  const mainSelect = document.getElementById("mainServiceType");

  if (service) {
    mainSelect.value = service;
    document.getElementById("serviceCategoryContainer").style.display = "none";
    const changeEvent = new Event("change");
    mainSelect.dispatchEvent(changeEvent);
  }

  // Add additional logic (e.g. populate dropdowns, show forms, etc.)
});
