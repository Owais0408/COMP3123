var http = require("http");
const employeeModule = require('./employee'); 

console.log("Lab 03 - NodeJs");

// Define Server Port
const port = process.env.PORT || 8082;

// Create Web Server using CORE API
const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json'); 

    if (req.method !== 'GET') {
        res.writeHead(405); // Method Not Allowed
        res.end(`{"error": "${http.STATUS_CODES[405]}"}`);
        return; 
    }

    if (req.url === '/') {
        res.writeHead(200); // OK
        res.end(`{"message": "<h1>Welcome to Lab Exercise 03</h1>"}`);
        return;
    }

    if (req.url === '/employee') {
        const employees = employeeModule.getAllEmployees(); 
        res.writeHead(200); // OK
        res.end(JSON.stringify(employees));
        return;
    }

    if (req.url === '/employee/names') {
        const employees = employeeModule.getAllEmployees();
        const names = employees.map(emp => `${emp.firstName} ${emp.lastName}`).sort();
        res.writeHead(200); // OK
        res.end(JSON.stringify(names));
        return;
    }

    if (req.url === '/employee/totalsalary') {
        const employees = employeeModule.getAllEmployees();
        const totalSalary = employees.reduce((sum, emp) => sum + emp.salary, 0);
        res.writeHead(200); // OK
        res.end(JSON.stringify({ total_salary: totalSalary }));
        return;
    }

    // If no route matched
    res.writeHead(404); // Not Found
    res.end(`{"error": "${http.STATUS_CODES[404]}"}`);
});

// Start the server
server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
