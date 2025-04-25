<?php

namespace WASP1388\Kanban\Models;

use Orchid\Screen\AsSource;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Column extends Model
{
    use AsSource;

    protected $table = 'wasp1388_kanban_columns';

    protected $fillable = ['board_id', 'name', 'order'];

    public function board(): BelongsTo
    {
        return $this->belongsTo(Board::class);
    }

    public function tasks(): HasMany
    {
        return $this->hasMany(Task::class)->orderBy('order');
    }
}
