"use client";

import { useState } from "react";
import API from "@/services/api";
import { Book } from "@/src/types/book";

/*
Define props type for the component
book -> book object
refresh -> function to reload books from dashboard
*/
interface Props {
  book: Book;
  refresh: () => void;
}

export default function BookCard({ book, refresh }: Props) {
  // state to toggle edit mode
  const [editing, setEditing] = useState(false);

  // states for editable fields
  const [title, setTitle] = useState(book.title);
  const [author, setAuthor] = useState(book.author);
  const [status, setStatus] = useState(book.status);

  /*
  Delete book from database
  */
  const deleteBook = async () => {
    await API.delete(`/books/${book._id}`);
    refresh(); // reload dashboard books
  };

  /*
  Update book data
  */
  const updateBook = async () => {
    await API.put(`/books/${book._id}`, {
      title,
      author,
      status,
    });

    setEditing(false); // exit edit mode
    refresh(); // refresh book list
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-5 hover:shadow-xl transition">
      {editing ? (
        <>
          {/* -------- EDIT MODE -------- */}

          <input
            className="text-blue-900 border-gray-200 p-2 w-full mb-2 rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <input
            className="text-blue-900 border border-gray-200 p-2 w-full mb-2 rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />

          {/* Status dropdown */}
          <select
            className="text-blue-900 border border-gray-200 p-2 w-full mb-3 rounded-lg"
            value={status}
            onChange={(e) => setStatus(e.target.value as Book["status"])}
          >
            <option value="want">Want to Read</option>
            <option value="reading">Reading</option>
            <option value="completed">Completed</option>
          </select>

          {/* Buttons */}
          <div className="flex gap-2">
            <button
              onClick={updateBook}
              className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-lg"
            >
              Save
            </button>

            <button
              onClick={() => setEditing(false)}
              className="bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded-lg"
            >
              Cancel
            </button>
          </div>
        </>
      ) : (
        <>
          {/* -------- NORMAL MODE -------- */}

          <h2 className="text-lg font-semibold text-gray-800">{book.title}</h2>

          <p className="text-gray-500 mb-2">{book.author}</p>

          {/* TAGS */}
          <div className="flex flex-wrap gap-2 mt-2">
            {book.tags?.map((tag: string, index: number) => (
              <span
                key={index}
                className="text-xs bg-indigo-200 text-black my-2 px-2 py-1 rounded-md"
              >
                Genres: {tag}
              </span>
            ))}
          </div>

          {/* Status badge */}
          <span className="text-xs bg-indigo-200 text-indigo-700 px-2 py-1 rounded-md">
            Status: {book.status}
          </span>

          {/* Action buttons */}
          <div className="mt-4 flex gap-2">
            <button
              onClick={() => setEditing(true)}
              className="bg-indigo-500 hover:bg-indigo-600 text-white px-3 py-1 rounded-lg text-sm"
            >
              Edit
            </button>

            <button
              onClick={deleteBook}
              className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg text-sm"
            >
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
}
