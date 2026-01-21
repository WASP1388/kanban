<?php

namespace WASP1388\Kanban\Orchid\Layouts;

use Orchid\Screen\Layout;
use Orchid\Screen\Repository;

class BoardLayout extends Layout {
    
    //protected $template = 'kanban::layouts.board';
    public function __construct(string $template, array $layouts = [])
    {
        $this->template = $template;
        $this->layouts = $layouts;
    }
    public function build(Repository $repository)
    {
        $board = $repository->get('board');
        $columns = $board->columns;
        $button = $this->layouts[0];
        if (! $this->isSee()) {
            return;
        }

        return view($this->template, compact('columns','button'));
    }

}