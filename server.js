const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello employees!");
});


app.use("/employees", require("./router"))


app.use((req, res, next) => {
  next({ status: 404, message: "Endpoint not found."})
})

app.listen(PORT, () => {
  `Listening on port ${PORT}...`;
});
