import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.bonjour.bio',
  appName: 'Arkema - Bio',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
