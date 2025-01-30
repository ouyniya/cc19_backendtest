require("dotenv").config();
const express = require("express");
const errHandler = require('./middlewares/error')
const notFound = require("./middlewares/notfound");
const cors = require('cors')

const postRoute = require("./routes/post-routes");
const userRoute = require("./routes/user-routes");
const authRoute = require("./routes/auth-routes");
const todoRoute = require("./routes/todo-routes");
const app = express();
const createError = require("./utils/createError");

app.use(express.json());

app.use("/post", postRoute);
app.use("/user", userRoute);
app.use("/auth", authRoute);
app.use("/todo", todoRoute);
app.use(notFound)
app.use(errHandler);
app.use(createError);
app.use(cors)

app.listen("8000", () => console.log("Server is running on port 8000"));
