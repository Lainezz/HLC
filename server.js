const http = require("http")
const fs = require("fs")
const path = require("path")

//habría que obtener un puerto
const PORT = process.env.PORT || 3500

const serverClase = http.createServer((req, res) => {
    //req = request = petición
    //req contiene la petición que se realiza al servidor
    //res = response = respuesta
    console.log(`path usado: ${req.url} con método ${req.method}`)

    let contentType
    let extension = path.extname(req.url)

    switch (extension) {
        case ".css":
            contentType = "text/css"
            break;
    
        default:
            contentType = "text/html"
            break;
    }
    
    
    if(req.url === "/" || req.url === "index.html"){
        res.statusCode = 200
        res.statusMessage = "OK"
        res.setHeader("Content-Type", contentType)

        fs.readFile(path.join((__dirname), "views", "index.html"), "utf8", (err, data) => {
          res.end(data);
        });
    }

    if(req.url !== "/" && req.url === "/styles.css"){
        res.statusCode = 200;
        res.statusMessage = "OK";
        res.setHeader("Content-Type", contentType);

        fs.readFile(
          path.join(__dirname, "css", "styles.css"),
          "utf8",
          (err, data) => {
            res.end(data);
          }
        );
    }

})

serverClase.listen(PORT, () => console.log(`Servidor escuchando en puerto ${PORT}`))