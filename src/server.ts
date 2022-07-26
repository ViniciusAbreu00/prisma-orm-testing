import express from "express";
import { router } from "./routes";
const port = 8080;
const server = express();

server.use(express.json());
server.use(router);

server.listen(port, () => {
  console.log(`[server]: Server is running at https://localhost:${port}`);
});
