<?php

namespace WASP1388\Kanban\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\File;

class PublishAssetsCommand extends Command
{
    /**
     * Имя и подпись команды.
     *
     * @var string
     */
    protected $signature = 'kanban:publish-assets';

    /**
     * Описание команды.
     *
     * @var string
     */
    protected $description = 'Очищает старые ресурсы wasp1388/kanban и публикует новые';

    /**
     * Выполнение команды.
     */
    public function handle()
    {
        // Путь к целевой директории
        $targetDir = public_path('wasp1388/kanban');

        if (File::exists($targetDir)) {
            File::deleteDirectory($targetDir);
            $this->info('Старые ресурсы удалены.');
        }

        // Выполняем публикацию по тегу из вашего ServiceProvider'а
        Artisan::call('vendor:publish', [
            '--tag' => 'kanban-assets',
        ]);

        $this->info('Новые ресурсы успешно опубликованы.');
    }
}