import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProjectDetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchProjectDetails = async () => {
      const projectResponse = await fetch(`/api/projects/${id}`);
      const projectData = await projectResponse.json();
      setProject(projectData);

      const tasksResponse = await fetch(`/api/projects/${id}/tasks`);
      const tasksData = await tasksResponse.json();
      setTasks(tasksData);
    };

    fetchProjectDetails();
  }, [id]);

  if (!project) return <div>Loading...</div>;

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-lg">
          <h1 className="text-4xl font-bold text-white mb-8">{project.title}</h1>
          <p className="text-gray-200 mb-4">{project.description}</p>
          <h2 className="text-2xl font-semibold text-white mb-4">Associated Tasks</h2>
          <div className="space-y-4">
            {tasks.map(task => (
              <div key={task.id} className="bg-white/5 p-6 rounded-2xl hover:bg-white/10 transition-all">
                <h3 className="text-xl font-semibold text-white">{task.title}</h3>
                <p className="text-gray-200">Due: {task.dueDate}</p>
                <p className="text-gray-200">{task.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
