import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Retrieve the user details from localStorage
    const user = JSON.parse(localStorage.getItem("user"));

    if (user && email === user.email && password === user.password) {
      navigate("/main"); // Redirect to the main page after login
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-1/4 h-1/2 flex flex-col items-center justify-center border shadow-sm shadow-slate-300 rounded-2xl">
        <div className="flex flex-col justify-center item-center w-3/4 gap-5">
          <h2 className="text-3xl font-bold text-center">Login</h2>
          <input
            type="text"
            placeholder="Email"
            className="bg-slate-200 hover:bg-slate-300 w-full h-12 rounded-xl p-2 "
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="bg-slate-200 hover:bg-slate-300 w-full h-12 rounded-xl p-2 "
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="flex justify-center mt-6">
            <button
              className="bg-slate-200 hover:bg-slate-300 w-32 h-12 rounded-xl"
              onClick={handleLogin}
              disabled={!email || !password}
            >
              Login
            </button>
          </div>
          <p className="mt-4 text-center">
            Don't have an account?{" "}
            <button
              className="text-blue-500"
              onClick={() => navigate("/signup")}
            >
              Sign Up
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
