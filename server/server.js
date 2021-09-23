require("dotenv").config();
const express = require("express");
const db = require("./db");

const app = express();

app.use(express.json());

// Get all Restourants
app.get("/api/v1/restourants", async (req, res) => {
  const results = await db.query("SELECT * FROM restourants");
  console.log(results);
  res.status(200).json({
    status: "success",
    data: {
      restourant: ["mcdonalds", "wendys"],
    },
  });
});

// Get a Restourant
app.get("/api/v1/restourants/:id", (req, res) => {
  console.log(req.params);

  res.status(200).json({
    status: "success",
    data: {
      restourant: ["mcdonalds", "wendys"],
    },
  });
});

// Create a Restourant
app.post("/api/v1/restourants", (req, res) => {
  console.log(req.body);

  res.status(201).json({
    status: "success",
    data: {
      restourant: ["mcdonalds", "wendys"],
    },
  });
});

// Update a Restourant
app.put("/api/v1/restourants/:id", (req, res) => {
  console.log(req.params.id);
  console.log(req.body);

  res.status(200).json({
    status: "success",
    data: {
      restourant: ["mcdonalds", "wendys"],
    },
  });
});

//Delete Restourant
app.delete("/api/v1/restourants/:id", (req, res) => {
  console.log("Delete");

  res.status(204).json({
    status: "success",
  });
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server run and listening on port ${port}`);
});
