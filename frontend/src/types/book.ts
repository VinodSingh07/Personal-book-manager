export interface Book {
  _id: string;

  title: string;

  author: string;

  tags: string[];

  status: "want" | "reading" | "completed";

  createdAt?: string;

  updatedAt?: string;
}
