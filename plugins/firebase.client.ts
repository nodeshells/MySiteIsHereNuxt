import { initializeApp } from '@firebase/app';
import { getAnalytics } from '@firebase/analytics';

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig();
  const app = initializeApp(config.public.FIREBASE_CONFIG);
  getAnalytics(app);
});
