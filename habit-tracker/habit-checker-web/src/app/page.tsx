"use client";
import { useState, useEffect } from "react"; // English: Added useEffect for randomizing quotes
import HabitCard from "../components/HabitCard";
import HabitChart from "../components/HabitChart";
import AddHabit from "../components/AddHabit";

export default function Home() {
  // English: List of motivational quotes
  const quotes = [
    "Small wins lead to big results. Keep going!",
    "Discipline is the bridge between goals and accomplishment.",
    "Your habits define your future. Choose wisely.",
    "Don't stop until you're proud.",
    "Success is the sum of small efforts repeated daily."
  ];

  const [habits, setHabits] = useState([
    { id: 1, name: "Morning Exercise", type: "Good" as const },
    { id: 2, name: "Reading 10 Pages", type: "Good" as const },
    { id: 3, name: "Social Media Scrolling", type: "Bad" as const },
  ]);

  const [currentQuote, setCurrentQuote] = useState("");

  // English: Pick a random quote when the component mounts
  useEffect(() => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setCurrentQuote(randomQuote);
  }, []);

  const addNewHabit = (name: string, type: "Good" | "Bad") => {
    const newHabit = {
      id: Date.now(),
      name,
      type,
    };
    setHabits([...habits, newHabit]);
  };

  const deleteHabit = (id: number) => {
    setHabits(habits.filter((habit) => habit.id !== id));
  };

  return (
    <main className="min-h-screen bg-gray-50 p-6 md:p-12">
      <div className="max-w-3xl mx-auto">
        <header className="mb-10">
          <h1 className="text-4xl font-extrabold text-slate-900">Habit Tracker</h1>
          <p className="text-slate-500 mt-2 italic">"One day or Day One. You decide."</p>
        </header>

        <HabitChart />

        <section className="bg-indigo-600 p-6 rounded-2xl text-white mb-8 shadow-lg">
          <h2 className="text-xl font-bold">Today's Motivation</h2>
          {/* English: Displaying the dynamic random quote */}
          <p className="mt-1 opacity-90">{currentQuote || "Loading inspiration..."}</p>
        </section>

        <AddHabit onAdd={addNewHabit} />

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">My Habits</h2>
          {habits.map((habit) => (
            <HabitCard 
              key={habit.id} 
              id={habit.id} 
              name={habit.name} 
              type={habit.type} 
              onDelete={deleteHabit}
            />
          ))}
        </div>
      </div>
    </main>
  );
}