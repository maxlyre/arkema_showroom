import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.bonjour.eau',
  appName: 'Arkema - Eau',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
