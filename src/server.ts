import dotenv from "dotenv";
dotenv.config();

import http from "node:http";
import app from "./app.ts";
import { styleText } from "node:util";

const server = http.createServer(app);
const PORT = process.env.PORT || 3001;

server.listen(PORT, () => {
  console.log(
    `Server running on ${styleText(
      ["underline", "blue", "bold"],
      `http://localhost:${PORT}`,
    )} `,
  );
});
