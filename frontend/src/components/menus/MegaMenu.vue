<script setup>

defineProps({
  categories: {
    type: Array,
    default: () => []
  }
})

</script>

<template>
  <div
    class="absolute left-0 top-full mt-2 w-[320px] bg-white dark:bg-gray-800 rounded-xl shadow-xl z-50 border border-gray-200 dark:border-gray-700 py-3"
    @mouseenter="$emit('mouseenter')"
    @mouseleave="$emit('mouseleave')"
  >
    <!-- Заголовок "Всі категорії" -->
    <div class="px-4 pb-2 border-b border-gray-200 dark:border-gray-700">
      <h4 class="font-semibold text-gray-900 dark:text-white">Всі категорії</h4>
    </div>

    <!-- Список категорій -->
    <ul class="px-4 space-y-1">
      <li v-for="cat in categories" :key="cat.key">
        <a
          :href="cat.href"
          class="block py-1.5 text-sm text-gray-700 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
        >
          • {{ cat.label }}
        </a>
      </li>
    </ul>

    <!-- Розділювач -->
<!--    <div class="my-2 mx-4 border-t border-gray-200 dark:border-gray-700"></div>-->

  </div>
</template>
