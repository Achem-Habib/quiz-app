import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Button from "./Button";
import Input from "./Input";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState();
  const [error, setError] = useState();

  const { login } = useAuth();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    console.log("button was clicked");
    e.preventDefault();
    try {
      setLoading(true);
      setError("");
      await login(email, password);
      navigate("/");
    } catch (err) {
      console.log(err);
      setLoading(false);
      setError("Your email or password is incorrect!!");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col mx-6 mt-8 gap-y-2">
        {error && <div className="text-xl text-red-600 mb-4">{error}</div>}
        <Input
          type="email"
          placeholder="Enter your email"
          icon="alternate_email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="Enter password"
          icon="lock"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button disabled={loading} type="submit" />
        <div className="mx-auto mt-6 text-lg">
          Don't have an account?{" "}
          <Link to="/signup" className="text-sky-600">
            Signup
          </Link>{" "}
          instead.
        </div>
      </div>
    </form>
  );
}
