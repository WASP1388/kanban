<div class="card m-2 bg-white rounded cursor-move" data-id="{{ $task->id }}">
    <div class="card-header">
        {{ $task->name }}
    </div>
    <div class="card-body">
        <p class="card-text">{{ $task->description }}</p>
    </div>
</div>