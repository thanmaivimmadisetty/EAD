import React, { useState } from "react";

function PasswordChecker() {
  const [password, setPassword] = useState("");
  const [result, setResult] = useState("");

  const checkPassword = () => {
    let strength = 0;

    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;

    if (strength <= 2) {
      setResult("Weak");
    } else if (strength === 3) {
      setResult("Medium");
    } else {
      setResult("Strong");
    }
  };

  return (
    <div>
      <h2>Password Checker</h2>

      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <br /><br />

      <button onClick={checkPassword}>Check Strength</button>

      <h3>Strength: {result}</h3>
    </div>
  );
}

export default PasswordChecker;