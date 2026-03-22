
import { useState } from "react";

function AddHabit() {

  const [habit, setHabit] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const trimmedHabit = habit.trim();

    if (!trimmedHabit) {
      alert("Please enter a habit");
      return;
    }

    const existingHabits =
      JSON.parse(localStorage.getItem("habits")) || [];

    if (existingHabits.includes(trimmedHabit)) {
      alert("Habit already exists");
      return;
    }

    const updatedHabits = [...existingHabits, trimmedHabit];

    localStorage.setItem(
      "habits",
      JSON.stringify(updatedHabits)
    );

    setHabit("");

    alert("Habit added successfully");
  };

  return (
    <div style={{ padding: "20px" }}>

      <h1>Add Habit</h1>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Enter new habit"
          value={habit}
          onChange={(e) => setHabit(e.target.value)}
          style={{ padding: "8px", marginRight: "10px" }}
        />

        <button type="submit">
          Add Habit
        </button>

      </form>

    </div>
  );
}

export default AddHabit;









// import { useEffect, useState } from "react";




// function Dashboard() {

//   const [tasks, setTasks] = useState([]);
//   const [completed, setCompleted] = useState([]);

//   useEffect(() => {

//     const storedHabits =
//       JSON.parse(localStorage.getItem("habits")) || [];

//     const storedCompleted =
//       JSON.parse(localStorage.getItem("completed")) || [];

//     setTasks(storedHabits);
//     setCompleted(storedCompleted);

//   }, []);

//   const handleComplete = (task) => {

//     if (!completed.includes(task)) {

//       const updatedCompleted = [...completed, task];

//       setCompleted(updatedCompleted);

//       localStorage.setItem(
//         "completed",
//         JSON.stringify(updatedCompleted)
//       );

//     }

//   };

//   const deleteHabit = (task) => {

//     const updatedTasks = tasks.filter(
//       (t) => t !== task
//     );

//     setTasks(updatedTasks);

//     localStorage.setItem(
//       "habits",
//       JSON.stringify(updatedTasks)
//     );

//   };

//   const resetTasks = () => {

//     setCompleted([]);

//     localStorage.setItem(
//       "completed",
//       JSON.stringify([])
//     );

//   };

//   return (
//     <div>

//       <h1>Dashboard</h1>

//       <h3>
//         Completed {completed.length} / {tasks.length}
//       </h3>

//       <button onClick={resetTasks}>
//         Reset Today
//       </button>

//       <h3>Today's Tasks</h3>

//       <ul>

//         {tasks.map((task, index) => (

//           <li key={index}>

//             {completed.includes(task) ? "✅ " : ""}

//             {task}

//             <button
//               onClick={() => handleComplete(task)}
//               style={{ marginLeft: "10px" }}
//             >
//               Complete
//             </button>

//             <button
//               onClick={() => deleteHabit(task)}
//               style={{ marginLeft: "10px" }}
//             >
//               Delete
//             </button>

//           </li>

//         ))}

//       </ul>

//     </div>
//   );
// }

// export default Dashboard;