const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = process.env.PORT || 5000;
const userRoutes = require("./routes/user");


// Connect to MongoDB

mongoose.connect("mongodb://localhost:27017", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

// Connection Successful & Connection Error

const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connect Error:"));
db.once("open", function () {
	console.log("Connected to MongoDB");
});

// Bodyparser Middleware
app.use(express.json());

// Route Handlers
app.get("/", (req, res) => {
	res.send("Hello from Express");
});

// Start Server
app.listen(port, () => {
	console.log(`Server started on port ${port}`);
});

app.use("/user", userRoutes);


