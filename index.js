require("dotenv").config();
const express = require("express");
const PORT = process.env.PORT;

const morgan = require("morgan");
const helmet = require("helmet");

const userRoute = require("./api/routes/loginRoute");

const server = express();
server.use(morgan("combined"));
server.use(helmet());
server.use(express.json());

server.use("/user", userRoute);

server.use("/", (req, res) => {
  res.status(200).send("Api is running");
});

server.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});
