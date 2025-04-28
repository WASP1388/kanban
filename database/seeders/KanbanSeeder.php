<?php

namespace Database\Seeders;

use WASP1388\Kanban\Models\Task;
use WASP1388\Kanban\Models\Board;
use WASP1388\Kanban\Models\Column;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class KanbanSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $board = Board::create([
            'name' => 'Проект Alpha',
        ]);

        $todo = Column::create([
            'board_id' => $board->id,
            'name' => 'Запланировано',
            'order' => 1,
        ]);

        $inProgress = Column::create([
            'board_id' => $board->id,
            'name' => 'В работе',
            'order' => 2,
        ]);

        $done = Column::create([
            'board_id' => $board->id,
            'name' => 'Готово',
            'order' => 3,
        ]);

        Task::create([
            'column_id' => $todo->id,
            'name' => 'Спроектировать интерфейс',
            'description' => 'Подготовить макеты в Figma',
            'order' => 1,
        ]);

        Task::create([
            'column_id' => $todo->id,
            'name' => 'Написать ТЗ',
            'description' => 'Собрать техническое задание для разработки',
            'order' => 2,
        ]);

        Task::create([
            'column_id' => $inProgress->id,
            'name' => 'Разработка бэкенда',
            'description' => 'Создать API и модели данных',
            'order' => 1,
        ]);

        Task::create([
            'column_id' => $done->id,
            'name' => 'Согласование бюджета',
            'description' => 'Утвердить смету с руководством',
            'order' => 1,
        ]);
    }
}
