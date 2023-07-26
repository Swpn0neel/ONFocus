import React from "react";
import { useState, useEffect } from "react";
import Music from "./Components/Music";
import Timer from "./Components/Timer";
import { NewTodoForm } from "./Components/NewTodoForm";
import { TodoList } from "./Components/TodoList";
export default function Hero_s() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS");
    if (localValue == null) return [];

    return JSON.parse(localValue);
  });

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos));
  }, [todos]);

  function addTodo(title) {
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false },
      ];
    });
  }

  function toggleTodo(id, completed) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }

        return todo;
      });
    });
  }

  function deleteTodo(id) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }
  return (
    <>
      <div className="min-h-[calc(100vh-56px)] h-auto flex-col p-2 lg:p-20">
        <div className="lg:flex lg:w-full justify-center items-center  lg:gap-x-8 lg:gap-y-2">
          <div className="space-y-6 p-2  lg:w-1/3">
            <Timer />
            <Music />
          </div>
          <div className="p-2 lg:w-1/3 self-center   justify-self-start ">
            <div className=" rounded-2xl border h-auto overflow-y-auto lg:h-[400px] border-black opt shade2 p-2">
              <NewTodoForm onSubmit={addTodo} />
              <div className="flex justify-center">
                <TodoList
                  todos={todos}
                  toggleTodo={toggleTodo}
                  deleteTodo={deleteTodo}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="h-10 lg:w-2/3 w-full my-5 rounded-xl lg:mx-auto  flex justify-center items-center border lg:px-4 border-black shade1">
          More exciting features coming very soon!!
        </div>
      </div>
    </>
  );
}