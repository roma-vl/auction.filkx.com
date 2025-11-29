<template>
  <div class="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700">
    <div class="flex items-center justify-between">
      <div>
        <p class="text-gray-600 dark:text-gray-400 text-sm">{{ label }}</p>
        <p class="text-2xl font-bold text-gray-800 dark:text-white">{{ value }}</p>
      </div>

      <slot />
    </div>
  </div>
</template>

<script setup>
defineProps({
  label: String,
  value: String
});
</script>
