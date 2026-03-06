"use client";

import { useEffect, useState } from "react";
import API from "@/services/api";
import Navbar from "@/components/Navbar";
import BookCard from "@/components/BookCard";
import { Book } from "@/src/types/book";

export default function Dashboard() {
  const [books, setBooks] = useState<Book[]>([]);

  const fetchBooks = async () => {
    const res = await API.get("/books");
    setBooks(res.data);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const total = books.length;
  const reading = books.filter((b) => b.status === "reading").length;
  const completed = books.filter((b) => b.status === "completed").length;

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />

      <div className="max-w-6xl mx-auto mt-10">
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="bg-white p-4 rounded shadow">
            Total Books
            <p className="text-2xl font-bold">{total}</p>
          </div>

          <div className="bg-white p-4 rounded shadow">
            Reading
            <p className="text-2xl font-bold">{reading}</p>
          </div>

          <div className="bg-white p-4 rounded shadow">
            Completed
            <p className="text-2xl font-bold">{completed}</p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          {books.map((book) => (
            <BookCard key={book._id} book={book} refresh={fetchBooks} />
          ))}
        </div>
      </div>
    </div>
  );
}
