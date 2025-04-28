<?php

namespace WASP1388\Kanban\Orchid\Screens;

use WASP1388\Kanban\Models\Board;
use Orchid\Screen\Screen;
use Illuminate\Http\Request;
use Orchid\Screen\Fields\Input;
use Orchid\Screen\Actions\Button;
use Orchid\Support\Facades\Alert;
use Orchid\Support\Facades\Toast;
use Orchid\Support\Facades\Layout;
use WASP1388\Kanban\Orchid\Layouts\BoardEditLayout;


class BoardEditScreen extends Screen
{

    public $board;


    public function query(Board $board): array
    {
        return [
            'board' => $board
        ];
    }

    public function name(): ?string
    {
        return $this->board->exists ? 'Edit board' : 'Creating a new board';
    }


    public function description(): ?string
    {
        return "Board";
    }

    /**
     * Button commands.
     *
     * @return Link[]
     */
    public function commandBar(): array
    {
        return [
            Button::make('Create board')
                ->icon('pencil')
                ->method('createOrUpdate')
                ->canSee(!$this->board->exists),

            Button::make('Update')
                ->icon('note')
                ->method('createOrUpdate')
                ->canSee($this->board->exists),

            Button::make('Remove')
                ->icon('trash')
                ->method('remove')
                ->canSee($this->board->exists),
        ];
    }

    /**
     * Views.
     *
     * @return Layout[]
     */
    public function layout(): array
    {
        return [
            BoardEditLayout::class,
        ];
    }

    public function createOrUpdate(Request $request)
    {
        $validated = $request->validate([
            'board.name'       => 'required',
        ], [
            'board.name.required'       => 'Пожалуйста, укажите заголовок.',
        ]);

        $this->board->fill($validated['board'])->save();

        Toast::info('Доска успешно сохранена.');

        return redirect()->route('platform.kanban.board.list');
    }


    /**
     * @return \Illuminate\Http\RedirectResponse
     */
    public function remove()
    {
        $this->board->delete();

        Alert::info('You have successfully deleted the board.');

        return redirect()->route('platform.kanban.board.list');
    }
}
