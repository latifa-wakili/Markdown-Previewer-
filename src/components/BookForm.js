import React, { useState } from "react";

const BookForm = ({ addBook }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && author) {
      addBook({ id: Date.now(), title, author });
      setTitle("");
      setAuthor("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="book-form">
      <input
        type="text"
        placeholder="نام کتاب"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="نام نویسنده"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        required
      />
      <button type="submit">اضافه کردن کتاب</button>
    </form>
  );
};

export default BookForm;