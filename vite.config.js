import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            buildDirectory: 'build/kanban',
            input: ['resources/js/app.js'],
            refresh: true,
        }),
    ],
});
