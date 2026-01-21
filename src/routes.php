<?php

use Illuminate\Support\Facades\Route;
use Orchid\Platform\Dashboard;

use WASP1388\Kanban\Http\Controllers\KanbanController;
use WASP1388\Kanban\Http\Controllers\TaskController;

use WASP1388\Kanban\Orchid\Screens\BoardScreen;
use WASP1388\Kanban\Orchid\Screens\BoardEditScreen;
use WASP1388\Kanban\Orchid\Screens\BoardListScreen;
use WASP1388\Kanban\Orchid\Screens\TaskTableScreen;



Route::domain(config('platform.domain'))
    ->prefix(config('platform.prefix').'/kanban')
    ->as('platform.kanban.')
    ->middleware(config('platform.middleware.private'))
    ->group(function () {
        Route::screen('board/view/{board}',  BoardScreen::class)->name('board.view');
        Route::screen('board/edit/{board?}', BoardEditScreen::class)->name('board.edit');
        Route::screen('boards', BoardListScreen::class)->name('board.list');
        Route::screen('tasks', TaskTableScreen::class)->name('task.table');

        Route::get('task/create', [TaskController::class, 'create'])->name('task.create');
        Route::post('task', [TaskController::class, 'store'])->name('task.store');
        Route::get('task/{id}/edit', [TaskController::class, 'edit'])->name('task.edit');
        Route::put('task/{id}', [TaskController::class, 'update'])->name('task.update');
        Route::delete('task/{id}', [TaskController::class, 'destroy'])->name('task.destroy');

        Route::post('board/task/order', [KanbanController::class, 'updateTaskOrder'])->name('board.task.update');
        Route::post('board/column/order', [KanbanController::class, 'updateColumnOrder'])->name('board.column.update');
    });

// $this->router->screen('board/view/{board}',  BoardScreen::class)->name('board.view');
// $this->router->screen('board/edit/{board?}', BoardEditScreen::class)->name('board.edit');
// $this->router->screen('boards', BoardListScreen::class)->name('board.list');

// $this->router->post('board/task/order', [KanbanController::class, 'updateTaskOrder'])->name('board.task.update');
// $this->router->post('board/column/order', [KanbanController::class, 'updateColumnOrder'])->name('board.column.update');

// Route::screen('kanban/board/view/{board}', BoardScreen::class)
//     ->name('platform.kanban.board.view');

// Route::screen('kanban/board/edit/{board?}', BoardEditScreen::class)
//     ->name('platform.kanban.board.edit');

// Route::screen('kanban/boards', BoardListScreen::class)
//     ->name('platform.kanban.board.list');