<?php

namespace WASP1388\Kanban\Orchid\Screens;

use WASP1388\Kanban\Models\Board;
use Orchid\Screen\Screen;
use Orchid\Support\Facades\Layout;

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

    public function layout(): iterable
    {
        return [
            Layout::view('kanban::board'),
        ];
    }
}
