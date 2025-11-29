<template>
  <footer
    class="py-8 border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900"
  >
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        <!-- Brand / About -->
        <div>
          <div class="flex items-center space-x-2 mb-4">
            <div
              class="w-8 h-8 bg-gradient-to-r from-amber-500 to-orange-500 rounded-lg flex items-center justify-center"
            >
              <Award class="w-5 h-5 text-white" />
            </div>
            <span class="text-xl font-bold text-gray-800 dark:text-white">AuctionPro</span>
          </div>
          <p class="text-gray-600 dark:text-gray-400 text-sm">
            The premier destination for collectors and enthusiasts worldwide.
          </p>
        </div>

        <!-- Navigation -->
        <div>
          <h4 class="font-bold text-gray-800 dark:text-white mb-4">
            Navigation
          </h4>
          <ul class="space-y-2 text-sm text-gray-600 dark:text-gray-400">
            <li
              v-for="(item, idx) in navigationLinks"
              :key="idx"
            >
              <a
                :href="item.href"
                class="hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
              >{{ item.label }}</a>
            </li>
          </ul>
        </div>

        <!-- Support -->
        <div>
          <h4 class="font-bold text-gray-800 dark:text-white mb-4">
            Support
          </h4>
          <ul class="space-y-2 text-sm text-gray-600 dark:text-gray-400">
            <li
              v-for="(item, idx) in supportLinks"
              :key="idx"
            >
              <a
                :href="item.href"
                class="hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
              >{{ item.label }}</a>
            </li>
          </ul>
        </div>

        <!-- Newsletter -->
        <div>
          <h4 class="font-bold text-gray-800 dark:text-white mb-4">
            Stay Updated
          </h4>
          <p class="text-gray-600 dark:text-gray-400 text-sm mb-3">
            Subscribe to our newsletter for latest auctions and deals.
          </p>
          <div class="flex">
            <input
              type="email"
              placeholder="Your email"
              class="flex-1 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-l-lg px-3 py-2 text-sm text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
            >
            <button
              class="bg-amber-500 hover:bg-amber-600 text-white px-4 rounded-r-lg transition-colors"
            >
              Join
            </button>
          </div>
        </div>
      </div>

      <div
        class="border-t border-gray-200 dark:border-gray-800 pt-6 text-center text-gray-500 dark:text-gray-400 text-sm"
      >
        © 2025 AuctionPro. All rights reserved.
      </div>
    </div>
  </footer>
</template>

<script setup>
import { Award } from "lucide-vue-next";

const navigationLinks = [
  { label: "Home", href: "#" },
  { label: "Auctions", href: "#" },
  { label: "Categories", href: "#" },
  { label: "About Us", href: "#" },
];

const supportLinks = [
  { label: "Help Center", href: "#" },
  { label: "Contact Us", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Privacy Policy", href: "#" },
];
</script>
