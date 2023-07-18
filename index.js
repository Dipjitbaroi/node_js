const mysql = require("mysql");
const express = require("express");
const dotenv = require("dotenv")
const app = express();
dotenv.config({ path: './.env'});
app.use(express.json());
const con = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE,
  port: process.env.DATABASE_PORT
});

con.connect((error) => {
  if (error) throw error;
  console.log("Connected to the database");
});

app.get('/', (req, res) => {
  res.send("aise aise");
});

app.post('/', (req, res) => {
  console.log('aise1');
  const name = req.body.name;
  const roll = req.body.roll;
  const gender = req.body.gender;
  const age = req.body.age;
  const reg_number = req.body.reg_number;
  const gpa = req.body.gpa;
  const group_name = req.body.group_name;

  const sql = "INSERT INTO student_details(Roll, Name, Gender, Age) VALUES (" + roll + ", '" + name + "', '" + gender + "', " + age + ")";
  // Corrected the missing semicolon in the SQL query string
  const sql2 = "INSERT INTO exam_result(Reg_Number, Roll, GPA, Group_Name) VALUES (" + reg_number + ", " + roll + ", " + gpa + ", '" + group_name + "')";

  console.log('aise2');

  con.query(sql,(error, result) => {
    if (error) throw error;
    console.log(result);
    // res.send("Your data is inserted into the student_details:");
  });
  con.query(sql2,(error, result) => {
    if (error) throw error;
    console.log(result);
    res.send("Your data is inserted into the exam_result:");
  });
});

app.listen(5001, () => {
  console.log("Server is running on port 5001");
});