<?php

namespace WASP1388\Kanban\Orchid\Screens;

use WASP1388\Kanban\Models\Board;
use Orchid\Screen\TD;
use Orchid\Screen\Screen;
use Orchid\Screen\Actions\Link;
use Orchid\Support\Facades\Layout;
use Orchid\Screen\Fields\Group;
use Orchid\Screen\Components\Cells\DateTime;

class BoardListScreen extends Screen
{
    /**
     * Fetch data to be displayed on the screen.
     *
     * @return array
     */
    public function query(): iterable
    {
        return [
            'boards' => Board::paginate(),
        ];
    }

    /**
     * The name of the screen displayed in the header.
     *
     * @return string|null
     */
    public function name(): ?string
    {
        return 'Список досок';
    }

    /**
     * Button commands.
     *
     * @return Link[]
     */
    public function commandBar(): array
    {
        return [
            Link::make('Создать')
                ->icon('pencil')
                ->route('platform.kanban.board.edit')
        ];
    }

    /**
     * The screen's layout elements.
     *
     * @return \Orchid\Screen\Layout[]|string[]
     */
    public function layout(): iterable
    {
        return [
            Layout::table('boards', [
                TD::make('id', 'ID')->sort(),
                TD::make('name', 'Название'),
                TD::make('created_at', 'Создана')->usingComponent(DateTime::class, format: 'd.m.Y H:m:s'),
                TD::make('Actions', 'Действия')->render(function (Board $board) {
                    return
                    Group::make([
                        Link::make('Открыть')
                            ->route('platform.kanban.board.view', $board->id)
                            ->icon('eye')
                            ->class('btn btn-sm btn-primary mr-1'),

                        Link::make('Редактировать')
                            ->route('platform.kanban.board.edit', $board->id)
                            ->icon('pencil')
                            ->class('btn btn-sm btn-warning mr-1'),
                    ])->alignEnd()->autoWidth();
                })->align(TD::ALIGN_RIGHT)->width('100px'),
            ]),
        ];
    }
}
