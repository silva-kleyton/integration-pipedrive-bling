import "dotenv/config";
import express from "express";
import routes from "./routes";
// import "./db";
const app = express();

app.use(express.json());
app.use(routes);

app.listen(process.env.PORT || 3000, () => {
    console.log(`Servidor rodando na porta: ${process.env.PORT || 3000}`);
    console.log(`Servidor rodando no ambiente: ${process.env.ENVIRONMENT}`);
});
