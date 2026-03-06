import Book from "../models/Book.js";

//add
export const addBook = async (req, res) => {
  try {
    const book = await Book.create({
      ...req.body,
      user: req.userId,
    });

    res.json(book);
  } catch (err) {
    res.status(500).json(err);
  }
};

//get
export const getBooks = async (req, res) => {
  try {
    const books = await Book.find({ user: req.userId });

    res.json(books);
  } catch (err) {
    res.status(500).json(err);
  }
};
// update book
export const updateBook = async (req, res) => {
  try {
    const updatedBook = await Book.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }, // returns updated document
    );

    res.json(updatedBook);
  } catch (error) {
    res.status(500).json(error);
  }
};

//delete
export const deleteBook = async (req, res) => {
  await Book.findByIdAndDelete(req.params.id);

  res.json("Book deleted");
};
