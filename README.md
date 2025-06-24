# AutoX

AutoX is a modern platform for mobile mechanic service bookings with an admin dashboard and responsive frontend.

## Setup Instructions

### Backend

1. Install dependencies:
```bash
cd backend
npm install
```

2. Copy `.env.example` to `.env` and set your `DATABASE_URL`.

3. Run Prisma migrations:
```bash
npx prisma db push
```

4. Start the backend server:
```bash
npm start
```

### Frontend

Open `frontend/index.html` in your browser to use the booking form.

## Deployment

- Deploy backend to Railway with the environment variable `DATABASE_URL`.
- Deploy frontend to GitHub Pages or any static host.
