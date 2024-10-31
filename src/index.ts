import express from "express";
import studentRoutes from "./routes/student";
import testRoutes from "./routes/test";
import unknownResource from "./middlewares/unknown-resource";
import unknownError from "./middlewares/unkown-error";
import validationError from "./middlewares/validation-errors";
import dotenvFlow from "dotenv-flow";

if (process.env.NODE_ENV != "production") {
  dotenvFlow.config();
}

const app = express();

app.use(express.json());

app.use("/api/v1/student", studentRoutes);

// Ruta de pruebas
app.use("/api/v1/error", testRoutes);

// Middlewares
app.use(validationError); // Error de validación
app.use(unknownResource); // Error 404

// Middleware de error
app.use(unknownError);

app.listen(process.env.SERVER_PORT, function () {
  console.log("Escuchando puerto " + process.env.SERVER_PORT);
});
