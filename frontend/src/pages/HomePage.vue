<template>
  <div>
    <h1>Home Page</h1>
    <button @click="testApi">
      Call API 2
    </button>
  </div>
</template>

<script>
import api from "../services/api";
import { useToast } from "vue-toastification";

export default {
  setup() {
    const toast = useToast();

    const testApi = async () => {
      try {
        const { data } = await api.get("/index");
        toast.success(`API returned t=${data.data.t}`);
      } catch (e) {
        toast.error("API error!");
      }
    };

    return { testApi };
  },
};
</script>
