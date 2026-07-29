import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Input from "../components/Input";
import Button from "../components/Button";
import { loginUser } from "../api/auth";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const data = await loginUser(email, password);

      localStorage.setItem("token", data.access_token);

      navigate("/dashboard");
    } catch (error) {
      console.error(error);
      alert("Invalid Email or Password");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-blue-900 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-2xl w-[420px] p-10">

        <h1 className="text-3xl font-bold text-center mb-2">
          Car Dealership
        </h1>

        <p className="text-center text-gray-500 mb-8">
          Inventory Management System
        </p>

        <div className="space-y-5">

          <Input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button
            text="Login"
            onClick={handleLogin}
          />

        </div>

      </div>
    </div>
  );
}

export default Login;