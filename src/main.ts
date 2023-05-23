import express from "express";

import { bookRouter } from "./stock_books/infrastructure/bookRouter";

const app = express();

app.use(express.json());

app.use("/books", bookRouter);

app.listen(3000, () => {
  console.log(`[Application] Server online in port 3000`);
});
