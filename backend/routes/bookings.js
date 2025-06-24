// POST /bookings
app.post('/bookings', async (req, res) => {
  const { type, reg, make_model, datetime, location, notes } = req.body;
  try {
    const booking = await prisma.booking.create({
      data: { type, reg, make_model, datetime: new Date(datetime), location, notes }
    });
    res.json({ message: "Booking received", booking });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});