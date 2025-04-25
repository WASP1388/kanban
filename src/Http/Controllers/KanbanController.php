<?php

namespace WASP1388\Kanban\Http\Controllers;

use Illuminate\Routing\Controller;

class KanbanController extends Controller
{
    public function showKanban()
    {
        return view('kanban::board');
    }
}