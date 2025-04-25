<?php

use Illuminate\Support\Facades\Route;
use WASP1388\Kanban\Http\Controllers\KanbanController;

Route::get('/kanban/{param1?}/{param2?}', 
    [KanbanController::class, 'showExample'])
    ->name('kanban.board');