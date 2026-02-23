const express = require("express");
const app = express();

app.use(express.json());


let students = [
    { id: 1, name: "Alice", age: 21, course: "Math" },
    { id: 2, name: "Bob", age: 22, course: "Physics" }
];


const logger = (req, res, next) => {
    console.log(`Method: ${req.method} | URL: ${req.url} | Time: ${new Date().toLocaleString()}`);
    next(); 
};

app.use(logger);


const validateStudent = (req, res, next) => {
    const { name, age, course } = req.body;

    if (!name || !age || !course) {
        return res.status(400).json({
            message: "All fields (name, age, course) are required"
        });
    }

    if (typeof age !== "number") {
        return res.status(400).json({
            message: "Age must be a number"
        });
    }

};


app.get("/students", (req, res) => {
    res.json(students);
});


app.post("/students", validateStudent, (req, res) => {
    const { name, age, course } = req.body;

    const newStudent = {
        id: students.length ? students[students.length - 1].id + 1 : 1,
        name,
        age,
        course
    };

    students.push(newStudent);

    res.status(201).json(newStudent);
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});