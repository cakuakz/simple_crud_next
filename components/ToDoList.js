"use client";
import { DATA_URL_SOURCE, DELETE, GET } from "@/app/api/todos/route";
import { Trash2 } from 'lucide-react';
import Link from "next/link";
import React, { useState, useEffect } from "react";

const ToDoList = () => {

    const [todos, setTodo] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchTodo = async () => {
            try {
                const response = await GET();
                setTodo(response);
                setError("");
                
            } catch (error) {
                console.error("Error fetching posts:", error);
                setError("Error fetching posts");
            }
        };
        fetchTodo();
    }, [])

    const deleteTodo = async (id) => {
        try {
            await fetch(`${DATA_URL_SOURCE}/${id}`, {
                method: 'DELETE',
            });
            const updatedTodos = await GET();
            setTodo(updatedTodos);
            setError("");
        } catch (error) {
            console.error("Error deleting todo:", error);
            setError("Error deleting todo");
        }
    }

    if (error) {
        return (
          <div>
            <p className="text-2xl font-bold">Error: {error}</p>
          </div>
        );
      }

    return ( 
        <div className="container mx-auto">
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {todos.map((todo) => (
                    <li key={todo.id} className="flex flex-col justify-between md:flex-row p-4 bg-white rounded-lg border-2 mt-5">
                        <h1 className="text-blue-900">{todo.title}</h1>
                            <button className="justify-self-end" onClick={() => deleteTodo(todo.id)}>
                                <Trash2 />
                            </button> 
                    </li>
                ))}
            </ul>
        </div>
     );
}
 
export default ToDoList;