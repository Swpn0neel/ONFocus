import React from "react";
import { useState } from "react";

export function NewTodoForm({ onSubmit }) {
  const [newItem, setNewItem] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (newItem === "") return;

    onSubmit(newItem);

    setNewItem("");
  }

  return (
    <div className="flex justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-full space-y-5 rounded-2xl p-4"
      >
        <div className="">
          <h2 className="text-2xl text-center font-semibold">To-Do List</h2>
        </div>
        <div className="flex gap-3">
          <input
            className="h-10 w-4/5 rounded-lg border pl-2 border-black"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            type="text"
            id="item"
          />
          <button className="btn w-1/4 rounded-lg border border-black bg-[#001F8C] text-white">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
