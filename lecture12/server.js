const express = require('express');
const app = express();
const { getEmployees, getEmployeeById, addEmployee, updateEmployee, deleteEmployee } = require("./Controller/empolyeeController");
const employees = require('./Data/employeeData');
const employeesRoutes = require("./Routes/employeeRoutes");

app.use(express.json());

app.use("/",employeesRoutes);

app.listen(5000, () => {
    console.log("Server is running on port 5000");
});
