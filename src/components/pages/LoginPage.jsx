import { useState } from "react";
import { useHistory } from "react-router-dom";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const history = useHistory();

  const submit = (event) => {
    event.preventDefault();

    const payload = {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email, password: password }),
    };

    fetch("http://127.0.0.1:5000/user/auth", payload)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (!data.ok) {
          setError(data);
        } else {
          history.push("/home");
        }
      })
      .catch((err) => {
        console.error("Login error:", err);
      });
  };

  return (
    <div className="login-wrapper">
      <h1>Login</h1>

      <p>{error}</p>

      <form onSubmit={submit}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onFocus={() => setError("")}
          required
        />

        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onFocus={() => setError("")}
          required
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}
