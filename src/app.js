import express from "express";
import morgan from "morgan";
import records from "./db/data";

import dataRoutes from "./routes/data";

const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.use("/", dataRoutes);

app.get("/api/v1/on-covid-19", (req, res) => {
  res.status(200).json({
    data: records[0],
  });
  //   next();
});

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to Covid-19 Estimator",
  });
  //   next();
});

export default app;
