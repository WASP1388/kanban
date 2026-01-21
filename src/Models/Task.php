<?php

namespace WASP1388\Kanban\Models;

use Orchid\Screen\AsSource;
use Orchid\Filters\Filterable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Task extends Model
{
    //
    use HasFactory, AsSource, Filterable;

    protected $table = 'wasp1388_kanban_tasks';

    protected $fillable = ['column_id', 'name', 'description', 'order'];
    
    protected $allowedFilters = [
        'id',
        'name',
        'description',
        'column_id',
        'order',
        'created_at',
        'updated_at'
    ];

    protected $casts = [
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
        'order' => 'integer',
    ];

    public function column(): BelongsTo
    {
        return $this->belongsTo(Column::class);
    }

}
