"use client";

import API from "@/services/api";
import { Book } from "@/src/types/book";

interface Props {
  book: Book;
  refresh: () => void;
}

export default function BookCard({ book, refresh }: Props) {
  const deleteBook = async () => {
    await API.delete(`/books/${book._id}`);
    refresh();
  };

  const statusColor = {
    want: "bg-gray-200",
    reading: "bg-blue-200",
    completed: "bg-green-200",
  }[book.status];

  return (
    <div className="bg-white shadow rounded-lg p-4 flex flex-col gap-2">
      <h2 className="text-lg font-semibold">{book.title}</h2>

      <p className="text-gray-600">Author: {book.author}</p>

      <div className={`px-2 py-1 rounded text-sm w-fit ${statusColor}`}>
        {book.status}
      </div>

      <div className="flex gap-2 mt-3">
        <button
          onClick={deleteBook}
          className="bg-red-500 text-white px-3 py-1 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
