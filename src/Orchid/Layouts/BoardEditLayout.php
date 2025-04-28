<?php

namespace WASP1388\Kanban\Orchid\Layouts;

use Orchid\Screen\TD;
use Orchid\Screen\Actions\Link;
use Orchid\Screen\Fields\Input;
use Orchid\Screen\Fields\Quill;
use Orchid\Screen\Layouts\Rows;
use Orchid\Screen\Layouts\Table;
use Orchid\Screen\Fields\Relation;
use Orchid\Screen\Fields\TextArea;

class BoardEditLayout extends Rows
{
    /**
     * The screen's layout elements.
     *
     * @return Field[]
     */
    public function fields(): array
    {
        return [
            Input::make('board.name')
                ->title('Name')
                ->required()
                ->placeholder('Attractive but mysterious title')
                ->help('Specify a short descriptive title for this post.'),
        ];
    }
}
