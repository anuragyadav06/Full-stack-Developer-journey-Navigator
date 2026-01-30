import React, { useState, useEffect } from "react";
import { Lock, Unlock, Moon, Sun } from "lucide-react";

const DEFAULT_START_DATE = "2026-01-24";

const Settings: React.FC = () => {

  /* ------------------ Journey Date ------------------ */

  const [startDate, setStartDate] = useState(
    localStorage.getItem("journeyStartDate") || DEFAULT_START_DATE
  );

  const [locked, setLocked] = useState(
    localStorage.getItem("journeyLocked") === "false" ? false : true
  );

  useEffect(() => {
    localStorage.setItem("journeyStartDate", startDate);
  }, [startDate]);

  useEffect(() => {
    localStorage.setItem("journeyLocked", String(locked));
  }, [locked]);

  /* ------------------ Theme ------------------ */

  const [theme, setTheme] = useState(
    document.documentElement.classList.contains("dark") ? "dark" : "light"
  );

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";

    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  /* ------------------ UI ------------------ */

  return (
    <div className="flex-1 p-6 lg:p-8 overflow-y-auto">
      <div className="max-w-3xl mx-auto space-y-6">

        {/* HEADER */}
        <div className="flex items-center justify-between">

          <h1 className="text-2xl font-bold">
            App Settings
          </h1>

          {/* THEME TOGGLE */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-muted hover:bg-muted/80 transition"
          >
            {theme === "dark" ? <Moon size={20}/> : <Sun size={20}/>}
          </button>

        </div>

        {/* JOURNEY DATE CARD */}
        <div className="glass-card p-6 space-y-4">

          <h2 className="text-lg font-semibold">
            Journey Start Date
          </h2>

          <div className="flex items-center gap-4">

            <input
              type="date"
              value={startDate}
              disabled={locked}
              onChange={(e) => setStartDate(e.target.value)}
              className={`px-4 py-2 rounded-lg bg-muted transition ${
                locked ? "opacity-50 cursor-not-allowed" : ""
              }`}
            />

            <button
              onClick={() => setLocked(v => !v)}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-muted hover:bg-muted/70 transition"
            >
              {locked ? <Lock size={18}/> : <Unlock size={18}/>}
              {locked ? "Locked" : "Unlocked"}
            </button>

          </div>

          <p className="text-sm text-muted-foreground">
            Changing this will reschedule the entire roadmap and tasks.
          </p>

        </div>

      </div>
    </div>
  );
};

export default Settings;
