<?php

namespace WASP1388\Kanban;

use Illuminate\Support\ServiceProvider;

class KanbanServiceProvider extends ServiceProvider
{
    public function boot()
    {
        $this->loadViewsFrom(__DIR__.'/views', 'laravel-kanban');

        $this->publishes([
            __DIR__.'/views' => resource_path('views/vendor/laravel-kanban'),
        ], 'laravel-kanban');

        if ($this->app->runningInConsole()) {
            $this->commands([
                KanbanMakeCommand::class,
            ]);
        }
    }

    public function register()
    {

    }
}
