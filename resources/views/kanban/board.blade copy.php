@push('scripts')
<script src="https://cdn.jsdelivr.net/npm/sortablejs@1.15.0/Sortable.min.js"></script>
<script>
    function initializeSortables() {
        console.log('Инициализация Sortable');

        document.querySelectorAll('.task-list').forEach(list => {
            if (list.dataset.sortableInitialized) return;

            new Sortable(list, {
                group: 'shared',
                animation: 150,
                onEnd: function (evt) {
                    let order = Array.from(evt.to.children).map(item => item.dataset.id);
                    let taskId = evt.item.dataset.id;
                    let statusId = evt.to.dataset.statusId;

                    fetch('{{ route("platform.board.task.update") }}', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'X-CSRF-TOKEN': '{{ csrf_token() }}'
                        },
                        body: JSON.stringify({ task_id: taskId, status_id: statusId, order: order })
                    }).then(res => res.json())
                      .then(data => console.log('Успешно обновлено:', data))
                      .catch(err => console.error('Ошибка при обновлении:', err));
                }
            });

            list.dataset.sortableInitialized = true;
        });

        const columnContainer = document.querySelector('.column-container');
        if (columnContainer && !columnContainer.dataset.sortableInitialized) {
            new Sortable(columnContainer, {
                animation: 150,
                handle: '.column-handle',
                onEnd: function (evt) {
                    let order = Array.from(evt.to.children).map(item => item.dataset.id);

                    fetch('{{ route("platform.board.column.update") }}', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'X-CSRF-TOKEN': '{{ csrf_token() }}'
                        },
                        body: JSON.stringify({ order: order })
                    }).then(res => res.json())
                      .then(data => console.log('Порядок колонок обновлен:', data))
                      .catch(err => console.error('Ошибка при обновлении колонок:', err));
                }
            });

            columnContainer.dataset.sortableInitialized = true;
        }
    }

    document.addEventListener('turbo:load', initializeSortables);
</script>
@endpush

<div class="column-container grid grid-cols-1 md:grid-cols-3 gap-6">
    @foreach($board->columns as $column)
        <div class="bg-gray-100 p-4 rounded shadow" data-id="{{ $column->id }}">
            <h3 class="font-bold text-lg mb-3 column-handle cursor-move">{{ $column->name }}</h3>
            <div class="task-list space-y-2 min-h-[100px]" data-status-id="{{ $column->id }}">
                @foreach($column->tasks as $task)
                    <div class="bg-white p-3 rounded shadow cursor-move" data-id="{{ $task->id }}">
                        <h5>{{ $task->name }}</h5>
                        <p> {{ $task->description }} </p>
                    </div>
                @endforeach
            </div>
        </div>
    @endforeach
</div>
