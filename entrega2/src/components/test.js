import React, { useState } from "react";

const App = () => {
  const [task, setTask] = useState("");
  const [status, setStatus] = useState("toDo");
  const [tasks, setTasks] = useState({
    toDo: [],
    inProgress: [],
    done: []
  });

  const addTask = () => {
    if (task && tasks[status] !== undefined) {
      setTasks((prevTasks) => ({
        ...prevTasks,
        [status]: [...prevTasks[status], task]
      }));
      setTask(""); // Limpa o campo de input após adicionar a tarefa
    }
  };

  const removeTask = (status, index) => {
    setTasks((prevTasks) => ({
      ...prevTasks,
      [status]: prevTasks[status].filter((_, i) => i !== index)
    }));
  };

  const moveTask = (fromStatus, toStatus, index) => {
    const taskToMove = tasks[fromStatus][index];
    setTasks((prevTasks) => ({
      ...prevTasks,
      [fromStatus]: prevTasks[fromStatus].filter((_, i) => i !== index),
      [toStatus]: [...prevTasks[toStatus], taskToMove]
    }));
  };

  return (
    <div>
      <h1>Lista de Tarefas</h1>
      
      <input 
        type="text" 
        value={task} 
        onChange={(e) => setTask(e.target.value)} 
        placeholder="Digite a nova tarefa" 
      />
      
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="toDo">A Fazer</option>
        <option value="inProgress">Em Andamento</option>
        <option value="done">Concluída</option>
      </select>
      
      <button onClick={addTask}>Adicionar Tarefa</button>
      
      <h2>A Fazer</h2>
      <ul>
        {tasks.toDo.map((task, index) => (
          <li key={index}>
            {task} 
            <button onClick={() => removeTask("toDo", index)}>Remover</button>
            <button onClick={() => moveTask("toDo", "inProgress", index)}>Mover para Em Andamento</button>
          </li>
        ))}
      </ul>
      
      <h2>Em Andamento</h2>
      <ul>
        {tasks.inProgress.map((task, index) => (
          <li key={index}>
            {task} 
            <button onClick={() => removeTask("inProgress", index)}>Remover</button>
            <button onClick={() => moveTask("inProgress", "done", index)}>Mover para Concluída</button>
          </li>
        ))}
      </ul>
      
      <h2>Concluída</h2>
      <ul>
        {tasks.done.map((task, index) => (
          <li key={index}>
            {task} 
            <button onClick={() => removeTask("done", index)}>Remover</button>
            <button onClick={() => moveTask("done", "toDo", index)}>Mover para A Fazer</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
