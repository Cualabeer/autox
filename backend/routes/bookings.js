const express = require('express');
const router = express.Router();
const prisma = require('../db');

router.post('/', async (req, res) => {
  const { service, time, description, location } = req.body;
  try {
    const booking = await prisma.booking.create({
      data: { service, time, description, location },
    });
    res.json(booking);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/', async (req, res) => {
  const bookings = await prisma.booking.findMany({ orderBy: { createdAt: 'desc' } });
  res.json(bookings);
});

module.exports = router;
