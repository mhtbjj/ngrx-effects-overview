// First Approach : By Express Node App server.js *** Custom Script Command - "npm run server" or "node server.js" ***
/* Second Approach : By JSON Server, Create db.json file and place json data & then Run 
"npm install -g json-server"
"json-server --watch db.json --port 3000"
By Default CRUD operation will be available with that activity
*/
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 3000;
const movies = (module.exports = [
  {
    id: 8,
    name: "Shutter Island",
    genre: "Mystery",
    duration: 180,
    rating: 8.7,
  },
  {
    id: 9,
    name: "Forest Gump",
    genre: "Drama",
    duration: 120,
    rating: 9.5,
  },
  {
    id: 10,
    name: "Shutter Island",
    genre: "Mystery",
    duration: 150,
    rating: 9,
  },
  {
    id: 11,
    name: "American Pie",
    genre: "comedy",
    duration: 150,
    rating: 9,
  },
]);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// http://localhost:3000/
app.get("/", (req, res) => {
  res.json({ movies: movies });
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
