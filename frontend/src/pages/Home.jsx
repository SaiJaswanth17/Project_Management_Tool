import React from 'react';
import '../styles/Home.css';
const Home = () => {
  return (
      <div className="home-container">

      <div className="max-w-4xl mx-auto">
        
        
        <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="h-Home">Welcome to Project Management Tool</h1>
          <h2 className=" card-tittle ">About the Tool</h2>
          <p className="words">
            Our Project Management Tool is designed to help teams collaborate effectively, manage tasks efficiently, 
            and track project progress seamlessly. With features like task management, project tracking, and team 
            collaboration, it's the perfect solution for modern project management needs.
          </p>

          <h2 className="About">Contact Information</h2>
          <div className="space-y-4">
            <div>
              <h3 className="email">Email : support@projectmanagementtool.com</h3>
            </div>
            <div>
              <h3 className="phone">Phone : +91 98765 43210 </h3>
             
            </div>
            <div>
              <h3 className="Address">Address : 12-3,Project Management Street,Hyderabad</h3>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
