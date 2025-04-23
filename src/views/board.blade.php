<div class="column-container grid grid-cols-1 md:grid-cols-3 gap-6"
        data-controller="board"
        data-board-task-selector-value="{{ $task_selector }}"
        data-board-column-action-value="{{ route($column_action) }}"
        data-board-task-action-value="{{ route($task_action) }}"
        data-board-success-message-value="{{ $success_message }}"
        data-board-failure-message-value="{{ $error_message }}">
    @foreach($board->columns as $column)
        <div class="bg-gray-100 p-4 rounded shadow" data-id="{{ $column->id }}">
            <h3 class="font-bold text-lg mb-3 column-handle cursor-move">{{ $column->name }}</h3>
            <div class="task-list space-y-2 min-h-[100px]" data-status-id="{{ $column->id }}">
                @foreach($column->tasks as $task)
                    <div class="bg-white p-3 m-2 rounded shadow cursor-move" data-id="{{ $task->id }}">
                        <h5>{{ $task->name }}</h5>
                        <p> {{ $task->description }} </p>
                    </div>
                @endforeach
            </div>
        </div>
    @endforeach
</div>
