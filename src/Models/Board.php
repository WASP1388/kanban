<?php

namespace WASP1388\Kanban\Models;

use Orchid\Screen\AsSource;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Board extends Model
{
    use AsSource;

    protected $table = 'wasp1388_kanban_boards';

    protected $fillable = ['name'];

    public function columns() : HasMany
    {
        return $this->hasMany(Column::class)->orderBy('order');
    }

}
