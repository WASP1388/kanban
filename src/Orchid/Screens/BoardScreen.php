<?php

namespace WASP1388\Kanban\Orchid\Screens;

use WASP1388\Kanban\Models\Board;
use WASP1388\Kanban\Models\Column;
use WASP1388\Kanban\Models\Task;

use Orchid\Screen\Screen;
use Illuminate\Http\Request;

use Orchid\Support\Facades\Layout;
use Orchid\Screen\Actions\Link;
use Orchid\Screen\Actions\ModalToggle;
use Orchid\Screen\Fields\Input;
use Orchid\Screen\Fields\Quill;
use Orchid\Screen\Fields\Relation;

class BoardScreen extends Screen
{
    public $board;

    public function query(Board $board): array
    {
        $this->board = $board;

        return [
            'board' => $this->board,
        ];
    }

    public function name(): ?string
    {
        return 'Доска ' . $this->board->name;
    }
    /**
     * Button commands.
     *
     * @return Link[]
     */
    public function commandBar(): array
    {
        return [
            ModalToggle::make('Новый столбец')
            ->modal('newColumnModal')
            ->method('createColumn')
            ->icon('plus'),
            ModalToggle::make('Новая задача')
            ->modal('newTaskModal')
            ->method('createTask')
            ->icon('plus'),
        ];
    }

    public function createTask(Request $request)
    {
        // Validate form data, save task to database, etc.
        $request->validate([
            'task.name' => 'required|max:255',
            'task.column_id' => 'required|integer',
        ]);

        $task = new Task();
        $task->name = $request->input('task.name');
        $task->description = $request->input('task.description');
        $task->column_id = $request->input('task.column_id');
        $task->order = Task::where('column_id', $task->column_id)->count() + 1;
        $task->save();
    }

    public function createColumn(Request $request)
    {
        // Validate form data, save task to database, etc.
        $request->validate([
            'column.name' => 'required|max:255',
        ]);

        $column = new Column();
        $column->name = $request->input('column.name');
        $column->board_id = $this->board->id;
        $column->order = Column::where('board_id', $this->board->id)->count() + 1;
        $column->save();
    }

    public function layout(): iterable
    {
        return [
            Layout::view('kanban::board'),

            Layout::modal('newColumnModal', Layout::rows([
                Input::make('column.name')
                    ->title('Наименование')
                    ->placeholder('Введите наименование')
                    ->help('Наименование новой колонки'),
            ]))
                ->title('Создать колонку')
                ->applyButton('Добавить колонку'),

            Layout::modal('newTaskModal', Layout::rows([
                Input::make('task.name')
                    ->title('Наименование')
                    ->placeholder('Введите наименование')
                    ->help('Наименование новой задачи'),
                Relation::make('task.column_id')
                    ->fromModel(Column::class, 'name', 'id')
                    ->title('Выберите колонку')
                    ->required()
                    ->placeholder('Выберите колонку для задачи')
                    ->help('Выберите колонку для новой задачи'),
                Quill::make('task.description')
                    ->title('Описание')
                    ->placeholder('Введите описание задачи')
                    ->help('Введите описание задачи'),
            ]))
                ->title('Создать задачу')
                ->applyButton('Добавить задачу'),
        ];
    }
}
