# Laravel Orhid Kanban Package

Пакет `kanban` предоставляет готовую инфраструктуру для работы с Kanban-досками в Laravel Orchid. Он включает серверную и клиентскую части, а также легко интегрируется в проект благодаря сервис-провайдеру и системе публикации ресурсов.

## Установка

1. Установите пакет через Composer:
   ```bash
   composer require wasp1388/kanban
   ```

2. Зарегистрируйте сервис-провайдер в конфигурации Laravel (если не используется автообнаружение):
   ```php
   WASP1388\Kanban\KanbanServiceProvider::class,

3. Выполните публикацию сервис-провайдера:
   ```bash
   php artisan vendor:publish --provider="WASP1388\Kanban\KanbanServiceProvider"
   ```
## Дополнительно

1. Вручную опубликуйте ресурсы пакета командой (если не выполнена публикация сервис-провайдера):
   ```bash
   php artisan vendor:publish --tag=kanban-assets
   ```

2. Переопубликуйте artisan командой, если были внесены изменения в ресурсы:
   ```bash
   php artisan kanban:publish-assets
   ```

## Использование




### Представления
Включите представления пакета в вашем приложении:
```php
@include('kanban::board')
```

### Маршруты
Используйте маршруты, связанные с `KanbanController`, для обработки запросов. Например:
```php
Route::get('/kanban', [\WASP1388\Kanban\Http\Controllers\KanbanController::class, 'index']);
```

### Фронтенд
1. Убедитесь, что ресурсы пакета опубликованы в директорию `public/wasp1388/kanban`.
2. Настройте Vite для сборки JavaScript и CSS, если требуется.

## Команды Artisan
Если пакет включает кастомные Artisan-команды, они будут зарегистрированы автоматически при использовании консоли.

## Структура пакета
- **`resources/views`**: Blade-шаблоны для отображения Kanban-доски.
- **`resources/js`**: JavaScript-файлы для клиентской логики.
- **`src/Http/Controllers/KanbanController.php`**: Контроллер для обработки запросов.
- **`vite.config.js`**: Конфигурация для сборки фронтенд-ресурсов.

## Лицензия
Этот пакет распространяется под лицензией MIT.