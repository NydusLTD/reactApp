const express = require('express');
const router = express.Router();
const User = require("./models/User");

// Define a route to get all users
router.get("/", (req, res) => {
	User.find()
		.then(users => res.json(users))
		.catch(error => res.status(400).json("Error: " + error));
});

// Define a route to add a new userAgent
router.post("/add", (req, res) => {
	const name = req.body.name;
	const email = req.body.email;
	const password = req.body.password;
	
	const newUser = new User({
		name,
		email,
		password
	});
	
	newUser
	.save()
	.then(() => res.json("User added!"))
	.catch(error => res.status(400).json("Error: " + error));
});

module.exports = router;
module.exports = User;