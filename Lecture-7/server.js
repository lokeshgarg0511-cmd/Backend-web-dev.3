const http = require("http");

const users = [
    { id: 1, name: "lokesh", email: "lokeshgarg0511@gmail.com" },
    { id: 1, name: "atishay", email: "frrf1234@gmail.com" },
    { id: 1, name: "raghav", email: "gffrhj1234@gmail.com" },
    { id: 1, name: "rohit", email: "gfddfs12ds34@gmail.com" },

]

const server = http.createServer((req, res) => {
    // console.log(req.url);
    // console.log(req.method);
    //  console.log(req.headers);
    if (req.url == "/" && req.method == "GET") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("<h1>Welcome to the Home Page</h1>");
        res.end();
    } else if (req.url == "/about" && req.method == "GET") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("<h1>Welcome to the About Page</h1>");
        res.end();

    } else if (req.url == "/contact" && req.method == "GET") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("<h1>Welcome to the Contact Page</h1>");
        res.end();

    } else if (req.url == "/users" && req.method == "GET") {
        res.writeHead(200, { "contsct-Type": "application/json" });
        res.write(JSON.stringify(users));
        res.end();

    } else if (req.url == "/users" && req.method == "POST") {
        let body = "";
        req.on("data", (chunk) => {
            body += chunk
        })
        req.on("end", () => {
            const user = JSON.parse(body);
            users.push(user);
            res.writeHead(201, { "contsct-Type": "application/json" });
            res.write(JSON.stringify({"success":true, "message":"user Created successfully", "user":user}));
            res.end();

        })
    }

    else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("<h1>$404 Page Not Found</h1>");
        res.end();

    }

    // res.end("<h1>your server has send this response</h1>")
})

server.listen(3000, () => {
    console.log("server is running on port 3000")
})
