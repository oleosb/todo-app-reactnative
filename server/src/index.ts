import express from "express";
import "./db";
import noteRouter from "./routes/note.route";
import cors from "cors";

// create a server
const app = express();

app.use(cors());

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

interface IncomingBody {
  title: string;
  description?: string;
}

app.use("/note", noteRouter);

// listen to some port
app.listen(8000, () => {
  console.log("Listening");
});
