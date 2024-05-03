
import React, { useState } from 'react';
import EmailField from "../emailField/EmailField";
import PasswordField from "../passwordField/PasswordField";

function MainPage() {
const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setEmailError(!event.target.value.includes("@"));
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className="layout">
      <div>
        <form >
          <div>
            <label>
              Email
            </label>
            <EmailField
              emailValue={email}
              onEmailChange={handleEmailChange}
              emailError={emailError}
            />
          </div>
          <div>
            <label>
              Password
            </label>
            <PasswordField
              type="password"
              name="password"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Enter your password"
              required
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#007bff] hover:bg-[#0069d9] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default MainPage;