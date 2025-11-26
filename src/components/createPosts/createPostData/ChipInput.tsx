"use client";
import { useState } from "react";
import type { ChangeEvent, KeyboardEvent } from "react";

interface ChipInputProps {
  limit?: number;
}

export default function ChipInput({ limit = 15 }: ChipInputProps) {
  const [chips, setChips] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  const addChip = () => {
    const value = inputValue.trim();

    if (!value) return;
    if (chips.includes(value)) return;
    if (chips.length >= limit) return;

    setChips([...chips, value]);
    setInputValue("");
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" || e.key === "," || e.key === "Tab") {
      e.preventDefault();
      addChip();
    }

    if (e.key === "Backspace" && inputValue === "") {
      setChips((prev) => prev.slice(0, -1));
    }
  };

  const removeChip = (index: number) => {
    setChips(chips.filter((_, i) => i !== index));
  };

  return (
    <div className="chips_input">
      <div className="inner">
        {chips.map((chip, i) => (
          <span className="chip" key={i}>
            {chip}
            <button onClick={() => removeChip(i)} aria-label="remove chip">
              ✕
            </button>
          </span>
        ))}

        <input
          value={inputValue}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>
    </div>
  );
}
