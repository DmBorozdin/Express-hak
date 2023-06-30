import express from "express";
import { routerUsers } from "./routes/users";
import { routerPosts } from "./routes/posts";

const app = express();
const PORT = 3000;

// Подключение middleware
// app.use(loggerMiddleware);
app.use(express.json());

// Подключение маршрутов
app.use('/users', routerUsers);
app.use('/posts', routerPosts);

// Подключение обработчика ошибок
// app.use(errorMiddleware);

// Старт сервера
app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});