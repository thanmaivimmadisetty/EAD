const express = require('express'); 

const app = express(); 

app.use(express.json()); 

const student = [ 
    { id: 101, name: "Rahul", branch: "IT" }, 
    { id: 102, name: "Arjun", branch: "IT" }, 
    { id: 103, name: "Neha", branch: "IT" }, 
    { id: 104, name: "Kavya", branch: "IT" } 
]; 

app.get('/home', (req, res) => { 
    res.send("Welcome to the Home Page!"); 
}); 

app.get('/login', (req, res) => { 
    res.send("Hi! I am in the Login Page"); 
}); 

app.get('/student', (req, res) => { 
    res.json(student); 
}); 

app.post('/students', (req, res) => { 
    const newstudent = req.body; 
    student.push(newstudent); 
    res.json(student); 
}); 

app.listen(3000, () => { 
    console.log("Server Running on port Number 3000"); 
});