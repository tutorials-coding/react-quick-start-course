import { NextResponse } from 'next/server';

const readingList = [
  {
    id: 1,
    title: 'Чистый код: Создание, анализ и рефакторинг',
    author: 'Роберт С. Мартин',
    isRead: true,
  },
  {
    id: 2,
    title: 'Карьера программиста',
    author: 'Г. Лакман Макдауэлл',
    isRead: true,
  },
  {
    id: 3,
    title: 'Совершенный код',
    author: 'Стив Макконнелл',
    isRead: false,
  },
  {
    id: 4,
    title:
      'Рефакторинг кода на JavaScript: улучшение проекта существующего кода',
    author: 'Мартин Фаулер',
    isRead: false,
  },
];

export async function GET(request) {
  return NextResponse.json(readingList);
}
