const express = require("express");
const cors = require("cors");

const app = express();

// ✅ middleware
app.use(cors());
app.use(express.json());

// ✅ sample data
const colleges = [
  {
    id: 1,
    name: "IIT Hyderabad",
    location: "Hyderabad",
    fees: "₹2,00,000",
    rating: 4.8,
  },
  {
    id: 2,
    name: "NIT Warangal",
    location: "Warangal",
    fees: "₹1,50,000",
    rating: 4.5,
  },
  {
    id: 3,
    name: "IIIT Hyderabad",
    location: "Hyderabad",
    fees: "₹3,00,000",
    rating: 4.7,
  },
];

// ✅ ROOT ROUTE (important for testing)
app.get("/", (req, res) => {
  res.send("Backend is working 🚀");
});

// ✅ GET ALL COLLEGES
app.get("/api/colleges", (req, res) => {
  res.json(colleges);
});

// ✅ GET COLLEGE BY ID
app.get("/api/colleges/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const college = colleges.find((c) => c.id === id);

  if (!college) {
    return res.status(404).json({ message: "Not found" });
  }

  res.json(college);
});

// ✅ PORT FIX FOR RENDER
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});