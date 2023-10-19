import { NextResponse } from 'next/server';

const readingList = [
  {
    id: 1,
    title: 'Чистый код: Создание, анализ и рефакторинг',
    author: 'Роберт С. Мартин',
    image: 'img-1',
    isRead: true,
  },
  {
    id: 2,
    title: 'Карьера программиста',
    author: 'Г. Лакман Макдауэлл',
    image: 'img-2',
    isRead: true,
  },
  {
    id: 3,
    title: 'Совершенный код',
    author: 'Стив Макконнелл',
    image: 'img-3',
    isRead: false,
  },
  {
    id: 4,
    title:
      'Рефакторинг кода на JavaScript: улучшение проекта существующего кода',
    author: 'Мартин Фаулер',
    image: 'img-4',
    isRead: false,
  },
];

export async function GET(request) {
  return NextResponse.json(readingList);
}
