<div class="col-3 m-2 p-2 bg-secondary bg-opacity-10 rounded cursor-move" data-id="{{ $column->id }}">
    <h5 class="text-center mb-3">{{ $column->name }}</h3>
    <div class="task-list" data-status-id="{{ $column->id }}">
    @foreach ($column->tasks as $task)
        @include('kanban::layouts.card', ['task' => $task])
    @endforeach
    </div>
</div>