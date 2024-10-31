import { config } from "dotenv";
import express from "express";
import studentRoutes from "./routes/student";
import testRoutes from "./routes/test";
import unknownResource from "./middlewares/unknown-resource";
import unknownError from "./middlewares/unkown-error";

config();

const app = express();

app.use(express.json());

app.use("/student", studentRoutes);

// Ruta de pruebas
app.use("/error", testRoutes);

// Middlewares
app.use(unknownResource); // Error 404

// Middleware de error
app.use(unknownError);

app.listen(process.env.SERVER_PORT, function () {
  console.log("Escuchando puerto " + process.env.SERVER_PORT);
});
