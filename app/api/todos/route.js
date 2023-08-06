import { NextResponse } from "next/server";
import { Todo, getTodo } from "@/types.d";

export const DATA_URL_SOURCE = "https://jsonplaceholder.typicode.com/posts"

// export const GET = async (req, res) => {
//     try {
//         const todos = getTodo();
//         return NextResponse.json({message: "OK", todos}, { status: 200 });
//     } catch (error) {
//         return NextResponse.json({message: "ERROR", error}, { status: 500 })
//     }
// }

export async function GET() {
    const res = await fetch(`${DATA_URL_SOURCE}`)
    const todos = await res.json()
    return todos
}

// export const DELETE = async (request) => {
//     const id = request.query
//     const res = await fetch(`${DATA_URL_SOURCE}/posts/`)
// }

export async function POST(request) {
    const { userId, title } = await request.json;

    if (!userId || !title) return NextResponse.json({"message": "Missing required data"});

    const res = await fetch(DATA_URL_SOURCE, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title,
            body,
            userId,
          }),
    })

    const newTodo = await res.json();
    return newTodo;
}
