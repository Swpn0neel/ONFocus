import React from "react";
import { Menu } from "@mantine/core";
import Settings from "../assets/Settings.svg";

export default function CustomTime({ handleTimeSelect, selectedTime }) {
  const timerOptions = [1, 2, 5, 10, 15, 20, 25];
  return (
    <Menu width={200} shadow="md">
      <Menu.Target>
        <button>
          <img src={Settings} className="h-8" alt="" />
        </button>
      </Menu.Target>

      <Menu.Dropdown>
        {timerOptions.map((option) => (
          <Menu.Item
            key={option}
            onClick={() => handleTimeSelect(option)}
            className={selectedTime === option ? "active" : ""}
          >
            {option} minute{option === 1 ? "" : "s"}
          </Menu.Item>
        ))}
      </Menu.Dropdown>
    </Menu>
  );
}
