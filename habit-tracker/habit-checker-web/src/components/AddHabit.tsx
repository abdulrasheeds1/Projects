"use client";
import { useState } from "react";

// Interface for the component props
interface AddHabitProps {
  onAdd: (name: string, type: "Good" | "Bad") => void;
}

export default function AddHabit({ onAdd }: AddHabitProps) {
  const [name, setName] = useState("");
  const [type, setType] = useState<"Good" | "Bad">("Good");

  const handleSubmit = () => {
    if (name.trim()) {
      onAdd(name, type); // Triggering the add function
      setName(""); // Resetting the input field
    }
  };

  // Function to handle Enter key press
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSubmit(); // Trigger submit when Enter is pressed
    }
  };

  return (
    <div className="bg-white p-6 rounded-2xl border border-dashed border-slate-300 mb-8 flex flex-col gap-4 shadow-sm">
      <h3 className="font-bold text-slate-700">Add New Habit</h3>
      <div className="flex flex-col sm:flex-row gap-3">
        <input 
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)} // Capturing input text
          onKeyDown={handleKeyDown} // Listen for Enter key
          placeholder="Habit name (e.g. Cricket)" 
          className="flex-1 p-3 border rounded-xl outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
        />
        <select 
          value={type}
          onChange={(e) => setType(e.target.value as "Good" | "Bad")} // Handling dropdown change
          className="p-3 border rounded-xl bg-white outline-none cursor-pointer"
        >
          <option value="Good">Good</option>
          <option value="Bad">Bad</option>
        </select>
        <button 
          onClick={handleSubmit} // Calling the submit function
          className="bg-indigo-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-indigo-700 active:scale-95 transition-all shadow-md"
        >
          Add
        </button>
      </div>
    </div>
  );
}