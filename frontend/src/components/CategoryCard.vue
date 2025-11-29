<template>
  <div
    class="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 border border-gray-200 dark:border-gray-700 hover:border-amber-300 dark:hover:border-amber-600 cursor-pointer group"
  >
    <div class="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
      {{ icon }}
    </div>

    <h3 class="font-semibold text-lg text-gray-800 dark:text-white mb-1">
      {{ name }}
    </h3>
    <p class="text-gray-500 dark:text-gray-400 text-sm">
      {{ items }} items
    </p>
  </div>
</template>

<script setup>
defineProps({
  icon: String,
  name: String,
  items: Number
});
</script>
