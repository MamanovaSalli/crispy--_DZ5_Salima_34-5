import React from 'react';

const EmailField = ({ emailValue, onEmailChange, emailError }) => {
  return (
    <div>
      <input
        type="email"
        id="email"
        name="email"
        className={`mt-1 block w-full px-3 py-2 border ${
          emailError ? 'border-red-500' : 'border-gray-300'
        } rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
        placeholder="Enter your email"
        required
        value={emailValue}
        onChange={onEmailChange}
      />
      {emailError && (
        <p id="email-error" className="mt-2 text-sm text-red-600">
          Please enter a valid email address.
        </p>
      )}
    </div>
  );
};

export default EmailField;
