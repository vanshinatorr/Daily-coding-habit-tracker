import { useEffect, useState } from "react";

function Dashboard() {

  const [tasks, setTasks] = useState([]);
  const [completed, setCompleted] = useState([]);
  const [streak, setStreak] = useState(0);

  useEffect(() => {

    const storedHabits =
      JSON.parse(localStorage.getItem("habits")) || [];

    const storedCompleted =
      JSON.parse(localStorage.getItem("completed")) || [];

    const storedStreak =
      JSON.parse(localStorage.getItem("streak")) || 0;

    setTasks(storedHabits);
    setCompleted(storedCompleted);
    setStreak(storedStreak);

  }, []);

  const handleComplete = (task) => {

    if (!completed.includes(task)) {

      const updatedCompleted = [...completed, task];

      setCompleted(updatedCompleted);

      localStorage.setItem(
        "completed",
        JSON.stringify(updatedCompleted)
      );

      if (updatedCompleted.length + 1 === tasks.length) {

        const newStreak = streak + 1;

        setStreak(newStreak);

        localStorage.setItem(
          "streak",
          JSON.stringify(newStreak)
        );

      }

    }

  };

  const deleteHabit = (task) => {

    const updatedTasks =
      tasks.filter((t) => t !== task);

    setTasks(updatedTasks);

    localStorage.setItem(
      "habits",
      JSON.stringify(updatedTasks)
    );

  };

  const resetToday = () => {

    setCompleted([]);

    localStorage.setItem(
      "completed",
      JSON.stringify([])
    );

  };

  const clearAllHabits = () => {

    setTasks([]);
    setCompleted([]);

    localStorage.removeItem("habits");
    localStorage.removeItem("completed");

  };

  return (
    <div style={{ padding: "20px" }}>

      <h1>Dashboard</h1>

      <h2>🔥 Current Streak: {streak}</h2>

      <h3>
        Completed {completed.length} / {tasks.length}
      </h3>

      <div style={{ marginBottom: "20px" }}>

        <button onClick={resetToday}>
          Reset Today
        </button>

        <button
          onClick={clearAllHabits}
          style={{ marginLeft: "10px" }}
        >
          Clear All Habits
        </button>

      </div>

      <h3>Today's Tasks</h3>

      {tasks.length === 0 && (
        <p>No habits added yet</p>
      )}

      <ul>

        {tasks.map((task, index) => (

          <li key={index} style={{ marginBottom: "10px" }}>

            {completed.includes(task) ? "✅ " : "⬜ "}

            {task}

            <button
              onClick={() => handleComplete(task)}
              style={{ marginLeft: "10px" }}
            >
              Complete
            </button>

            <button
              onClick={() => deleteHabit(task)}
              style={{ marginLeft: "10px" }}
            >
              Delete
            </button>

          </li>

        ))}

      </ul>

    </div>
  );
}

export default Dashboard;