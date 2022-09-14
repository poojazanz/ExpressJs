const express = require("express");
const server = express();
const student = require("./studentList.json");

server.post("/student", (req, res) => {
  console.log(student);
  res.send("dummy");
});

server.get("/student/studentList", (req, res) => {
  res.send(student);
});

server.listen(3001, () => {
  console.log("Server started at port no 3001");
});
