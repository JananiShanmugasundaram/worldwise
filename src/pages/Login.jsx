import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/FakeAuthContext";
import styles from "./Login.module.css";
import { useEffect, useState } from "react";

export default function Login() {
  // PRE-FILL FOR DEV PURPOSES
  const [email, setEmail] = useState("jack@example.com");
  const [password, setPassword] = useState("qwerty");
  const { handleLogin, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(
    function () {
      if (isAuthenticated === true) {
        navigate("/app/cities", { replace: true });
      }
    },
    [isAuthenticated, navigate]
  );

  function handleClick(e) {
    e.preventDefault();
    if (email && password) handleLogin(email, password);
  }

  return (
    <main className={styles.login}>
      <form className={styles.form} onSubmit={handleClick}>
        <div className={styles.row}>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <div>
          <button className="btn">Login</button>
        </div>
      </form>
    </main>
  );
}
