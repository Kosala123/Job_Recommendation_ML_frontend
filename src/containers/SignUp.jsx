import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-100 via-purple-100 to-blue-100">
      <div className="bg-white p-10 rounded-xl shadow-md w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-purple-600">
          Create an Account
        </h2>

        <form>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 mb-2">Password</label>
            <input
              type="password"
              placeholder="Create a password"
              className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition"
          >
            Sign Up
          </button>

          <p className="mt-4 text-sm text-center text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="text-purple-600 hover:underline">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
