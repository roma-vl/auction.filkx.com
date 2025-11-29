<script setup>
import { Search, Bell, User, ShoppingCart, Award } from 'lucide-vue-next'
import DarkModeToggle from '@/components/DarkModeToggle.vue'
import Footer from '@/layouts/BaseFooter.vue'
</script>

<template>
  <div
    class="min-h-screen flex flex-col bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-200"
  >
    <!-- Header -->
    <header
      class="sticky top-0 z-50 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 shadow-sm"
    >
      <div class="container mx-auto px-4 py-3">
        <div class="flex items-center justify-between">
          <!-- Logo -->
          <div class="flex items-center space-x-2">
            <div
              class="w-8 h-8 bg-gradient-to-r from-amber-500 to-orange-500 rounded-lg flex items-center justify-center"
            >
              <Award class="w-5 h-5 text-white" />
            </div>
            <span
              class="text-xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent"
            >
              AuctionPro
            </span>
          </div>

          <!-- Navigation -->
          <nav class="hidden md:flex space-x-6">
            <a
              href="#"
              class="font-medium text-gray-700 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded"
            >
              Home
            </a>
            <a
              href="#"
              class="font-medium text-gray-700 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded"
            >
              Auctions
            </a>
            <a
              href="#"
              class="font-medium text-gray-700 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded"
            >
              Categories
            </a>
            <a
              href="#"
              class="font-medium text-gray-700 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded"
            >
              Sellers
            </a>
          </nav>

          <!-- Search bar -->
          <div
            class="hidden lg:flex items-center bg-white dark:bg-gray-700 rounded-full px-4 py-2 border border-gray-300 dark:border-gray-600"
          >
            <Search class="w-4 h-4 text-gray-400 mr-2 flex-shrink-0" />
            <input
              type="text"
              placeholder="Search auctions..."
              class="bg-transparent border-none outline-none text-sm w-48 placeholder-gray-400 dark:placeholder-gray-500 min-w-0"
            />
          </div>

          <!-- User actions -->
          <div class="flex items-center space-x-3">
            <!-- Dark mode toggle -->
            <button
              type="button"
              class="p-2 rounded-full text-gray-600 dark:text-gray-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
              aria-label="Toggle dark mode"
            >
              <DarkModeToggle />
            </button>

            <!-- Notifications -->
            <button
              type="button"
              class="relative p-2 rounded-full text-gray-600 dark:text-gray-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
              aria-label="Notifications"
            >
              <Bell class="w-5 h-5" />
              <span
                class="absolute -top-0.5 -right-0.5 w-3 h-3 bg-red-500 rounded-full border-2 border-white dark:border-gray-800"
              ></span>
            </button>

            <!-- Shopping cart -->
            <button
              type="button"
              class="relative p-2 rounded-full text-gray-600 dark:text-gray-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
              aria-label="Shopping cart"
            >
              <ShoppingCart class="w-5 h-5" />
              <span
                class="absolute -top-0.5 -right-0.5 w-3 h-3 bg-amber-500 rounded-full border-2 border-white dark:border-gray-800"
              ></span>
            </button>

            <!-- User profile -->
            <button
              type="button"
              class="p-2 rounded-full text-gray-600 dark:text-gray-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
              aria-label="User menu"
            >
              <User class="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </header>

    <!-- Page Content -->
    <main class="flex-grow container mx-auto px-4 py-6 md:py-8">
      <slot />
    </main>
  </div>

  <Footer />
</template>
