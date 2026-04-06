const http = require('http');

// Create server
const server = http.createServer((req, res) => {

    // Set header as JSON
    res.writeHead(200, { 'Content-Type': 'application/json' });

    // Sample data
    const data = {
        id: 1,
        name: "Arun",
        course: "CSE"
    };

    // Send JSON response
    res.end(JSON.stringify(data));
});

// Run server
server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});