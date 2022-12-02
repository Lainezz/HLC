const path = require("path");
const fs = require("fs")
const fsPromise = require("fs").promises;

const lecturaFichero = async () => {
  try {
    const datos = await fsPromise.readFile(
      path.join(__dirname, "logs", "log.txt"),
      "utf8"
    );

    await fsPromise.writeFile(
      path.join(__dirname, "logs", "log.txt"),
      `${datos}\nUsando Promesas`
    );
  } catch (err) {
    throw "Error al leer o escribir";
  }
};

//Equivalente al addEventListener
process.on("uncaughtException", (err) => {
  console.log(`Excepcion capturada: ${err}`);
  process.exit(1);
});

//<link href="styles.css" rel="stylesheet" type="text/css">
