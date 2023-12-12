import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.bonjour.bio',
  appName: 'arkema_bio',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
