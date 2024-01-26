import { useState } from "react";
import { Link  } from "react-router-dom";
import axios from 'axios'
export function CreateTodo(props) {
  // react-query
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };
  const handleAddTodo = () => {
   
    axios.post("http://localhost:3000/todo", {
      title: title,
      description: description,
    })
      .then(() => {
        setTitle("");
        setDescription("");
      })
      .catch((error) => {
        console.error("Error adding todo:", error);
      });
  };


  return (
    <div>
      <input
        id="title"
        style={{
          padding: 10,
          margin: 10
        }}
        type="text"
        placeholder="title"
        value={title}
        onChange={handleTitleChange}
      />
      <br />

      <input
        id="desc"
        style={{
          padding: 10,
          margin: 10
        }}
        type="text"
        placeholder="description"
        value={description}
        onChange={handleDescriptionChange}
      />
      <br />

      <button
        style={{
          padding: 10,
          margin: 10
        }}
        onClick={handleAddTodo}
      >
        Submit
      </button>
        <br />
        <br />
        <Link to="/">HOME</Link>
      <br />
      <br />
      <Link to="/todos">Show TODO</Link>
    </div>
  );
}
