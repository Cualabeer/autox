<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>AutoX Booking</title>
  <link rel="stylesheet" href="/shared/global.css" />
</head>
<body>
  <header class="header">
    <div class="logo">AutoX</div>
    <button class="hamburger" onclick="toggleMenu()">☰</button>
  </header>

  <main class="booking-form">
    <h1>Book Your Car Service</h1>
    <form id="serviceForm">
      <label>Service Type:
        <select name="type" required>
          <option value="normal">Normal</option>
          <option value="emergency">Emergency</option>
        </select>
      </label>

      <label>Vehicle Reg:
        <input type="text" name="reg" required />
      </label>

      <label>Make & Model:
        <input type="text" name="make_model" required />
      </label>

      <label>Preferred Date/Time:
        <input type="datetime-local" name="datetime" required />
      </label>

      <label>Location:
        <input type="text" name="location" placeholder="Postcode or address" required />
      </label>

      <label>Extra Notes:
        <textarea name="notes" placeholder="Tell us more..."></textarea>
      </label>

      <button type="submit">Book Now</button>
    </form>

    <div id="statusMsg"></div>
  </main>

  <script>
    document.getElementById("serviceForm").addEventListener("submit", async function (e) {
      e.preventDefault();
      const formData = new FormData(this);
      const data = Object.fromEntries(formData.entries());

      const res = await fetch("https://your-api-url/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();
      document.getElementById("statusMsg").innerText = result.message || "Submitted!";
    });

    function toggleMenu() {
      alert("Menu clicked — future nav goes here.");
    }
  </script>
</body>
</html>