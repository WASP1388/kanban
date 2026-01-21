<?php

namespace WASP1388\Kanban\Models;

use Orchid\Screen\AsSource;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Board extends Model
{
    use AsSource, HasFactory;

    protected $table = 'wasp1388_kanban_boards';

    protected $fillable = [
        'name'
    ];

    protected $casts = [
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    public function columns() : HasMany
    {
        return $this->hasMany(Column::class, 'board_id')->orderBy('order');
    }

}
