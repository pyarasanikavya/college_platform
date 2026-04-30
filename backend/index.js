const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const colleges = [
  { id: 1, name: "IIT Hyderabad", location: "Hyderabad", fees: "2,00,000", rating: 4.8 },
  { id: 2, name: "NIT Warangal", location: "Warangal", fees: "1,50,000", rating: 4.5 },
  { id: 3, name: "IIIT Hyderabad", location: "Hyderabad", fees: "3,00,000", rating: 4.7 },
];

// all colleges
app.get("/api/colleges", (req, res) => {
  res.json(colleges);
});

// single college
app.get("/api/colleges/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const college = colleges.find(c => c.id === id);

  if (!college) {
    return res.status(404).json({ message: "Not found" });
  }

  res.json(college);
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});