import { useState } from "react";
import { Link , useNavigate } from "react-router-dom";
export function CreateTodo(props) {
  // react-query
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const navigate=useNavigate();
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleAddTodo = () => {
    // axios
    fetch("http://localhost:3000/todo", {
      method: "POST",
      body: JSON.stringify({
        title: title,
        description: description
      }),
      headers: {
        "Content-type": "application/json"
      }
    })
      .then(async function (res) {
        const json = await res.json();
      
        // Clear input fields
        setTitle("");
        setDescription("");
        
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
