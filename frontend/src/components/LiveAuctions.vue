<!-- src/components/LiveAuctions.vue -->
<template>
  <section class="mb-12">
    <div class="flex justify-between items-center mb-6">
      <h2 class="text-2xl font-bold text-gray-800 dark:text-white">
        Live Now
      </h2>
      <a
        href="#"
        class="text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300 font-medium"
      >
        View All →
      </a>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="item in liveItems"
        :key="item.id"
        class="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300"
      >
        <div
          class="h-48 bg-gradient-to-r from-amber-100 to-orange-100 dark:from-amber-900 dark:to-orange-900 flex items-center justify-center relative"
        >
          <div
            class="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded"
          >
            LIVE
          </div>
          <span class="text-gray-500 dark:text-gray-400 text-lg">{{
            item.title
          }}</span>
        </div>

        <div class="p-4">
          <div class="flex justify-between items-start mb-2">
            <h3 class="font-bold text-gray-800 dark:text-white">
              {{ item.title }}
            </h3>
            <span
              v-if="item.verified"
              class="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs px-2 py-1 rounded"
            >
              Verified
            </span>
          </div>
          <p class="text-gray-600 dark:text-gray-400 text-sm mb-3">
            {{ item.description }}
          </p>

          <div class="flex justify-between items-center mb-3">
            <span
              class="text-lg font-bold text-green-600 dark:text-green-400"
            >{{ item.price }}</span>
            <span
              class="text-sm text-gray-500 dark:text-gray-400 flex items-center"
            >
              <Clock class="w-4 h-4 mr-1" />
              02:34:12
            </span>
          </div>

          <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <div
              class="bg-gradient-to-r from-green-400 to-green-600 h-2 rounded-full"
              :style="{ width: item.progress + '%' }"
            />
          </div>

          <button
            class="w-full mt-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold py-2 px-4 rounded-lg hover:from-amber-600 hover:to-orange-600 transition-all duration-300"
          >
            Place Bid
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Clock } from "lucide-vue-next";

const liveItems = [
  {
    id: 1,
    title: "Rare Vintage Watch",
    description: "Authentic 1960s Rolex with original box and papers",
    price: "$5,200",
    progress: 75,
    verified: true,
  },
  {
    id: 2,
    title: "Antique Painting",
    description: "Original 19th century oil painting",
    price: "$8,900",
    progress: 50,
    verified: true,
  },
  {
    id: 3,
    title: "Luxury Car Model",
    description: "Limited edition vintage car model",
    price: "$12,000",
    progress: 30,
    verified: false,
  },
];
</script>
