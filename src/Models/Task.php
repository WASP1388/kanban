<?php

namespace WASP1388\Kanban\Models;

use Orchid\Screen\AsSource;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Task extends Model
{
    //
    use HasFactory, AsSource;

    protected $table = 'wasp1388_kanban_tasks';

    protected $fillable = ['column_id', 'name', 'order'];

    public function column(): BelongsTo
    {
        return $this->belongsTo(Column::class);
    }

}
