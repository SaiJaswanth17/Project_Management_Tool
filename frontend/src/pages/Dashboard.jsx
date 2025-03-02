import React, { useEffect, useState } from "react";
import '../pages/Dashboard.css'
import Progress from "../components/ui/Progress";
import Card from "../components/ui/Card";
import { Calendar, Users, ListChecks } from "lucide-react";

const Dashboard = () => {
  const [projects, setProjects] = useState([]);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const projectsResponse = await fetch('/api/projects'); 
        if (!projectsResponse.ok) {
          throw new Error('Failed to fetch projects');
        }

        const tasksResponse = await fetch('/api/tasks');
        if (!tasksResponse.ok) {
          throw new Error('Failed to fetch tasks');
        }

        const projectsData = await projectsResponse.json(); 
        const tasksData = await tasksResponse.json();
        setProjects(projectsData); 
        setTasks(tasksData); 
      } catch (error) {
        console.error('Error fetching data:', error);
        toast.error('Failed to load dashboard data');
      }
    };

    fetchData();
  }, []);

  const stats = [
    {
      title: "Total Projects",
      value: "12",
      icon: <ListChecks size={24} />,
      progress: 75,
      color: "text-blue-500"
    },
    {
      title: "Active Users",
      value: "8",
      icon: <Users size={24} />,
      progress: 60,
      color: "text-green-500"
    },
    {
      title: "Upcoming Events",
      value: "3",
      icon: <Calendar size={24} />,
      progress: 45,
      color: "text-purple-500"
    }
  ];

  return (
    <div className="dashboard-container p-6">
      <h1 className="dashboard-title text-2xl font-semibold mb-6 text-gray-800">
        Dashboard Overview
      </h1>
      <div className="projects-container">
        {projects.map(project => (
          <div className="project1" key={project.id}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <span className={`status ${project.status}`}>{project.status}</span>
          </div>
        ))}
      </div>
      <div className="tasks-container">
        {tasks.map(task => (
          <div className="active" key={task.id}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <span className={`status ${task.status}`}>{task.status}</span>
          </div>
        ))}
      </div>

      
      <div className="events">
        {stats.map((stat, index) => (
          <Card key={index} title={stat.title} value={stat.value}>
            <div className="box1">
              <div className={`stat-icon p-3 rounded-lg ${stat.color}`}>
                {stat.icon}
              </div>
              <div className="stat-content">
                <h3 className="stat-title text-sm text-gray-600 mb-1">{stat.title}</h3>
                <p className="stat-value text-xl font-medium text-gray-900 mb-2">{stat.value}</p>
                <Progress value={stat.progress} />
                <div className="stat-progress">
                  <p>{stat.progress}%</p>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
      <div className="dashboard-content bg-white rounded-lg shadow-sm p-6">
        {/* Add more dashboard components here */}
      </div>


      <div className="dashboard-content bg-white rounded-lg shadow-sm p-6">
        {/* Add more dashboard components here */}
      </div>
    </div>
  );
};

export default Dashboard;

<style jsx>{`
  .dashboard-container {
    max-width: 1440px;
    margin: 0 auto;
  }
`}</style>
