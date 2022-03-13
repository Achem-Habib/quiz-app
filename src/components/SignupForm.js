import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Button from "./Button";
import Input from "./Input";

export default function SignupForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agree, setAgree] = useState("");

  const [loading, setLoading] = useState();
  const [error, setError] = useState();

  const navigate = useNavigate();

  const { signup } = useAuth();

  async function handleSubmit(e) {
    console.log("button was clicked");
    e.preventDefault();

    if (password !== confirmPassword) {
      return setError("Passwords don't match");
    }

    try {
      setError("");
      setLoading(true);
      await signup(email, password, username);
      navigate("/");
    } catch (err) {
      console.log(err);
      setLoading(false);
      setError("Failed to create an account");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col mx-6 mt-8 gap-y-2">
        <Input
          type="text"
          placeholder="Enter your name"
          icon="person"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
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
        <Input
          type="password"
          placeholder="Confirm password"
          icon="lock_clock"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <label className="mt-6 text-lg">
          <input
            type="checkbox"
            value={agree}
            onChange={(e) => setAgree(e.target.value)}
            required
          />
          <span className="mx-2">I agree to the Terms & Conditions</span>
        </label>
        <Button disabled={loading} type="submit" />

        {error && <p className="mx-auto mt-3 text-xl text-red-500">{error}</p>}

        <div className="mx-auto mt-6 text-lg">
          Already have an account?{" "}
          <Link to="/login" className="text-sky-600">
            Login
          </Link>{" "}
          instead.
        </div>
      </div>
    </form>
  );
}
