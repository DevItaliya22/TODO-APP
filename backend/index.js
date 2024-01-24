const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

app.post("/todo", async function (req, res) {
  const createPayload = req.body;
  const parsedPayload = createTodo.safeParse(createPayload);

  if (!parsedPayload.success) {
    return res.status(400).json({
      error: "Invalid input. Please check your payload.",
    });
  }

  try {
    // put it in mongodb
    await todo.create({
      title: createPayload.title,
      description: createPayload.description,
      completed: false,
    });

    res.json({
      msg: "Todo created",
    });
  } catch (error) {
    console.error("Error creating todo:", error);
    res.status(500).json({
      error: "Internal Server Error",
    });
  }
});

app.get("/todos", async function (req, res) {
  try {
    const todos = await todo.find({});
    res.json({
      todos: todos,
    });
  } catch (error) {
    console.error("Error fetching todos:", error);
    res.status(500).json({
      error: "Internal Server Error",
    });
  }
});

app.put("/completed", async function (req, res) {
  const updatePayload = req.body;
  const parsedPayload = updateTodo.safeParse(updatePayload);

  if (!parsedPayload.success) {
    return res.status(400).json({
      error: "Invalid input. Please check your payload.",
    });
  }

  try {
    await todo.updateOne(
      { _id: req.body.id },
      {
        $set: { completed: true },
      }
    );

    res.json({
      msg: "Todo marked as completed",
    });
  } catch (error) {
    console.error("Error updating todo:", error);
    res.status(500).json({
      error: "Internal Server Error",
    });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
