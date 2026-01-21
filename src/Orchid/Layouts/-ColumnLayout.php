<?php

namespace WASP1388\Kanban\Orchid\Layouts;

use Orchid\Screen\Layout;
use Orchid\Screen\Repository;

class ColumnLayout extends Layout {
    
    protected $template = 'kanban::layouts.column';

    public function build(Repository $repository)
    {
        $column = $repository->get('column');
        //$tasks = $column->tasks;

        if (! $this->isSee()) {
            return;
        }

        return view($this->template, compact('column'));
    }

}