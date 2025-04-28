<?php

namespace WASP1388\Kanban\Http\Controllers;

use Illuminate\Routing\Controller;
use Illuminate\Http\Request;

use WASP1388\Kanban\Models\Board;
use WASP1388\Kanban\Models\Column;
use WASP1388\Kanban\Models\Task;


class KanbanController extends Controller
{
    public function updateColumnOrder(Request $request)
    {
        $order = $request->input('order');
    
        foreach ($order as $index => $id) {
            Column::where('id', $id)->update(['order' => $index]);
        }
    
        return response()->json(['success' => true]);
    }

    public function updateTaskOrder(Request $request)
    {
        
        $task = Task::find($request['task_id']);

        if ($task->column_id != $request['column_id']) {
            $task->update(['column_id' => $request['column_id']]);
        }

        foreach ($request['order'] as $index => $taskId) {
            Task::where('id', $taskId)->update(['order' => $index + 1]);
        }

        return response()->json(['success' => true]);
    }
}