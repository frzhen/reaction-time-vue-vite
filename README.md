# reaction-timer

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run dev
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Adding vite to the Vue Cli project:
[How to migrate from vue cli to vite](https://vueschool.io/articles/vuejs-tutorials/how-to-migrate-from-vue-cli-to-vite/)
1. Try `npm install vite @vitejs/plugin-vue --save-dev`, dependency conflicts will appear.
2. Fix  incorrect dependencies by installing correct dependencies
   1. modify the package.json file
      - replace `script` section with:
        ```
        "scripts": {
           "dev": "vite",
           "build": "vite build",
           "lint": "vue-cli-service lint",
           "preview": "vite preview"
        },
        ```
      - delete babel dependencies and babel config file
      - replace vue with `"vue": "^3.2.25"` in `depencencies` section
      - add `"@vitejs/plugin-vue": "^2.1.0"` in `devDepencencies` section
      - add `"vite": "^2.7.2"` in `devDepencencies` section
      - delete `node_modules` and `package-lock.json`
   2. run `npm install`
3. add `vite.config.js` at root of the project directory
   - input the following code:
     ```
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
     ```
4. Remove the index.html from public directory, and add a new index.html at the root of the project directory:
   ```
   <!DOCTYPE html>
   <html lang="en">
   <head>
     <meta charset="UTF-8">
     <link rel="icon" href="/favicon.ico" />
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <title>Your App</title>
   </head>
   <body>
     <div id="app"></div>
     <script type="module" src="/src/main.js"></script>
   </body>
   </html>
   ```
5. run `npm run dev` or `vite dev` or `vite serve`, you should see:
   ```
    vite v2.7.13 dev server running at:

    > Local: http://localhost:3000/
    > Network: use `--host` to expose

    ready in 814ms.

   ```

### Setup path resolving in vite (import @)
[How to set up path resolving in vite](https://theroadtoenterprise.com/blog/how-to-set-up-path-resolving-in-vite)
1. Add resolve alias with `__dirname` in the `vite.config.js` file:
   ```js
    import { defineConfig } from 'vite'
    import vue from '@vitejs/plugin-vue'
    import path from 'path'

    export default defineConfig({
        plugins: [vue()],
        resolve: {
            alias: {
            '@': path.resolve(__dirname, './src'),
            },
        },
    })
   ```
2. Create a new `jsconfig.js` file at the root of the project directory:
   ```json
    {
      "compilerOptions": {
         "baseUrl": ".",
         "paths": {
             "@/*": ["src/*"]
         }
      }
    }
   ```
   Note: _without adding this file, the intellisense in editor or IDE will not work.
