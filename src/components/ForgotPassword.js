import React, { useState } from "react";
import { resetPassword } from "../utils/auth";

/**
 * Forgot Password component.
 * Allows users to enter their email and receive a reset link.
 */
const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  /**
   * Handles password reset request.
   * Ensures email is entered before calling the resetPassword function.
   */
  const handleReset = () => {
    if (!email) return alert("Please enter an email!");
    resetPassword(email);
  };

  return (
    <div>
      <h2>Forgot Password</h2>
      <input type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
      <button onClick={handleReset}>Reset Password</button>
    </div>
  );
};

export default ForgotPassword;
