const Employee = require("../models/Employee");

// CREATE EMPLOYEE
exports.createEmployee = async (req, res) => {
  try {
    const { name, email, salary, joining_date, department, age } = req.body;

    if (!name || !email || !salary || !joining_date || !department || !age) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const hra = salary * 0.30;

    const employee = await Employee.create({
      name,
      email,
      salary,
      HRA: hra,
      joining_date,
      department,
      age,
    });

    res.status(201).json(employee);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET ALL EMPLOYEES
exports.getEmployees = async (req, res) => {
  const employees = await Employee.findAll();
  res.json(employees);
};

// UPDATE EMPLOYEE
exports.updateEmployee = async (req, res) => {
  const { salary } = req.body;
  const hra = salary * 0.30;

  await Employee.update(
    { ...req.body, HRA: hra },
    { where: { e_id: req.params.id } }
  );

  res.json({ message: "Employee updated successfully" });
};

// DELETE EMPLOYEE
exports.deleteEmployee = async (req, res) => {
  await Employee.destroy({ where: { e_id: req.params.id } });
  res.json({ message: "Employee deleted successfully" });
};
