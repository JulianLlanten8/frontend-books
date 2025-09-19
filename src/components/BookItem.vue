<script setup lang="ts">
import { defineProps } from "vue";
import StarRating from "./StarRating.vue";

import type { Book } from "@/types/book.interface";

defineProps<Book>();
</script>
<template>
  <div
    class="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg hover:shadow transition duration-150">
    <div class="flex-1 min-w-0">
      <h3 class="text-gray-800 font-medium truncate text-base">{{ title }}</h3>
    </div>
    <div class="flex-shrink-0 ml-4 flex items-center">
      <StarRating :averageRating="averageRating !== null ? Number(averageRating) : null" />
    </div>
  </div>
</template>
