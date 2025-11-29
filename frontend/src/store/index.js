import { defineStore } from "pinia";

export const useMainStore = defineStore("main", {
  state: () => ({
    counter: 0,
    user: null,
  }),
  actions: {
    increment() {
      this.counter++;
    },
  },
});
