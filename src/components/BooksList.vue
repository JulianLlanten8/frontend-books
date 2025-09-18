<script setup lang="ts">
import { useBooks } from "@/composables/useBooks";
import { RefreshCw } from "lucide-vue-next";
import BookItem from "./BookItem.vue";

const { books, loading, error, fetchBooks } = useBooks();
</script>

<template>
  <section class="w-full max-w-xl mx-auto p-8 rounded-xl">
    <div class="flex flex-col gap-2 mb-6">
      <h1 class="text-3xl font-bold text-white">Biblioteca</h1>
      <p class="text-gray-500 text-base">Lista de libros con ratings promedio</p>
    </div>
    <div class="flex justify-end mb-4">
      <button @click="fetchBooks"
        class="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 transition">
        <RefreshCw :size="18" class="text-gray-600" />
        <span class="font-medium text-gray-700">Refrescar</span>
      </button>
    </div>
    <div v-if="loading" class="text-gray-500 text-center py-4">Cargando...</div>
    <div v-if="error" class="text-red-500 text-center py-4">{{ error }}</div>
    <div class="flex flex-col gap-3">
      <BookItem v-for="book in books" :key="book.id" v-bind="book" />
    </div>
    <div class="text-center text-gray-500 text-sm mt-8">
      {{ books.length }} libros en total
    </div>
  </section>
</template>
