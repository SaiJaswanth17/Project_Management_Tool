import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";
import '../pages/login.css'

const Login = ({ setUser }) => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = data;
    try {
      const { data: res } = await axios.post("/api/auth/login", {
        email,
        password,
      });
      if (res.error) {
        toast.error(res.error);
      } else {
        setUser(res);
        toast.success("Login successful");
        navigate("/dashboard");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="key">
      <div className="div2">
        <div className="bg-white rounded-3xl p-8 shadow-lg text-center margin-left: -20px">
          <h1 className="text-3xl font-bold text-black mb-6">Login</h1>

          <form onSubmit={handleSubmit} className="space-y-6 mx-auto">
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
              className="w-full max-w-xs mx-auto bg-blue-600 text-black rounded-lg px-4 py-2 hover:bg-blue-500"

            >
              Login
            </button>

            <p className="text-gray-700 text-sm mt-4">
              Don't have an account?{' '}
              <Link to="/signup" className="text-blue-600 hover:text-blue-500">


                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
