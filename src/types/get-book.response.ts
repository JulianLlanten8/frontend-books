import type { Book } from "./book.interface";

export interface BooksResponse {
  data: Book[];
  statusCode: number;
  message: string;
  error: string;
}

