@extends('platform::app')

@section('title', 'Создание задачи')

@section('content')
    <div class="row">
        <div class="col-md-8 offset-md-2">
            <div class="card">
                <div class="card-header">
                    <h4>Создать новую задачу</h4>
                </div>
                <div class="card-body">
                    <form method="POST" action="{{ route('platform.kanban.task.store') }}">
                        @csrf
                        
                        <div class="form-group mb-3">
                            <label for="name">Название задачи *</label>
                            <input type="text" class="form-control" id="name" name="name" value="{{ old('name') }}" required>
                            @error('name')
                                <div class="text-danger">{{ $message }}</div>
                            @enderror
                        </div>
                        
                        <div class="form-group mb-3">
                            <label for="description">Описание</label>
                            <textarea class="form-control" id="description" name="description" rows="4">{{ old('description') }}</textarea>
                            @error('description')
                                <div class="text-danger">{{ $message }}</div>
                            @enderror
                        </div>
                        
                        <div class="form-group mb-3">
                            <label for="column_id">Колонка *</label>
                            <select class="form-control" id="column_id" name="column_id" required>
                                <option value="">Выберите колонку</option>
                                @foreach($columns as $column)
                                    <option value="{{ $column->id }}" {{ old('column_id') == $column->id ? 'selected' : '' }}>
                                        {{ $column->name }}
                                    </option>
                                @endforeach
                            </select>
                            @error('column_id')
                                <div class="text-danger">{{ $message }}</div>
                            @enderror
                        </div>
                        
                        <div class="d-flex justify-content-between">
                            <a href="{{ route('platform.kanban.task.table') }}" class="btn btn-secondary">Отмена</a>
                            <button type="submit" class="btn btn-primary">Создать задачу</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
@endsection