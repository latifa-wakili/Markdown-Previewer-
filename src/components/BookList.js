import React from "react";
import BookItem from "./BookItem";

const BookList = ({ books, removeBook }) => {
  return (
    <div className="book-list">
      {books.length > 0 ? (
        books.map((book) => (
          <BookItem key={book.id} book={book} removeBook={removeBook} />
        ))
      ) : (
        <p>هیچ کتابی موجود نیست!</p>
      )}
    </div>
  );
};

export default BookList;