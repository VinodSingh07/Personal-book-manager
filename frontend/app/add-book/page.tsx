"use client";

import { useState } from "react";
import API from "@/services/api";
import Navbar from "@/components/Navbar";
import { useRouter } from "next/navigation";

export default function AddBook() {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [tags, setTags] = useState("");
  const [status, setStatus] = useState("want");

  const addBook = async () => {
    await API.post("/books", {
      title,
      author,
      tags: tags.split(","),
      status,
    });

    router.push("/dashboard");
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />

      <div className="flex justify-center mt-16">
        <div className="bg-white p-8 rounded shadow w-96">
          <h1 className="text-xl font-bold mb-6">Add Book</h1>

          <input
            placeholder="Title"
            className="border p-2 w-full mb-4 rounded"
            onChange={(e) => setTitle(e.target.value)}
          />

          <input
            placeholder="Author"
            className="border p-2 w-full mb-4 rounded"
            onChange={(e) => setAuthor(e.target.value)}
          />

          <input
            placeholder="Tags (comma separated)"
            className="border p-2 w-full mb-4 rounded"
            onChange={(e) => setTags(e.target.value)}
          />

          <select
            className="border p-2 w-full mb-4 rounded"
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="want">Want to Read</option>
            <option value="reading">Reading</option>
            <option value="completed">Completed</option>
          </select>

          <button
            onClick={addBook}
            className="bg-blue-500 text-white w-full py-2 rounded"
          >
            Add Book
          </button>
        </div>
      </div>
    </div>
  );
}
