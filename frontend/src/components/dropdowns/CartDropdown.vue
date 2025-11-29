<script setup>
defineProps({
  items: Array,
});
</script>

<template>
  <div
    class="absolute right-0 top-full mt-2 w-80 bg-white dark:bg-gray-800 rounded-xl shadow-xl z-50 border border-gray-200 dark:border-gray-700"
  >
    <div class="p-4 max-h-60 overflow-y-auto">
      <div
        v-for="item in items"
        :key="item.id"
        class="flex items-center space-x-3 py-2 border-b border-gray-100 dark:border-gray-700 last:border-0"
      >
        <img
          :src="item.image"
          class="w-12 h-12 rounded object-cover"
        >
        <div class="flex-1">
          <div class="text-sm font-medium text-gray-900 dark:text-white">
            {{ item.name }}
          </div>
          <div class="text-sm text-amber-600 dark:text-amber-400">
            ${{ item.price }}
          </div>
        </div>
      </div>
      <div
        v-if="items.length === 0"
        class="text-center py-4 text-gray-500 dark:text-gray-400"
      >
        Cart is empty
      </div>
    </div>
    <div class="p-3 bg-gray-50 dark:bg-gray-700/50 flex justify-end">
      <button
        class="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-lg text-sm font-medium transition-colors"
      >
        Go to Cart
      </button>
    </div>
  </div>
</template>
