<?php

namespace WASP1388\Kanban\Http\Controllers;

use Illuminate\Routing\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use WASP1388\Kanban\Models\Column;
use WASP1388\Kanban\Models\Task;

class KanbanController extends Controller
{
    public function updateColumnOrder(Request $request)
    {
        $request->validate([
            'order' => 'required|array|min:1',
            'order.*' => 'integer|exists:wasp1388_kanban_columns,id'
        ]);

        $order = $request->input('order');
    
        DB::transaction(function () use ($order) {
            foreach ($order as $index => $id) {
                Column::where('id', $id)->update(['order' => $index]);
            }
        });
    
        return response()->json(['success' => true]);
    }

    public function updateTaskOrder(Request $request)
    {
        $request->validate([
            'task_id' => 'required|integer|exists:wasp1388_kanban_tasks,id',
            'column_id' => 'required|integer|exists:wasp1388_kanban_columns,id',
            'order' => 'required|array|min:1',
            'order.*' => 'integer|exists:wasp1388_kanban_tasks,id'
        ]);

        DB::transaction(function () use ($request) {
            $task = Task::findOrFail($request['task_id']);

            if ($task->column_id != $request['column_id']) {
                $task->update(['column_id' => $request['column_id']]);
            }

            foreach ($request['order'] as $index => $taskId) {
                Task::where('id', $taskId)->update(['order' => $index + 1]);
            }
        });

        return response()->json(['success' => true]);
    }
}