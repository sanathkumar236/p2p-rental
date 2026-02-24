const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const userRoutes = require("./routes/userRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// 🔥 Serve frontend files
app.use(express.static("public"));

// Routes
app.use("/api/users", userRoutes);

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log(err));

// Optional (not required if using static)
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});