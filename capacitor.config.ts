import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.gymhero.app",
  appName: "gym-hero",
  webDir: "dist",
  bundledWebRuntime: false,

  // remove when building for production
  server: {
    // url: "http://192.168.0.182:3000", // hynetflex 5ghz
    url: "http://192.168.74.233:3000", // redmi hotspot
    cleartext: true
  }
};

export default config;
