
import React from 'react';

const PasswordField = ({ password, onPasswordChange }) => {
  return (
    <div>
      <input
        type="password"
        id="password"
        name="password"
        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        placeholder="Enter your password"
        required
        value={password}
        onChange={onPasswordChange}
      />
    </div>
  );
};

export default PasswordField;
