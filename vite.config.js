import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import { resolve } from 'path';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/js/app.js'],
            refresh: true,
        }),
    ],
    build: {
        outDir: 'dist', // Папка для собранных файлов
        emptyOutDir: true,
        lib: {
            entry: 'resources/js/app.js',
            name: 'OrchidKanban',
            fileName: 'orchid-kanban',
            //formats: ['es', 'umd'],
            //fileName: (format) => `kanban.${format}.js`,
        },
        
        // rollupOptions: {
        //     output: {
        //         assetFileNames: 'assets/[name].[hash][extname]',
        //         entryFileNames: 'assets/[name].[hash].js',
        //         manualChunks: undefined,
        //     },
        // },
        
        // resolve: {
        //     alias: {
        //         '@': resolve(__dirname, './resources/js'),
        //     },
        // }
        
    },
});
