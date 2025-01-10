import React from "react";

const BookItem = ({ book, removeBook }) => {
  return (
    <div className="book-item">
      <h3>{book.title}</h3>
      <p>نویسنده: {book.author}</p>
      <button onClick={() => removeBook(book.id)}>حذف</button>
    </div>
  );
};

export default BookItem;