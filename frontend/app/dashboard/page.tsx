"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import API from "@/services/api";
import BookCard from "@/components/BookCard";
import { Book } from "@/src/types/book";
import Navbar from "@/components/Navbar";

export default function Dashboard() {
  const router = useRouter();

  // state to store all books
  const [books, setBooks] = useState<Book[]>([]);

  // filter states
  const [statusFilter, setStatusFilter] = useState("all");
  const [tagFilter, setTagFilter] = useState("");

  /*
  Fetch books from backend API
  */
  const fetchBooks = async () => {
    try {
      const res = await API.get("/books");
      setBooks(res.data);
    } catch (error) {
      console.error("Error fetching books", error);
    }
  };

  /*
  Check authentication when page loads
  If user is not logged in → redirect to login
  */
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/login");
      return;
    }

    fetchBooks();
  }, []);

  /*
  Filter logic
  - filter by reading status
  - filter by tag
  */
  const filteredBooks = books.filter((book) => {
    // status filter
    const statusMatch = statusFilter === "all" || book.status === statusFilter;

    // tag filter (case insensitive)
    const tagMatch =
      tagFilter === "" ||
      book.tags?.some((tag) =>
        tag.toLowerCase().includes(tagFilter.toLowerCase()),
      );

    return statusMatch && tagMatch;
  });

  return (
    <div className="p-10 bg-gray-50 min-h-screen">
      <Navbar />

      {/* FILTER SECTION */}

      <div className="flex flex-wrap gap-4 mb-8 mt-6">
        {/* Status Filter */}
        <select
          className="border text-black border-gray-200 p-2 rounded-lg focus:ring-2 focus:ring-indigo-400"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="all">All Status</option>
          <option value="want">Want to Read</option>
          <option value="reading">Reading</option>
          <option value="completed">Completed</option>
        </select>

        {/* Tag Filter */}
        <input
          placeholder="Filter by tag..."
          className="border text-black border-gray-200 p-2 rounded-lg focus:ring-2 focus:ring-indigo-400"
          value={tagFilter}
          onChange={(e) => setTagFilter(e.target.value)}
        />
      </div>

      {/* BOOK GRID */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBooks.length === 0 ? (
          <p className="text-gray-500">No books found.</p>
        ) : (
          filteredBooks.map((book) => (
            <BookCard key={book._id} book={book} refresh={fetchBooks} />
          ))
        )}
      </div>
    </div>
  );
}
