<script setup lang="ts">
import Books from '@/books/pages/BooksPage.vue';
</script>

<template>
  <main class="min-h-screen w-full relative">

    <div className="absolute inset-0 z-0"
      style="background: radial-gradient(125% 125% at 50% 10%, #000000 40%, #350136 100%)">

      <Books />
    </div>
  </main>
</template>
