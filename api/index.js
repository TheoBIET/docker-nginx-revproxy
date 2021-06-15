import express from "express";
import cors from "cors";
import {port} from "./config.js";

const app = express();

console.log(port);

if (process.env["NODE_ENV"] === "development") {
  console.log("API switch to developpement mode");
  app.use(cors());
}

app.get("/", (req, res) => {
  return res.json({
    status: 200,
    data: {
      message: "Hello from Express!"
    }
  });
});

app.listen(port, () => console.log(`API Listening at http://localhost:${port}`));
