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
    @foreach ($columns as $column)
        @include('kanban::layouts.column', ['column' => $column])
    @endforeach
    </div>
</div>