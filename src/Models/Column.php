<?php

namespace WASP1388\Kanban\Models;

use Orchid\Screen\AsSource;
use Orchid\Filters\Filterable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Column extends Model
{
    use AsSource, HasFactory, Filterable;

    protected $table = 'wasp1388_kanban_columns';

    protected $fillable = [
        'board_id',
        'name', 
        'order'
    ];
    
    protected $allowedFilters = [
        'id',
        'name',
        'board_id',
        'order',
        'created_at',
        'updated_at'
    ];

    protected $casts = [
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
        'order' => 'integer',
    ];

    public function board(): BelongsTo
    {
        return $this->belongsTo(Board::class, 'board_id');
    }

    public function tasks(): HasMany
    {
        return $this->hasMany(Task::class, 'column_id')->orderBy('order');
    }
}
