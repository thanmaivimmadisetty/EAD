// Import http module
const http = require('http');

// Create server
const server = http.createServer((req, res) => {

    // Set common header
    res.writeHead(200, { 'Content-Type': 'text/html' });

    // Routing
    if (req.url === '/') {
        res.end(`
            <html>
                <head><title>Home</title></head>
                <body>
                    <h1>Welcome to Home Page</h1>
                    <p>This is the homepage.</p>
                </body>
            </html>
        `);
    }

    else if (req.url === '/about') {
        res.end(`
            <html>
                <head><title>About</title></head>
                <body>
                    <h1>About Us</h1>
                    <p>This page contains information about us.</p>
                </body>
            </html>
        `);
    }

    else if (req.url === '/contact') {
        res.end(`
            <html>
                <head><title>Contact</title></head>
                <body>
                    <h1>Contact Us</h1>
                    <p>Email: example@email.com</p>
                </body>
            </html>
        `);
    }

    else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end(`
            <html>
                <body>
                    <h1>404 - Page Not Found</h1>
                </body>
            </html>
        `);
    }
});

// Start server
server.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});