import React, { useState } from "react";
import BookForm from "./components/BookForm";
import BookList from "./components/BookList";

const App = () => {
  const [books, setBooks] = useState([]);

  const addBook = (newBook) => {
    setBooks([...books, newBook]);
  };

  const removeBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <div className="app">
      <h1>مدیریت کتابخانه</h1>
      <BookForm addBook={addBook} />
      <BookList books={books} removeBook={removeBook} />
    </div>
  );
};

export default App;