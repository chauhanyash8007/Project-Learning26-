import express from "express";
const app = express();

import dbConnection from "./src/utils/DBConnection.js";
dbConnection()

//server creation...
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`server started on PORT ${PORT}`);
});