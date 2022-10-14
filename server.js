const http = require("http")

http
    .createServer((request, response) => {
        response.writeHead(200, { 'Content-Type': 'application/json' })

        if (request.url === "/produto") {
            response.end(
                JSON.stringify({
                    message: "Rota do produto",
                })
            );
        }

        if (request.url === "/usuarios") {
            response.end(
                JSON.stringify({
                    message: "Rota do usuário",
                })
            );
        }
    })
    .listen(3000, () => console.log("Servidor rodando na porta 3000"));

