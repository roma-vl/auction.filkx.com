<template>
  <BaseLayout>
    <!-- Hero -->
    <section class="mb-12">
      <div class="bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 rounded-2xl p-8 text-white">
        <div class="max-w-3xl">
          <h1 class="text-4xl md:text-5xl font-bold mb-4">
            Premium Auctions, Exceptional Value
          </h1>
          <p class="text-xl mb-6 opacity-90">
            Discover rare collectibles, luxury items, and unique treasures from verified sellers worldwide.
          </p>

          <div class="flex flex-col sm:flex-row gap-4">
            <button class="bg-white text-amber-600 hover:bg-gray-100 font-bold py-3 px-6 rounded-lg transition-colors">
              Browse Auctions
            </button>
            <button class="bg-transparent border-2 border-white text-white hover:bg-white/10 font-bold py-3 px-6 rounded-lg transition-colors">
              Sell Your Items
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats -->
    <section class="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
      <StatBox label="Active Auctions" value="1,247">
        <TrendingUp class="w-8 h-8 text-green-500" />
      </StatBox>

      <StatBox label="Happy Bidders" value="8,932">
        <Star class="w-8 h-8 text-amber-500" />
      </StatBox>

      <StatBox label="New Today" value="156">
        <Clock class="w-8 h-8 text-blue-500" />
      </StatBox>

      <StatBox label="Categories" value="24">
        <Award class="w-8 h-8 text-purple-500" />
      </StatBox>
    </section>

    <!-- Categories -->
    <section class="mb-12">
      <h2 class="text-2xl font-bold text-gray-800 dark:text-white mb-6 text-center">
        Popular Categories
      </h2>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <CategoryCard
          v-for="(c, i) in categories"
          :key="i"
          :icon="c.icon"
          :name="c.name"
          :items="c.items"
        />
      </div>
    </section>

    <section class="mb-12">
      <LiveAuctions />
    </section>

  </BaseLayout>
</template>

<script setup>
import BaseLayout from "./../layouts/BaseLayout.vue";
import StatBox from "@/components/StatBox.vue";
import CategoryCard from "@/components/CategoryCard.vue";

import { TrendingUp, Star, Clock, Award } from "lucide-vue-next";
import LiveAuctions from "@/components/LiveAuctions.vue";

const categories = [
  { name: "Fine Art", items: 234, icon: "🎨" },
  { name: "Vintage Cars", items: 89, icon: "🚗" },
  { name: "Luxury Watches", items: 156, icon: "⌚" },
  { name: "Rare Coins", items: 312, icon: "💰" },
  { name: "Antique Furniture", items: 178, icon: "🪑" },
  { name: "Designer Jewelry", items: 203, icon: "💎" },
  { name: "Collectible Toys", items: 445, icon: "🧸" },
  { name: "Musical Instruments", items: 92, icon: "🎸" }
];
</script>
