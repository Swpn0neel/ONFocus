import Cross from "../assets/cross.png";

export function TodoItem({ completed, id, title, toggleTodo, deleteTodo }) {
  return (
    <li className="flex items-center gap-2 pb-2">
      <input
        className=" px-4 rounded-md border-[1px] border-[rgba(0,0,0,0.12)] focus:border-[rgba(0,0,0,1)] h-[24px] bg-green-200 w-auto"
        type="checkbox"
        checked={completed}
        onChange={(e) => toggleTodo(id, e.target.checked)}
      />
      <div className="h-10 w-[250px] lg:w-[350px] flex justify-between border items-center bg-white p-2 border-black rounded-lg">
        <label className="text-lg">{title}</label>

        <button
          onClick={() => deleteTodo(id)}
          className="btn btn-danger px-2 py-0 rounded-md"
        >
          <img src={Cross} className="h-5  " />
        </button>
      </div>
    </li>
  );
}

