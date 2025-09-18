import type { BooksResponse } from "../types/get-book.response";
import { bookApi } from "../api/books.api";

export const getBooksWithReviews = async (): Promise<BooksResponse> => {
  const { data } = await bookApi.get<BooksResponse>('/books');
  return data;
};



