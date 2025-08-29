import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.petcare',
  appName: 'pet-care-log',
  webDir: 'www',
  plugins: {
    FirebaseAuthentication: {
      skipNativeAuth: false,
      providers: ["google.com", "facebook.com", "twitter.com"]
    }
  }
};
export default config;

