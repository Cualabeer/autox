document.addEventListener("DOMContentLoaded", () => {
  const type = new URLSearchParams(window.location.search).get("type");
  const container = document.getElementById("form-container");
  const title = document.getElementById("form-title");

  if (!type) {
    container.innerHTML = `<p>No service type selected.</p>`;
    return;
  }

  let formHTML = "";
  switch (type) {
    case "routine":
      title.textContent = "Routine Service Booking";
      formHTML = `
        <form class="booking-form">
          <input required type="text" placeholder="Name" name="name" />
          <input required type="tel" placeholder="Phone Number" name="phone" />
          <input required type="text" placeholder="Car Registration" name="reg" />
          <input required type="datetime-local" name="time" />
          <textarea name="notes" placeholder="Describe any issues or preferences"></textarea>
          <input required type="text" placeholder="Address or Location" name="location" />
          <button type="submit">Book Routine Service</button>
        </form>
      `;
      break;

    case "recovery":
      title.textContent = "Emergency Recovery";
      formHTML = `
        <form class="booking-form">
          <input required type="text" placeholder="Name" name="name" />
          <input required type="tel" placeholder="Phone Number" name="phone" />
          <input required type="text" placeholder="Car Registration" name="reg" />
          <input required type="text" placeholder="Location or GPS" name="location" />
          <textarea name="notes" placeholder="What happened?"></textarea>
          <button type="submit">Request Recovery</button>
        </form>
      `;
      break;

    case "inspection":
      title.textContent = "Pre-Purchase Inspection";
      formHTML = `
        <form class="booking-form">
          <input required type="text" placeholder="Your Name" name="name" />
          <input required type="tel" placeholder="Phone Number" name="phone" />
          <input required type="text" placeholder="Car Registration (if known)" name="reg" />
          <input required type="datetime-local" name="time" />
          <input required type="text" placeholder="Vehicle Location or Seller Address" name="location" />
          <textarea name="notes" placeholder="Car details or seller contact"></textarea>
          <button type="submit">Book Inspection</button>
        </form>
      `;
      break;

    default:
      title.textContent = "Unknown Service";
      formHTML = `<p>Invalid service type in URL.</p>`;
  }

  container.innerHTML = formHTML;
});