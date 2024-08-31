import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "/images/sa-favicon-black.svg";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !email || !password) {
      alert("Please fill in all fields.");
      return;
    }

    localStorage.setItem(
      "user",
      JSON.stringify({ firstName, lastName, email, password })
    );
    alert("Account created successfully!");
    navigate("/");
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <img src={Logo} className="w-64" />
      <div className="w-1/4 h-1/2 flex flex-col items-center justify-center border shadow-sm shadow-slate-300 rounded-2xl">
        <div className="flex flex-col justify-center item-center w-3/4 gap-5">
          <h2 className="text-3xl font-bold text-center">Sign Up</h2>
          <input
            type="text"
            placeholder="First Name"
            className="bg-slate-200 hover:bg-slate-300 w-full h-12 rounded-xl p-2"
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Last Name"
            className="bg-slate-200 hover:bg-slate-300 w-full h-12 rounded-xl p-2"
            onChange={(e) => setLastName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Email"
            className="bg-slate-200 hover:bg-slate-300 w-full h-12 rounded-xl p-2"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Create Password"
            className="bg-slate-200 hover:bg-slate-300 w-full h-12 rounded-xl p-2"
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="card-actions justify-center mt-6">
            <button
              className="bg-slate-200 hover:bg-slate-300 w-32 h-12 rounded-xl"
              onClick={handleSignUp}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
