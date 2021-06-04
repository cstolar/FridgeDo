// imports and configs
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { MongoClient } from "mongodb";
import ToDo from "./models/todo";
import todo from "./models/todo";

dotenv.config();

// here comes Mongo
mongoose.connect(process.env.DB_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Database connected");
});

// app here
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.redirect("/todos");
});

app.get("/todos", (req, res) => {
  ToDo.find({ finished: "true" }, function (err, Todo) {
    if (err) {
      console.log(err);
    }
    res.send(Todo);
  });
});

app.get("/todos/:id", async (req, res) => {
  const { id } = req.params;
  const todo = await ToDo.findById(id);
  if (!todo) {
    res.redirect("/");
  }
  console.log(todo);
  res.send(todo);
});

app.post("/todos", (req, res) => {
  const todo = new ToDo(req.body);
  todo.save();
  console.log("New Todo created:", todo);
  res.send(todo);
});

app.listen(process.env.HOST_PORT, () => {
  // tslint:disable-next-line:no-console
  console.log(`The application is listening on port 4040!`);
});
