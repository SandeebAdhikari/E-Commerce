import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();

    // Save the user details to localStorage
    localStorage.setItem("user", JSON.stringify({ email, password }));
    alert("Account created successfully!");
    navigate("/"); // Redirect to login page after signup
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-1/4 h-1/2 flex flex-col items-center justify-center border shadow-sm shadow-slate-300 rounded-2xl">
        <div className="flex flex-col justify-center item-center w-3/4 gap-5">
          <h2 className="text-3xl font-bold text-center">Sign Up</h2>
          <input
            type="text"
            placeholder="Email"
            className="bg-slate-200 hover:bg-slate-300 rounded-xl w-10/12 p-4"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="bg-slate-200 hover:bg-slate-300 rounded-xl w-10/12 p-4"
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="card-actions justify-center mt-6">
            <button className="btn btn-primary" onClick={handleSignUp}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
