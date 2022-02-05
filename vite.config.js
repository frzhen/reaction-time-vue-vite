// vite.config.js

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
const path = require("path");
export default defineConfig({
    plugins: [vue()],
    // make @ import alias works
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
})


