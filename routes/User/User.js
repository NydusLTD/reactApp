const User = require("./models/User");

const newUser = new User({
	name: "Caden Hudson",
	email: "caden.d.hudson@gmail.com",
	password: "testing",
});

newUser
	.save()
	.then(user => console.log("User saved: ", user))
	.catch(error => console.error("Error saving user:", error));