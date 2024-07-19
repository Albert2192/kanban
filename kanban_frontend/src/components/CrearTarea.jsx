// src/components/CreatePost.jsx
import React, { useState } from "react";
import axios from "../config/axiosConfig";

const CrearTarea = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("/tareas", { title, body })
      .then((response) => {
        console.log("Post created:", response.data);
      })
      .catch((error) => {
        console.error("There was an error creating the post!", error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label>Body:</label>
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
      </div>
      <button type="submit">Create Post</button>
    </form>
  );
};

export default CrearTarea;
