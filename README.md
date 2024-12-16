# 📝 Code Editor App

Упрощённый интерфейс редактора кода, где пользователь может писать код на Python или Go, отправлять его на сервер (мок-сервер) для выполнения и получать результаты.

## 🚀 Установка и запуск

1. **Установите зависимости**

   ```bash
   npm install
   ```

2. **Запустите проект**

   ```bash
   npm run dev
   ```

3. **Откройте проект в браузере**

   Проект откроется по ссылке: [http://localhost:3000](http://localhost:3000)

## ⚙️ Как работает мок-сервер

Мок-сервер создан с использованием Mirage.js.
Он обрабатывает POST-запросы на /api/execute и возвращает:

Успех: результат выполнения кода.
Ошибка: сообщение об ошибке, если в коде есть определённые ключевые слова (например, error).
Задачи загружаются из task.json через GET-запрос.

### Файл задачи 📂

Данные задачи закоды сохраняются в `public/api/task.json`.
