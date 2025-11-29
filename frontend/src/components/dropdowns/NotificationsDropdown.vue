<script setup>
defineProps({
  notifications: Array,
});
</script>

<template>
  <div
    class="absolute right-0 top-full mt-2 w-80 bg-white dark:bg-gray-800 rounded-xl shadow-xl z-50 border border-gray-200 dark:border-gray-700"
  >
    <div
      class="p-3 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center"
    >
      <h3 class="font-semibold text-gray-900 dark:text-white">
        Notifications
      </h3>
      <button
        class="text-xs text-amber-600 dark:text-amber-400 hover:underline"
      >
        Mark all as read
      </button>
    </div>
    <div class="max-h-60 overflow-y-auto">
      <div
        v-for="n in notifications"
        :key="n.id"
        class="px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700/50 border-b border-gray-100 dark:border-gray-700 last:border-0"
        :class="{ 'bg-amber-50 dark:bg-amber-900/10': !n.read }"
      >
        <p class="text-sm text-gray-900 dark:text-gray-100">
          {{ n.text }}
        </p>
        <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">
          {{ n.time }}
        </p>
      </div>
    </div>
  </div>
</template>
