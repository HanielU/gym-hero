import { resolve } from "path";
import { defineConfig } from "vite";

// main config
export default defineConfig({
  build: {
    outDir: "./dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        create: resolve(__dirname, "src/create.html"),
        login: resolve(__dirname, "src/login.html"),
        home: resolve(__dirname, "src/home.html"),
        gyms: resolve(__dirname, "src/gyms.html"),
        list: resolve(__dirname, "src/list.html")
        // fitness: resolve(__dirname, "src/fitness.html"),
      }
    }
  },
  resolve: {
    alias: {
      "@components": resolve(__dirname, "./src/components"),
      $utils: resolve(__dirname, "./src/utils")
    }
  }
});

// Tsavsar config
/* export default defineConfig({
  root: "tvssrc",
  build: {
    outDir: "dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, "tvssrc/index.html"),
        login: resolve(__dirname, "tvssrc/login.html"),
        create: resolve(__dirname, "tvssrc/create.html"),
        home: resolve(__dirname, "tvssrc/home.html"),
        gyms: resolve(__dirname, "tvssrc/gyms.html"),
        workouts: resolve(__dirname, "tvssrc/workouts.html"),
        fitness: resolve(__dirname, "tvssrc/fitness.html"),
        sheraton: resolve(__dirname, "tvssrc/sheraton.html"),
        list: resolve(__dirname, "tvssrc/list.html")
      }
    }
  }
}); */
