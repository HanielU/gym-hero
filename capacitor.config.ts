import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.gymhero.app",
  appName: "gym-hero",
  webDir: "dist",
  bundledWebRuntime: false,

  // remove when building for production
  server: {
    url: "http://192.168.0.182:3000",
    cleartext: true
  }
};

export default config;
