import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateProject = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [team, setTeam] = useState('');
  const [deadline, setDeadline] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newProject = { title, description, team: team.split(','), deadline };

    const response = await fetch('/api/projects', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newProject),
    });

    if (response.ok) {
      navigate('/projects'); // Redirect to the projects page after successful creation
    } else {
      // Handle error
      console.error('Failed to create project');
    }
  };

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-lg">
          <h1 className="text-4xl font-bold text-white mb-8">Create New Project</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-white">Title:</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full p-2 rounded"
                required
              />
            </div>
            <div>
              <label className="text-white">Description:</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full p-2 rounded"
                required
              />
            </div>
            <div>
              <label className="text-white">Team (comma-separated):</label>
              <input
                type="text"
                value={team}
                onChange={(e) => setTeam(e.target.value)}
                className="w-full p-2 rounded"
                required
              />
            </div>
            <div>
              <label className="text-white">Deadline:</label>
              <input
                type="date"
                value={deadline}
                onChange={(e) => setDeadline(e.target.value)}
                className="w-full p-2 rounded"
                required
              />
            </div>
            <button type="submit" className="bg-blue-500 text-white p-2 rounded">
              Create Project
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateProject;
