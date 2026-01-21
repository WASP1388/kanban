<?php

namespace WASP1388\Kanban\Orchid\Screens;

use WASP1388\Kanban\Models\Task;
use WASP1388\Kanban\Models\Column;
use WASP1388\Kanban\Models\Board;
use Orchid\Screen\TD;
use Orchid\Screen\Screen;
use Orchid\Screen\Actions\Link;
use Orchid\Support\Facades\Layout;
use Orchid\Screen\Fields\Select;
use Orchid\Screen\Fields\Input;
use Orchid\Screen\Actions\Button;
use Illuminate\Http\Request;

class TaskTableScreen extends Screen
{
    /**
     * Fetch data to be displayed on the screen.
     *
     * @return array
     */
    public function query(): iterable
    {
        $tasks = Task::with('column', 'column.board')
            ->paginate();

        return [
            'tasks' => $tasks,
        ];
    }

    /**
     * The name of the screen displayed in the header.
     *
     * @return string|null
     */
    public function name(): ?string
    {
        return 'Таблица задач';
    }

    /**
     * The description displayed under the title.
     *
     * @return string|null
     */
    public function description(): ?string
    {
        return 'Просмотр и управление задачами в табличном виде';
    }

    /**
     * Button commands.
     *
     * @return \Orchid\Screen\Actions\Link[]
     */
    public function commandBar(): array
    {
        return [
            Link::make('Создать задачу')
                ->icon('plus')
                ->route('platform.kanban.task.create'),
        ];
    }

    /**
     * The screen's layout elements.
     *
     * @return \Orchid\Screen\Layout[]|\string[]
     */
    public function layout(): iterable
    {
        return [
            Layout::table('tasks', [
                TD::make('id', 'ID')->sort(),
                TD::make('name', 'Название')->sort(),
                TD::make('description', 'Описание'),
                TD::make('column.name', 'Колонка')->sort(),
                TD::make('column.board.name', 'Доска')->sort(),
                TD::make('order', 'Порядок')->sort(),
                TD::make('created_at', 'Создано')->sort(),
                TD::make('updated_at', 'Обновлено')->sort(),
                TD::make('actions', 'Действия')
                    ->cantHide()
                    ->render(function (Task $task) {
                        return 
                            Link::make('Редактировать')
                                ->route('platform.kanban.task.edit', $task->id)
                                ->icon('pencil')
                                ->class('btn btn-sm btn-primary mr-1');
                    }),
            ]),
        ];
    }
}