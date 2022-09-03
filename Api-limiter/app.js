const express = require("express");
const { default: rateLimit } = require("express-rate-limit");
const app = express();
const posts = require("./posts");

const limiter = rateLimit({
  max: 4,
  windowMs: 10000,
});

app.get("/posts", limiter, (req, res) => {
  res.send({
    status: "success",
    posts: posts,
  });
});

app.listen(5000, () => console.log("listening to port 5000"));

// setted limit to 4 seconds
