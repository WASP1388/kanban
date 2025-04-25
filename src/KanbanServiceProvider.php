<?php

namespace WASP1388\Kanban;

use  WASP1388\Kanban\Http\Controllers\KanbanController;
use Illuminate\Support\ServiceProvider;

class KanbanServiceProvider extends ServiceProvider
{
    public function boot()
    {
        // Публикация маршрутов
        $this->loadRoutesFrom(__DIR__.'/../routes.php');

        // Публикация представлений
        $this->loadViewsFrom(__DIR__.'/../resources/views', 'kanban');
        
        $this->loadMigrationsFrom(__DIR__.'/../database/migrations');
    
        // Если нужны seeders
        $this->publishes([
            __DIR__.'/../database/seeders' => database_path('seeders'),
        ], 'kanban-seeders');

        // Публикация Vite-ресурсов
        $this->publishes([
            __DIR__.'/../resources/js' => public_path('wasp1388/kanban'),
            __DIR__.'/../dist' => public_path('wasp1388/kanban'),
        ], 'kanban-assets');
        
        // Публикация конфигурации Vite (опционально)
        $this->publishes([
            __DIR__.'/../vite.config.js' => base_path('vite.config.kanban.js'),
        ], 'kanban-vite-config');

        // Регистрация команд
        if ($this->app->runningInConsole()) {
            $this->commands([
                // Ваши команды
            ]);
        }
    }

    public function register()
    {
        $this->app->singleton('kanban', function () {
            return new KanbanController();
        });
    }
}
