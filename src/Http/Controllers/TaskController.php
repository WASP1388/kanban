<?php

namespace WASP1388\Kanban\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use WASP1388\Kanban\Models\Task;
use WASP1388\Kanban\Models\Column;
use Orchid\Support\Facades\Toast;

class TaskController extends Controller
{
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $columns = Column::all();
        return view('kanban::task-create', compact('columns'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'column_id' => 'required|exists:wasp1388_kanban_columns,id',
        ]);

        $task = new Task();
        $task->name = $request->input('name');
        $task->description = $request->input('description');
        $task->column_id = $request->input('column_id');
        $task->order = Task::where('column_id', $task->column_id)->count() + 1;
        $task->save();

        Toast::info('Задача создана успешно.');

        return redirect()->route('platform.kanban.task.table');
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $task = Task::findOrFail($id);
        $columns = Column::all();
        
        return view('kanban::task-edit', compact('task', 'columns'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'column_id' => 'required|exists:wasp1388_kanban_columns,id',
        ]);

        $task = Task::findOrFail($id);
        $task->name = $request->input('name');
        $task->description = $request->input('description');
        $task->column_id = $request->input('column_id');
        $task->save();

        Toast::info('Задача обновлена успешно.');

        return redirect()->route('platform.kanban.task.table');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $task = Task::findOrFail($id);
        $task->delete();

        Toast::info('Задача удалена успешно.');

        return redirect()->route('platform.kanban.task.table');
    }
}