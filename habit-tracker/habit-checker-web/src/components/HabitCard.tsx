"use client";

// Interface for props
interface HabitCardProps {
  id: number;
  name: string;
  type: "Good" | "Bad";
  onDelete: (id: number) => void; // English: Define the onDelete prop type
}

export default function HabitCard({ id, name, type, onDelete }: HabitCardProps) {
  return (
    <div className="flex items-center justify-between p-5 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all">
      <div className="flex flex-col">
        <span className="font-bold text-slate-800 text-lg">{name}</span>
        <span className={`text-xs font-semibold mt-1 px-2 py-0.5 rounded-full w-fit ${
          type === "Good" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
        }`}>
          {type} Habit
        </span>
      </div>
      
      <div className="flex gap-2">
        <button className="bg-slate-900 text-white px-4 py-2 rounded-lg hover:bg-slate-800 transition active:scale-95">
          Done
        </button>
        {/* Delete Button */}
        <button 
          onClick={() => onDelete(id)} // English: Triggering the delete function on click
          className="bg-red-50 text-red-600 px-3 py-2 rounded-lg hover:bg-red-100 transition active:scale-95"
        >
          Delete
        </button>
      </div>
    </div>
  );
}