<script setup>
import { ref, computed } from "vue";
import { useRoute } from "vue-router";
import { Search, Bell, User, ShoppingCart, Award } from "lucide-vue-next";
import { onClickOutside } from "@vueuse/core";
import DarkModeToggle from "@/components/DarkModeToggle.vue";
import Footer from "@/layouts/BaseFooter.vue";
import UserMenu from "@/components/dropdowns/UserMenu.vue";
import CartDropdown from "@/components/dropdowns/CartDropdown.vue";
import NotificationsDropdown from "@/components/dropdowns/NotificationsDropdown.vue";
import MegaMenu from "@/components/menus/MegaMenu.vue";

const cartOpen = ref(false);
const notificationsOpen = ref(false);
const userMenuOpen = ref(false);
const megaMenuOpen = ref(false);
const megaMenuRef = ref();

let megaMenuCloseTimer = null;

const openMegaMenu = () => {
  if (megaMenuCloseTimer) {
    clearTimeout(megaMenuCloseTimer);
    megaMenuCloseTimer = null;
  }
  megaMenuOpen.value = true;
};

const scheduleCloseMegaMenu = () => {
  megaMenuCloseTimer = setTimeout(() => {
    megaMenuOpen.value = false;
    megaMenuCloseTimer = null;
  }, 300);
};

const handleMegaMenuMouseEnter = () => {
  openMegaMenu();
};

const handleMegaMenuMouseLeave = () => {
  scheduleCloseMegaMenu();
};

const cartRef = ref();
const notificationsRef = ref();
const userMenuRef = ref();
onClickOutside(cartRef, () => (cartOpen.value = false));
onClickOutside(notificationsRef, () => (notificationsOpen.value = false));
onClickOutside(userMenuRef, () => (userMenuOpen.value = false));

const route = useRoute();
const currentPath = computed(() => route.path);

const navItems = [
  { label: "Home", path: "/" },
  { label: "Auctions", path: "/auctions" },
  { label: "Categories", path: "/categories", hasMegaMenu: true },
  { label: "Sellers", path: "/sellers" },
];

const mockCategories = [
  { key: "auto", label: "Авто мото", href: "/categories/auto" },
  { key: "phones", label: "Телефони аксесуари", href: "/categories/phones" },
  {
    key: "laptops",
    label: "Ноутбуки ПК і планшети",
    href: "/categories/laptops",
  },
  { key: "tech", label: "Техніка Електроніка", href: "/categories/tech" },
  { key: "sports", label: "Спорт туризм", href: "/categories/sports" },
  { key: "books", label: "Книги, Література", href: "/categories/books" },
  { key: "health", label: "Спорт здоров'я", href: "/categories/health" },
  {
    key: "clothes",
    label: "Одяг, взуття та аксесуари",
    href: "/categories/clothes",
  },
  { key: "kids", label: "Дитячий світ", href: "/categories/kids" },
  { key: "home", label: "Будинок дозвілля", href: "/categories/home" },
  { key: "food", label: "Продукти, їжа та напої", href: "/categories/food" },
  {
    key: "collectibles",
    label: "Колекції, старі предмети",
    href: "/categories/collectibles",
  },
  { key: "adult", label: "Тільки для дорослих", href: "/categories/adult" },
];

const isActive = (path) => currentPath.value === path;

const cartCount = 2;
const notificationCount = 3;

const toggleCart = () => {
  cartOpen.value = !cartOpen.value;
  if (cartOpen.value) {
    notificationsOpen.value = false;
    userMenuOpen.value = false;
    megaMenuOpen.value = false;
  }
};

const toggleNotifications = () => {
  notificationsOpen.value = !notificationsOpen.value;
  if (notificationsOpen.value) {
    cartOpen.value = false;
    userMenuOpen.value = false;
    megaMenuOpen.value = false;
  }
};

const toggleUserMenu = () => {
  userMenuOpen.value = !userMenuOpen.value;
  if (userMenuOpen.value) {
    cartOpen.value = false;
    notificationsOpen.value = false;
    megaMenuOpen.value = false;
  }
};

const toggleMegaMenu = () => {
  megaMenuOpen.value = !megaMenuOpen.value;
  if (megaMenuOpen.value) {
    cartOpen.value = false;
    notificationsOpen.value = false;
    userMenuOpen.value = false;
  }
};
</script>

<template>
  <div
    class="min-h-screen flex flex-col bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-200 overflow-x-hidden"
  >
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
          <nav
            class="hidden md:flex space-x-6"
            role="navigation"
            aria-label="Main navigation"
          >
            <template
              v-for="item in navItems"
              :key="item.path"
            >
              <div
                v-if="item.hasMegaMenu"
                class="relative"
                @mouseenter="handleMegaMenuMouseEnter"
                @mouseleave="handleMegaMenuMouseLeave"
              >
                <button
                  type="button"
                  class="font-medium text-gray-700 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded"
                  :class="{
                    'text-amber-600 dark:text-amber-400': megaMenuOpen,
                  }"
                  @click="toggleMegaMenu"
                >
                  {{ item.label }}
                </button>

                <div
                  v-if="megaMenuOpen"
                  class="absolute left-0 top-full h-4 w-full"
                  @mouseenter="openMegaMenu"
                  @mouseleave="scheduleCloseMegaMenu"
                />
                <MegaMenu
                  v-if="megaMenuOpen"
                  ref="megaMenuRef"
                  :categories="mockCategories"
                  class="transition-opacity duration-150"
                  @mouseenter="openMegaMenu"
                  @mouseleave="scheduleCloseMegaMenu"
                />
              </div>
              <a
                v-else
                :href="item.path"
                :class="[
                  'font-medium rounded transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500',
                  isActive(item.path)
                    ? 'text-amber-600 dark:text-amber-400'
                    : 'text-gray-700 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400',
                ]"
                :aria-current="isActive(item.path) ? 'page' : undefined"
              >
                {{ item.label }}
              </a>
            </template>
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
            >
          </div>

          <!-- User actions -->
          <div class="flex items-center space-x-3">
            <button
              type="button"
              class="p-2 rounded-full text-gray-600 dark:text-gray-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
              aria-label="Toggle dark mode"
            >
              <DarkModeToggle />
            </button>

            <!-- Notifications -->
            <div
              ref="notificationsRef"
              class="relative"
            >
              <button
                type="button"
                class="p-2 rounded-full text-gray-600 dark:text-gray-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 relative"
                aria-label="Notifications"
                @click="toggleNotifications"
              >
                <Bell class="w-5 h-5" />
                <span
                  v-if="notificationCount > 0"
                  class="absolute -top-0.5 -right-0.5 w-3 h-3 bg-red-500 rounded-full border-2 border-white dark:border-gray-900"
                />
              </button>
              <NotificationsDropdown
                v-if="notificationsOpen"
                :notifications="[
                  {
                    id: 1,
                    text: 'Your bid was outbid!',
                    time: '2 min ago',
                    read: false,
                  },
                  {
                    id: 2,
                    text: 'Auction ending soon',
                    time: '15 min ago',
                    read: true,
                  },
                  {
                    id: 3,
                    text: 'New message from seller',
                    time: '1 hour ago',
                    read: false,
                  },
                ]"
              />
            </div>

            <!-- Cart -->
            <div
              ref="cartRef"
              class="relative"
            >
              <button
                type="button"
                class="p-2 rounded-full text-gray-600 dark:text-gray-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 relative"
                aria-label="Shopping cart"
                @click="toggleCart"
              >
                <ShoppingCart class="w-5 h-5" />
                <span
                  v-if="cartCount > 0"
                  class="absolute -top-0.5 -right-0.5 w-3 h-3 bg-amber-500 rounded-full border-2 border-white dark:border-gray-900"
                />
              </button>
              <CartDropdown
                v-if="cartOpen"
                :items="[
                  {
                    id: 1,
                    name: 'Vintage Watch',
                    price: 240,
                    image: 'https://placehold.co/40x40',
                  },
                  {
                    id: 2,
                    name: 'Classic Car Model',
                    price: 89,
                    image: 'https://placehold.co/40x40',
                  },
                ]"
              />
            </div>

            <!-- User Menu -->
            <div
              ref="userMenuRef"
              class="relative"
            >
              <button
                type="button"
                class="p-2 rounded-full text-gray-600 dark:text-gray-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
                aria-label="User menu"
                @click="toggleUserMenu"
              >
                <User class="w-5 h-5" />
              </button>
              <UserMenu
                v-if="userMenuOpen"
                :user="{
                  name: 'John Doe',
                  email: 'john@example.com',
                  verified: true,
                }"
              />
            </div>
          </div>
        </div>
      </div>
    </header>

    <slot name="header" />
    <main class="flex-grow container mx-auto px-4 py-6 md:py-8">
      <slot />
    </main>

    <Footer />
  </div>
</template>
