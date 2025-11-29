import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import Toast, { POSITION } from "vue-toastification";
import messages from '@/lang';
import "vue-toastification/dist/index.css";
import '@/assets/style.css'
import {createI18n} from "vue-i18n";

const app = createApp(App);
const i18n = createI18n({
  // legacy: false,
  // locale: props.initialPage.props.locale || 'uk',
  messages,
});

app.use(createPinia());
app.use(router);
app.use(Toast, {
  position: POSITION.TOP_RIGHT,
  timeout: 3000,
});
app.use(i18n);

app.mount("#app");
