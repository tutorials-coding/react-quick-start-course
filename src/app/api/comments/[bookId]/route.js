import { NextResponse } from 'next/server';

let lastId = 0;

const comments = [
  {
    id: lastId++,
    bookId: 2,
    userName: 'John',
    text: 'Хорошая книга!',
  },
  {
    id: lastId++,
    bookId: 2,
    userName: 'Alice',
    text: 'Понравилась!',
  },
];

export async function GET(_, { params }) {
  const bookId = Number(params.bookId);
  const bookComments = comments.filter((comment) => comment.bookId === bookId);

  return NextResponse.json(bookComments);
}

export async function POST(request, { params }) {
  const json = await request.json();

  if (!(json.userName && json.text)) {
    return new NextResponse(
      JSON.stringify({
        status: 'success',
      })
    );
  }

  comments.unshift({
    id: lastId++,
    bookId: Number(params.bookId),
    userName: json.userName,
    text: json.text,
  });

  return new NextResponse(
    JSON.stringify({
      status: 'success',
    })
  );
}
