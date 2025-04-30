<script type="module" src="{{ asset('wasp1388/kanban/orchid-kanban.js') }}"></script>

<div class="container">
    <div class="row"
        data-controller="board"
        data-board-task-selector-value=".task-list"
        data-board-column-action-value="{{ route('platform.kanban.board.column.update') }}"
        data-board-task-action-value="{{ route('platform.kanban.board.task.update') }}"
        data-board-success-message-value="Успешно"
        data-board-failure-message-value="Ошибка"
    >
    @foreach($board->columns as $column)
        <div class="col-3 m-2 p-2 bg-secondary bg-opacity-10 rounded cursor-move" data-id="{{ $column->id }}">
            <h5 class="text-center mb-3">{{ $column->name }}</h3>
            <div class="task-list" data-status-id="{{ $column->id }}">
                @foreach($column->tasks as $task)
                    <div class="card m-2 bg-white rounded cursor-move" data-id="{{ $task->id }}">
                        <div class="card-header">
                            {{ $task->name }}
                        </div>
                        <div class="card-body">
                            <p class="card-text">{{ $task->description }}</p>
                        </div>
                    </div>
                @endforeach
            </div>
            <button class="btn btn-outline-primary btn-sm mx-auto">Добавить</button>
        </div>
    @endforeach
    </div>
</div>
