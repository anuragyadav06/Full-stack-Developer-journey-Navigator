import React, { useState, useEffect } from "react";
import { Lock, Unlock, Moon, Sun } from "lucide-react";
import { getUserProgress, setUserStartDate } from "@/lib/storage";

const Settings: React.FC = () => {

  /* ------------------ Journey Date ------------------ */

  const progress = getUserProgress();

  // Actual stored date
  const [startDate, setStartDate] = useState(progress.startDate);

  // Temporary date (user editing)
  const [tempDate, setTempDate] = useState(progress.startDate);

  const [locked, setLocked] = useState(
    localStorage.getItem("journeyLocked") === "false" ? false : true
  );

  // Save only when user confirms
  const handleSaveDate = () => {
    if (locked) return;

    if (tempDate !== startDate) {
      setUserStartDate(tempDate);
      setStartDate(tempDate);
      window.location.reload();
    }
  };

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

          <div className="flex items-center gap-4 flex-wrap">

            <input
              type="date"
              value={tempDate}
              disabled={locked}
              onChange={(e) => setTempDate(e.target.value)}
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

            {/* SAVE BUTTON (Only when unlocked) */}
            {!locked && (
              <button
                onClick={handleSaveDate}
                className="px-4 py-2 rounded-lg bg-primary text-white hover:opacity-90 transition"
              >
                Save
              </button>
            )}

          </div>

          <p className="text-sm text-muted-foreground">
            {locked 
              ? "Unlock to change the journey start date."
              : "Select a date and click Save to reschedule your roadmap."}
          </p>

        </div>

      </div>
    </div>
  );
};

export default Settings;