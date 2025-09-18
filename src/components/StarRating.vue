<script setup lang="ts">
import { defineProps, computed } from "vue";
import { Star } from "lucide-vue-next";

const props = defineProps<{
  averageRating: number | undefined | null;
}>();

const stars = computed(() => {
  const rating = props.averageRating ?? 0;
  const fullStars = Math.floor(rating);
  const halfStar = rating - fullStars >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
  return [
    ...Array(fullStars).fill('full'),
    ...(halfStar ? ['half'] : []),
    ...Array(emptyStars).fill('empty')
  ];
});
</script>
<template>
  <div class="flex items-center gap-2">
    <div class="flex gap-0.5">
      <template v-for="(type, i) in stars" :key="i">
        <Star v-if="type === 'full'" :size="18" :color="'#FFC107'" :fill="'#FFC107'" />
        <Star v-else-if="type === 'half'" :size="18" :color="'#FFC107'" :fill="'url(#half-star-gradient)'" />
        <Star v-else :size="18" :color="'#E0E0E0'" :fill="'#E0E0E0'" />
      </template>
    </div>
    <span class="text-base font-medium text-gray-700">{{ averageRating !== null && averageRating !== undefined ?
      averageRating.toFixed(1) : "N/A" }}</span>
  </div>
</template>