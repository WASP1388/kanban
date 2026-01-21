<?php

namespace WASP1388\Kanban\Orchid\Screens;

use WASP1388\Kanban\Models\Task;
use WASP1388\Kanban\Models\Column;
use Orchid\Screen\Screen;
use Orchid\Screen\Actions\Button;
use Orchid\Screen\Fields\Input;
use Orchid\Screen\Fields\Select;
use Orchid\Screen\Fields\TextArea;
use Orchid\Support\Facades\Layout;
use Illuminate\Http\Request;

class TaskEditScreen extends Screen
{
    /**
     * @var Task
     */
    public $task;

    /**
     * Fetch data to be displayed on the screen.
     *
     * @return array
     */
    public function query($id = null): iterable
    {
        $task = $id ? Task::findOrFail($id) : new Task();
        
        return [
            'task' => $task,
            'columns' => Column::all(),
        ];
    }

    /**
     * The name of the screen displayed in the header.
     *
     * @return string|null
     */
    public function name(): ?string
    {
        return $this->task->exists ? 'Редактировать задачу' : 'Создать задачу';
    }

    /**
     * The description displayed under the title.
     *
     * @return string|null
     */
    public function description(): ?string
    {
        return $this->task->exists ? 'Редактирование задачи' : 'Создание новой задачи';
    }

    /**
     * Button commands.
     *
     * @return \Orchid\Screen\Actions\Link[]
     */
    public function commandBar(): array
    {
        return [
            Button::make('Сохранить')
                ->method('save'),
                
            Button::make('Удалить')
                ->method('remove')
                ->canSee($this->task->exists),
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
            Layout::rows([
                Input::make('task.name')
                    ->title('Название')
                    ->placeholder('Введите название задачи')
                    ->required(),

                TextArea::make('task.description')
                    ->title('Описание')
                    ->placeholder('Введите описание задачи'),

                Select::make('task.column_id')
                    ->fromModel(Column::class, 'name', 'id')
                    ->title('Колонка')
                    ->placeholder('Выберите колонку')
                    ->required(),

                Input::make('task.order')
                    ->title('Порядок')
                    ->type('number')
                    ->placeholder('Введите порядковый номер')
                    ->defaultValue(0),
            ]),
        ];
    }
    
    /**
     * Save task
     *
     * @param Request $request
     * @param Task $task
     * @return \Illuminate\Http\RedirectResponse
     */
    public function save(Request $request, Task $task)
    {
        $taskData = $request->get('task');
        
        if (!$task->exists) {
            $task = new Task();
        }
        
        $task->fill($taskData);
        $task->save();

        toast('Задача сохранена!', 'info');

        return redirect()->route('platform.kanban.task.table');
    }
    
    /**
     * Remove task
     *
     * @param Task $task
     * @return \Illuminate\Http\RedirectResponse
     */
    public function remove(Task $task)
    {
        $task->delete();
        
        toast('Задача удалена!', 'info');

        return redirect()->route('platform.kanban.task.table');
    }
}