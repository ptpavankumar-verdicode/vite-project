import React, { useState } from "react";
import { usePostStore } from "../stores/usePostStore";
import styles from "./createPost.module.css";

export function CreatePost() {
  const { createPost, loading } = usePostStore();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newPost = {
      userId: 1, // Default userId
      title,
      body,
    };
    await createPost(newPost);
    setTitle("");
    setBody("");
  };

  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <h2>Create New Post</h2>
      <div className={styles.fieldsContainer}>
        <label htmlFor="title">Title:</label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />      
        <label htmlFor="body">Content:</label>
        <textarea
          id="body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
        />
      </div>
      <button type="submit" disabled={loading}>
        {loading ? "Creating..." : "Create Post"}
      </button>
    </form>
  );
}
