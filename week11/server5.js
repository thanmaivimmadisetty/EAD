const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const app = express();
app.use(express.json());

const SECRET = "mysecretkey";


let users = [];

app.post("/signup", async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: "Username and password required" });
    }


    const existingUser = users.find(u => u.username === username);
    if (existingUser) {
        return res.status(409).json({ message: "User already exists" });
    }

    try {
     
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = {
            username,
            password: hashedPassword
        };

        users.push(newUser);

        res.status(201).json({ message: "User registered successfully" });
    } catch (err) {
        res.status(500).json({ message: "Error registering user" });
    }
});


app.post("/login", async (req, res) => {
    const { username, password } = req.body;

    const user = users.find(u => u.username === username);
    if (!user) {
        return res.status(401).json({ message: "Invalid credentials" });
    }

    try {
        // Compare password
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        // Generate token
        const token = jwt.sign({ username: user.username }, SECRET, {
            expiresIn: "1h"
        });

        res.json({ token });

    } catch (err) {
        res.status(500).json({ message: "Login error" });
    }
});


function verifyToken(req, res, next) {
    const authHeader = req.headers["authorization"];

    if (!authHeader) {
        return res.status(403).json({ message: "Token required" });
    }

    const token = authHeader.split(" ")[1];

    try {
        const decoded = jwt.verify(token, SECRET);
        req.user = decoded;
        next();
    } catch (err) {
        return res.status(401).json({ message: "Invalid token" });
    }
}

app.get("/dashboard", verifyToken, (req, res) => {
    res.json({
        message: "Welcome to dashboard",
        user: req.user
    });
});


app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});