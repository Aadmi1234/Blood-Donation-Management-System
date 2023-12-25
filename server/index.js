import express from "express";
import cors from 'cors';
import { getCenters, checkApp, submitForm } from "./database.js";

const app = express();
app.use(cors());
const port = 8080;

app.use(express.json());
// app.use(function (req, res, next) {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader("Access-Control-Allow-Credentials", "true");
//   res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
//   res.setHeader(
//     "Access-Control-Allow-Headers",
//     "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"
//   );
// });

app.get("/", (req,res)=>{
  res.json({
    message: "Docker is sexy!!🔥"
  })
});

app.get("/getCenters", async (req, res) => {
  const centers = await getCenters();
  res.send(centers);
});

app.post("/checkApp", async (req, res) => {
  const { app_id } = req.body;
  const details = await checkApp(app_id);
  res.send(details);
});

app.post("/submitForm", async (req, res) => {
  // take data from req body and insert in the db
  // send back appID in the res body
  const newUser = req.body;

  const result = await submitForm(newUser);
  res.send(result);
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
