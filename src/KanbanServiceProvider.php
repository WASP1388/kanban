<?php

namespace WASP1388\Kanban;

use WASP1388\Kanban\Http\Controllers\KanbanController;
use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Route;

use Orchid\Screen\Actions\Menu;
use Orchid\Platform\Dashboard;

class KanbanServiceProvider extends ServiceProvider
{

    protected $dashboard;

    public function boot(Dashboard $dashboard): void
    {
        $this->dashboard = $dashboard;

        // Публикация маршрутов
        $this->loadRoutesFrom(__DIR__.'/routes.php');

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

        // Регистрация команд Artisan (опционально)
        if ($this->app->runningInConsole()) {
            $this->commands([
                // Ваши команды
            ]);
        }
        
        $this->app->booted(function () {
            $this->registerDashboardMenu();
        });

    }

    // не актуально, но оставлю пока
    public function registerDashboardRoutes(): void
    {
        
        Route::domain((string) config('platform.domain'))
            ->prefix(Dashboard::prefix('/kanban'))
            ->as('platform.kanban.')
            ->middleware(config('platform.middleware.private'))
            ->group(realpath(__DIR__.'/routes.php'));
    }

    public function registerDashboardMenu(): void
    {
        $menuItems = [
            Menu::make('Доски')
            ->icon('bs.table')
            ->route('platform.kanban.board.list')
            ->sort(0)
            ->divider()
            ->title('Канбан'),
        ];

        foreach ($menuItems as $menu) {
            $this->dashboard->registerMenuElement($menu);
        }
    }

    public function register()
    {
        $this->app->singleton('kanban', function () {
             return new KanbanController();
        });
    }
}
