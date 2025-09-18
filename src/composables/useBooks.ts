import { ref } from 'vue';
import { getBooksWithReviews } from '@/actions/get-books-with-reviews';
import type { Book } from '@/types/book.interface';

export function useBooks() {
  const books = ref<Book[]>([]);
  const loading = ref(true);
  const error = ref<Error | null>(null);

  const fetchBooks = async () => {
    loading.value = true;
    error.value = null;
    try {
      const { data } = await getBooksWithReviews();
      books.value = data;
    } catch (err) {
      error.value = err as Error;
    } finally {
      loading.value = false;
    }
  };

  fetchBooks();

  return { books, loading, error, fetchBooks };
}