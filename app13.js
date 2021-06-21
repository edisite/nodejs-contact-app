const http = require('http');
const fs = require('fs');
const port = 3000;

http
    .createServer((req, res) =>{
        res.writeHead(200,{
            'Content-Type': 'text/html',
        });

        const url = req.url;
        if(url==='/about'){
            res.write('<h1>halaman about</h1>')
            res.end();
        }        
        else if(url==='/contact'){
            res.write('<h1>halaman contact</h1>')
            res.end();
        }else{
            // res.write('hello worrld');
            fs.readFile('./index.html',(err, data) => {
                if(err){
                    res.writeHead(404);
                    res.write('errror file not found');
                }else{
                    res.write(data);
                }
                res.end();

            });
        }

    })
    .listen(port, () =>{
        console.log(`server is listening on port ${port}`);
    }

    );
