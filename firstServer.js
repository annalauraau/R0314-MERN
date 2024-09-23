var http = require('http');

//sednd http header, HTTP status: 200 : OK, Content Type: text/plain
http.createServer(function (req, res) {
    if(req.url === '/') {
     res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('This is my first node.js server\n');   
    }
    else if(req.url === '/myBlog'){
        res.writeHead(200, {'Content-Type': 'text/html'});

        res.write(`
            <h1>This is the home page of my Blog</h1>
            <table border="1" style="border-collapse: collapse; border-color: black;">
                <tr>
                    <td>Nimi</td>
                    <td>Anna</td>
                    <td>Huotari</td>
                </tr>
                <tr>
                    <td>Osoite</td>
                    <td>katu</td>
                    <td>34</td>
                </tr>
                <tr>
                    <td>posti</td>
                    <td>anna.huotari</td>
                    <td>@gmail.com</td>
                </tr>
            </table>
        `);
        res.end();
    }
}
).listen (3000);

// console will print the message
console.log('Server running at http://localhost:3000/');



