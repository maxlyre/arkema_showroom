import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.bonjour.eau',
  appName: 'Arkema - Energie',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
