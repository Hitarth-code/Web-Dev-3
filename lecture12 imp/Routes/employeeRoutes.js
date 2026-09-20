const express = require('express');
const router = express.Router();
const { getEmployees, getEmployeeById, addEmployee, updateEmployee, deleteEmployee } = require("../Controller/empolyeeController")

router.get("/employees", getEmployees);

// Read Operation
router.get("/employees/:id", getEmployeeById);

router.post("/employees", addEmployee); 

router.put("/employees/:id", updateEmployee);

router.patch("/employees/:id", updateEmployee);

router.delete("/employees/:id", deleteEmployee);

module.exports = router;