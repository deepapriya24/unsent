# Unsent 🌙

A calm, private space for words you never sent.

---

## Setup

### 1. Clone & navigate
```bash
cd unsent
```

---

### 2. Backend

```bash
cd backend
npm install
```

Create your `.env` file:
```bash
cp .env.example .env
```

Edit `.env` and add your MongoDB Atlas connection string:
```
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/unsent
PORT=5000
```

Start the backend:
```bash
npm run dev        # development (nodemon)
npm start          # production
```

---

### 3. Frontend

```bash
cd ../frontend
npm install
```

Create your `.env` file:
```bash
cp .env.example .env
```

The `.env` should contain:
```
VITE_API_URL=http://localhost:5000
```

Start the frontend:
```bash
npm run dev
```

Visit: **http://localhost:5173**

---

## API Routes

| Method | Route | Description |
|--------|-------|-------------|
| GET | /messages | Fetch all messages (newest first) |
| POST | /messages | Create a new message |
| DELETE | /messages/:id | Delete a message |

---

## Tech Stack

**Backend:** Node.js, Express, MongoDB Atlas, Mongoose, CORS, dotenv

**Frontend:** React 18, Vite, Plain CSS

---

## Project Structure

```
unsent/
├── backend/
│   ├── models/
│   │   └── Message.js
│   ├── routes/
│   │   └── messages.js
│   ├── server.js
│   ├── package.json
│   └── .env.example
│
└── frontend/
    ├── src/
    │   ├── components/
    │   │   ├── MessageForm.jsx
    │   │   ├── MessageCard.jsx
    │   │   └── MessageList.jsx
    │   ├── App.jsx
    │   ├── api.js
    │   ├── main.jsx
    │   └── styles.css
    ├── index.html
    ├── package.json
    ├── vite.config.js
    └── .env.example
```

---

*Your words are safe and only yours.*
