<?php

namespace WASP1388\Kanban\Orchid\Layouts;

use Orchid\Screen\Layout;
use Orchid\Screen\Repository;

class CardLayout extends Layout {
    
    protected $template = 'kanban::layouts.card';

    public function build(Repository $repository)
    {
        if (! $this->isSee()) {
            return;
        }

        $task = $repository->get('task');

        return view($this->template, compact('task'));
    }

}