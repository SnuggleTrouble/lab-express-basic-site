const { response, request } = require("express");
const express = require("express");

const app = express();
app.use(express.static("public"));

app.get("/about", (request, response, next) =>
  response.sendFile(__dirname + "/views/about.html")
);
app.get("/home", (request, response, next) =>
  response.sendFile(__dirname + "/views/home.html")
);
app.get("/photogallery", (request, response, next) =>
  response.sendFile(__dirname + "/views/photo-gallery.html")
);
app.get("/works", (request, response, next) =>
  response.sendFile(__dirname + "/views/works.html")
);

app.use((request, response) => {
  response.status(404).send("Error 404. Page not found!");
});

app.listen(3000, () => console.log("Server is running"));
