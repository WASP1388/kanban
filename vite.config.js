import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/js/app.js', 'resources/css/app.css'],
            refresh: true,
        }),
    ],
    build: {
        outDir: 'dist', // Папка для собранных файлов
        emptyOutDir: true,
        lib: {
            name: 'kanban',
            entry: 'resources/js/app.js',
            formats: ['es', 'umd'],
            fileName: (format) => `kanban.${format}.js`,
        },
        rollupOptions: {
            output: {
                assetFileNames: 'assets/[name].[hash][extname]',
                entryFileNames: 'assets/[name].[hash].js',
            },
        },
        resolve: {
            alias: {
                '@': path.resolve(__dirname, './resources/js'),
            },
        }
    },
});
