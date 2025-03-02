import React, { useEffect, useState } from 'react';

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    const fetchTasks = async () => {
      const response = await fetch('/api/tasks');
      const data = await response.json();
      setTasks(data);
    };

    fetchTasks();
  }, []);
  return (
    <div className="flex">
        <img src="/path/to/project-management-task-picture.jpg" alt="Project Management Task" className="w-1/3 h-auto mr-4" />
        <div className="min-h-screen p-8">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold text-white mb-8">Tasks</h1>
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-lg">
              <div className="space-y-4">
                {tasks.map(task => (
                  <div className="bg-white/5 p-6 rounded-2xl hover:bg-white/10 transition-all" key={task.id}>
                    <div className="flex items-center justify-between">
                      <h2 className="text-xl font-semibold text-white">{task.title}</h2>
                      <span className="text-sm text-gray-300">Due: {task.dueDate}</span>
                    </div>
                    <p className="text-gray-200 mt-2">{task.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Tasks;
