// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Playground from "./components/Playground";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Landing from "./components/Landing";
import Error504 from "./components/Error504.js";
import StripePayment from "./components/StripePayment";
import Dashboard from "./components/Dashboard";
import DashboardWelcome from "./components/DashboardWelcome";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <div className="bg-purple-300 text-center py-2 text-sm">
        Try it out free with free credits when you sign up!{" "}
        <a href="/" className="underline">
          Learn More
        </a>
      </div>
      <header className="p-4 bg-white shadow-md flex justify-center items-center">
        <img
          src="https://placehold.co/120x30?text=IntelliRoute"
          alt="IntelliRoute logo"
          className="h-8"
        />
      </header>
      <main className="flex-grow flex flex-col items-center bg-gray-50">
        <div className="px-8 py-12 max-w-3xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Intelligent LLM Routing
          </h1>
          <h2 className="text-xl md:text-2xl mb-6">
            Integrate and Optimize without Breaking the Bank
          </h2>
          <p className="text-gray-600 mb-8">
            Simple, Fast, and Cost Effective LLM Routing for Enterprise
            <br />
            Save up to 85% on AI costs while retaining 95% accuracy.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-black text-white px-4 py-2 rounded-full flex items-center">
              CONTACT SALES
              <i className="fas fa-arrow-right ml-2"></i>
            </button>
            <Link
              to="/playground"
              className="border border-gray-300 px-4 py-2 rounded-full"
            >
              TRY THE PLAYGROUND
            </Link>
            <Link
              to="/protein-sequence-logger"
              className="border border-gray-300 px-4 py-2 rounded-full"
            >
              PROTEIN SEQUENCE LOGGER
            </Link>
            <Link
              to="/dashboard-welcome"
              className="border border-gray-300 px-4 py-2 rounded-full"
            >
              DASHBOARD WELCOME
            </Link>
            <Link
              to="/StripePayment"
              className="border border-gray-300 px-4 py-2 rounded-full"
            >
              StripePayment
            </Link>
            <Link
              to="/dashboard"
              className="border border-gray-300 px-4 py-2 rounded-full"
            >
              DASHBOARD
            </Link>
            <Link
              to="/error-504"
              className="border border-gray-300 px-4 py-2 rounded-full"
            >
              ERROR 504
            </Link>
            <Link
              to="/signup"
              className="border border-gray-300 px-4 py-2 rounded-full"
            >
              SIGNUP
            </Link>
            <Link
              to="/signin"
              className="border border-gray-300 px-4 py-2 rounded-full"
            >
              SIGNIN
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/playground" element={<Playground />} />
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/pricing" element={<StripePayment />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/error-504" element={<Error504 />} />
        <Route path="/dashboard-welcome" element={<DashboardWelcome />} />
      </Routes>
    </Router>
  );
};

export default App;
