document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const type = params.get("type");
  const container = document.getElementById("form-container");
  const title = document.getElementById("form-title");

  if (!container || !title) {
    console.error("Missing container or title elements");
    return;
  }

  if (!type) {
    title.textContent = "No Service Selected";
    container.innerHTML = "<p>Please select a service from the homepage.</p>";
    return;
  }

  let formHTML = "";

  switch (type.toLowerCase()) {
    case "routine":
      title.textContent = "Routine Service Booking";
      formHTML = `
        <form class="booking-form">
          <input required type="text" name="name" placeholder="Name" />
          <input required type="tel" name="phone" placeholder="Phone Number" />
          <input required type="text" name="reg" placeholder="Car Registration" />
          <input type="datetime-local" name="time" />
          <textarea name="notes" placeholder="Describe any issues or preferences"></textarea>
          <input required type="text" name="location" placeholder="Address or Location" />
          <button type="submit">Book Routine Service</button>
        </form>
      `;
      break;

    case "recovery":
  title.textContent = "Emergency Recovery Request";
  formHTML = `
    <form class="booking-form" id="recovery-form">
      <input required type="text" name="name" placeholder="Name" />
      <input required type="tel" name="phone" placeholder="Phone Number" />
      <input required type="text" name="reg" placeholder="Car Registration" />
      
      <label for="gps-location">GPS Coordinates (auto-detected):</label>
      <input type="text" id="gps-location" name="gpsLocation" readonly placeholder="Waiting for GPS..." />
      
      <label for="manual-location">Or enter your location manually:</label>
      <input type="text" id="manual-location" name="location" placeholder="Address or Location" />
      
      <textarea name="notes" placeholder="What happened?"></textarea>
      <button type="submit">Request Recovery</button>
    </form>
  `;
  break;

    case "inspection":
      title.textContent = "Pre-Purchase Inspection Booking";
      formHTML = `
        <form class="booking-form">
          <input required type="text" name="name" placeholder="Your Name" />
          <input required type="tel" name="phone" placeholder="Phone Number" />
          <input type="text" name="reg" placeholder="Car Registration (if known)" />
          <input type="datetime-local" name="time" />
          <input type="text" name="location" placeholder="Vehicle Location or Seller Address" />
          <textarea name="notes" placeholder="Car details or seller contact"></textarea>
          <button type="submit">Book Inspection</button>
        </form>
      `;
      break;

    default:
      title.textContent = "Invalid Service Type";
      formHTML = `<p>Sorry, the service type you requested is invalid.</p>`;
  }

  container.innerHTML = formHTML;
});