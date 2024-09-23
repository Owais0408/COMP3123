// employee.js

let employees = [
    { id: 1, firstName: "Pritesh", lastName: "Patel", email: "pritesh@gmail.com", salary: 5000 },
    { id: 2, firstName: "Krish", lastName: "Lee", email: "krish@gmail.com", salary: 4000 },
    { id: 3, firstName: "Racks", lastName: "Jacson", email: "racks@gmail.com", salary: 5500 },
    { id: 4, firstName: "Denial", lastName: "Roast", email: "denial@gmail.com", salary: 9000 }
];

// Function to get all employees
const getAllEmployees = () => employees;

// Function to add a new employee
const addEmployee = (firstName, lastName, email, salary) => {
    const id = employees.length ? employees[employees.length - 1].id + 1 : 1; // Ensure unique ID
    const newEmployee = { id, firstName, lastName, email, salary };
    employees.push(newEmployee);
    return newEmployee;
};

// Function to get an employee by ID
const getEmployeeById = (id) => employees.find(emp => emp.id === id);

// Function to remove an employee by ID
const removeEmployee = (id) => {
    const index = employees.findIndex(emp => emp.id === id);
    if (index !== -1) {
        return employees.splice(index, 1)[0]; // Remove and return the employee
    }
    return null;
};

// Export the functions
module.exports = {
    getAllEmployees,
    addEmployee,
    getEmployeeById,
    removeEmployee
};
