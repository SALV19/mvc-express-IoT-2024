import { findStudents } from "./services/student";
import { config } from "dotenv";
import express from "express";
import { getStudents } from "./controllers/student";
import studentRoutes from "./routes/student";

config();

const app = express();

app.listen(process.env.SERVER_PORT, function () {
  console.log("Escuchando puerto " + process.env.SERVER_PORT);
});

app.use(express.json());

app.use("/student", studentRoutes);
