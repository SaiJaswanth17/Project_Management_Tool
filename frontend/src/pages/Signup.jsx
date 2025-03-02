import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";
import '../pages/signup.css'

const Signup = ({ setUser }) => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = data;
    try {
      const { data: res } = await axios.post("/api/auth/signup", {
        name,
        email,
        password,
      });
      if (res.error) {
        toast.error(res.error);
      } else {
        setUser(res);
        toast.success("Signup successful");
        navigate("/Dashboard");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="div2">
        <div className="bg-white rounded-3xl p-8 shadow-lg text-center">
          <h1 className="text-3xl font-bold text-black mb-6">Sign Up</h1>
          <form onSubmit={handleSubmit} className="space-y-6 mx-auto">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={data.name}
                onChange={(e) => setData({ ...data, name: e.target.value })}
                className="w-full max-w-xs mx-auto bg-gray-100 rounded-lg border border-gray-200 px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={data.email}
                onChange={(e) => setData({ ...data, email: e.target.value })}
                className="w-full max-w-xs mx-auto bg-gray-100 rounded-lg border border-gray-200 px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={data.password}
                onChange={(e) => setData({ ...data, password: e.target.value })}
                className="w-full max-w-xs mx-auto bg-gray-100 rounded-lg border border-gray-200 px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full max-w-xs mx-auto bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition-colors"
            >
              Sign Up
            </button>

            <p className="text-gray-700 text-sm mt-4">
              Already have an account?{' '}
              <Link to="/login" className="text-blue-600 hover:text-blue-500">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>

  );
};

export default Signup;
