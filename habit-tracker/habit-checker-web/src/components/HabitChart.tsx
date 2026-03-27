"use client"; // Chart interactive
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

// Week/Month data
const data = [
  { day: 'Mon', completed: 3 },
  { day: 'Tue', completed: 5 },
  { day: 'Wed', completed: 2 },
  { day: 'Thu', completed: 4 },
  { day: 'Fri', completed: 6 },
  { day: 'Sat', completed: 3 },
  { day: 'Sun', completed: 7 },
];

export default function HabitChart() {
  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm mb-8">
      <h3 className="text-lg font-bold text-slate-800 mb-4">Weekly Progress</h3>
      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
            <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
            <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
            <Tooltip 
              cursor={{fill: '#f1f5f9'}} 
              contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)'}} 
            />
            <Bar dataKey="completed" fill="#4f46e5" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}