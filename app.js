require("dotenv").config();
//Async errors

const express = require("express");
const app = express();

const connectDB = require("./db/connect");
const productRouter = require("./routes/products");

const notFound = require("./middleware/not-found");
const errorHandler = require("./middleware/error-handler");

// Middleware

app.use(express.json());

app.get("/", (req, res) => {
  res.send('<h1> Store Api <h1/><a href="/api/v1/products"> products<a/>');
});

app.use("/api/v1/products", productRouter);

//products route
app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || 3030;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Server is listening on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
