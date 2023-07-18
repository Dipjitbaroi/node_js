// // const mysql = require("mysql");
// import mysql from "mysql";
// const express = require("express");
import express from "express";
import userRoute from "./routes/users.js";
// const bcrypt = require('bcrypt');
// import bcrypt from "bcrypt";
// // const jwt = require('jsonwebtoken');
// import jwt from "jsonwebtoken";
// // const dotenv = require("dotenv");
// import dotenv from "dotenv";
// const { checkToken } = require("./middleware/checkToken");
// const User = require('./models/User');
const app = express();

// dotenv.config({ path: './.env'});

app.use(express.json());


// const connection = mysql.createConnection({
//   host: process.env.DATABASE_HOST,
//   user: process.env.DATABASE_USER,
//   password: process.env.DATABASE_PASSWORD,
//   database: process.env.DATABASE,
//   port: process.env.DATABASE_PORT
// });

// connection.connect((error) => {
//   if (error) throw error;
//   console.log("Connected to the database");
// });

// app.get('/', (req, res) => {
//   res.send("aise aise");
// });

// app.post('/', (req, res) => {
//   console.log('aise1');
//   const name = req.body.name;
//   const roll = req.body.roll;
//   const gender = req.body.gender;
//   const age = req.body.age;
//   const reg_number = req.body.reg_number;
//   const gpa = req.body.gpa;
//   const group_name = req.body.group_name;

//   const sql = "INSERT INTO student_details(Roll, Name, Gender, Age) VALUES (" + roll + ", '" + name + "', '" + gender + "', " + age + ")";
//   // Corrected the missing semicolon in the SQL query string
//   const sql2 = "INSERT INTO exam_result(Reg_Number, Roll, GPA, Group_Name) VALUES (" + reg_number + ", " + roll + ", " + gpa + ", '" + group_name + "')";

//   console.log('aise2');

//   connection.query(sql,(error, result) => {
//     if (error) throw error;
//     console.log(result);
//     // res.send("Your data is inserted into the student_details:");
//   });
//   connection.query(sql2,(error, result) => {
//     if (error) throw error;
//     res.send("Your data is inserted into the exam_result:");
//   });
// });


// app.post('/signup', (req, res) => {
//     const { username, password } = req.body;
  
//     // Hash the password
//     bcrypt.hash(password, 10, (error, hashedPassword) => {
//       if (error) {
//         console.error('Error hashing password:', error);
//         res.status(500).json({ error: 'Internal server error' });
//       } else {
//         // Store the user in the database
//         const query = 'INSERT INTO users (username, password) VALUES (?, ?)';
//         connection.query(query, [username, hashedPassword], (error) => {
//           if (error) {
//             console.error('Error creating user:', error);
//             res.status(500).json({ error: 'Internal server error' });
//           } else {
//             res.status(201).json({ message: 'User created successfully' });
//           }
//         });
//       }
//     });
//   });

// app.post('/login', (req, res) => {
//   console.log("login e aise")
//     const { username, password } = req.body;

//     // Retrieve the user from the database
//     const query = 'SELECT * FROM users WHERE username = ?';
//     connection.query(query, [username], (error, results) => {
      
//       if (error) {
//         console.error('Error retrieving user:', error);
//         res.status(500).json({ error: 'Internal server error' });
//       } else if ( results.length === 0 ) {
//         res.status(401).json({ error: 'Invalid credentials1' });
//       } else {
//         const user = results[0];
  
//         // Compare the provided password with the stored hashed password
//         bcrypt.compare(password, user.password, (error, result) => {
//           console.log(result);
//           if (error) {
//             console.error('Error comparing passwords:', error);
//             res.status(500).json({ error: 'Internal server error' });
//           } else if (!result) {
//             res.status(401).json({ error: 'Invalid credentials2' });
//           } else {
//             // Create a JWT token
//             const token = jwt.sign({ username: user.username }, process.env.SECRET_KEY, {
//               expiresIn: '1h' // Token will expire in 1 hour
//             });
  
//             res.status(200).json({ token: token });
//             console.log(token);
//           }
//         });
//       }
//     });
//   });
// app.post('/signup', async (req, res) => {
//   const { username, password } = req.body;

//   try {
//     // Hash the password
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Create the user in the database
//     const user = await User.create({
//       username: username,
//       password: hashedPassword
//     });

//     res.status(201).json({ message: 'User created successfully' });
//   } catch (error) {
//     console.error('Error creating user:', error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });

// app.post('/login', async (req, res) => {
//   const { username, password } = req.body;

//   try {
//     // Retrieve the user from the database
//     const user = await User.findOne({ where: { username: username } });

//     if (!user) {
//       res.status(401).json({ error: 'Invalid credentials' });
//       return;
//     }

//     // Compare the provided password with the stored hashed password
//     const passwordMatch = await bcrypt.compare(password, user.password);

//     if (!passwordMatch) {
//       res.status(401).json({ error: 'Invalid credentials' });
//       return;
//     }

//     // Create a JWT token
//     const token = jwt.sign({ username: user.username }, process.env.SECRET_KEY, {
//       expiresIn: '1h' // Token will expire in 1 hour
//     });

//     res.status(200).json({ token: token });
//   } catch (error) {
//     console.error('Error retrieving user:', error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });
app.use('/user',userRoute);
// app.get("/get_user",checkToken,(req,res) => {
  
//   console.log("username");
//   return res.send("Username=,Password=");
  
// });

app.listen(5001, () => {
  console.log("Server is running on port 5001");
});