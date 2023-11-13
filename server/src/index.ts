import express from "express";
import "./db";
import Note, { NoteDocument } from "./models/note";
import { title } from "process";
import {
  create,
  getAllNotes,
  getSingleNote,
  removeSingleNote,
  update,
} from "./controllers/note.controller";

// create a server
const app = express();

// this will parse post request comming from fetch.post() method
app.use(express.json());

// this will parse post request comming from html form
app.use(express.urlencoded({ extended: false }));

// how express works
// app.use((req, res, next) => {
//   // read the data and we want to add that to req.body
//   req.on("data", (chunk) => {
//     // manipulate thing here
//     req.body = JSON.parse(chunk);
//     next();
//   });
// });

app.post("/", (req, res) => {
  //here we need data so that we can create new note/todo
  console.log(req.body);
  res.json({ message: "I'm listening" });
});

interface IncomingBody {
  title: string;
  description?: string;
}

app.post("/create", create);

app.patch("/:noteId", update);

app.delete("/:noteId", removeSingleNote);

app.get("/", getAllNotes);

app.get("/:id", getSingleNote);

// listen to some port
app.listen(8000, () => {
  console.log("Listening");
});
