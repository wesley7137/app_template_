import React, { useState, useEffect } from "react";
import { api, getAuthToken } from "../utils/api";

const DashboardWelcome = () => {
  const [dashboardData, setDashboardData] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const data = await api.fetch("/dashboard", {
          headers: {
            Authorization: `Bearer ${getAuthToken()}`,
          },
        });
        setDashboardData(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchDashboardData();
  }, []);

  if (error) return <div>Error: {error}</div>;
  if (!dashboardData) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      <header className="mb-4">
        <h1 className="text-xl font-semibold flex items-center">
          <img
            src="https://placehold.co/24x24"
            alt="Cohere logo"
            className="mr-2"
          />
          cohere dashboard
        </h1>
      </header>

      <div className="mb-6">
        <h2 className="text-2xl font-bold">WELCOME {dashboardData.userName}</h2>
      </div>

      <div className="space-y-6">
        <div className="flex space-x-6">
          <section className="bg-gradient-to-br from-blue-100 to-blue-300 p-4 rounded-lg flex-1 border-3 border-black shadow-lg">
            <div className="flex items-center mb-2">
              <span className="bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded mr-2">
                NEW
              </span>
              <h2 className="font-semibold">Try Command R+</h2>
            </div>
            <p className="text-sm mb-3">
              Command R+ boasts 128K context length, enhanced coding
              capabilities, support for tool use, and can chat in English,
              French, German, Spanish, Portuguese, Italian, Mandarin, Korean,
              Japanese, and Arabic.
            </p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded flex items-center text-sm hover:translate-y-[-2px] transition-transform duration-300 ease-in-out">
              Try Command R+
              <i className="fas fa-arrow-right ml-2"></i>
            </button>
          </section>

          <section className="bg-gradient-to-br from-red-100 to-red-300 p-4 rounded-lg flex-1 border-3 border-black shadow-lg">
            <h2 className="font-semibold mb-2">Chat</h2>
            <p className="text-sm mb-3">
              Cohere Chat is a conversational interface that can search the web
              and cite sources. Use it to research industries, draft a document,
              debug code, and much more.
            </p>
            <button className="bg-red-500 text-white px-4 py-2 rounded flex items-center text-sm mb-2 hover:translate-y-[-2px] transition-transform duration-300 ease-in-out">
              Chat now
              <i className="fas fa-arrow-right ml-2"></i>
            </button>
            <a href="/" className="text-red-500 text-sm hover:underline">
              Learn more <i className="fas fa-arrow-right ml-1"></i>
            </a>
          </section>
        </div>

        <section className="bg-gradient-to-br from-purple-100 to-purple-300 p-4 rounded-lg border-3 border-black shadow-lg">
          <h2 className="font-semibold mb-2">Playground</h2>
          <p className="text-sm mb-3">
            Playground allows you to experience the power of LLM without coding
            a single line.
          </p>
          <button className="bg-purple-500 text-white px-4 py-2 rounded flex items-center text-sm mb-3 hover:translate-y-[-2px] transition-transform duration-300 ease-in-out">
            Go to Playground
            <i className="fas fa-arrow-right ml-2"></i>
          </button>
          <p className="text-sm text-purple-700 mb-2">
            Or check out a Playground example:
          </p>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <a href="/" className="text-purple-700 hover:underline">
              Article Summarization <i className="fas fa-arrow-right ml-1"></i>
            </a>
            <a href="/" className="text-purple-700 hover:underline">
              Real Estate Listing <i className="fas fa-arrow-right ml-1"></i>
            </a>
            <a href="/" className="text-purple-700 hover:underline">
              Correct Errors in Voice to Text{" "}
              <i className="fas fa-arrow-right ml-1"></i>
            </a>
            <a href="/" className="text-purple-700 hover:underline">
              Fintech Email Classifier{" "}
              <i className="fas fa-arrow-right ml-1"></i>
            </a>
            <a href="/" className="text-purple-700 hover:underline">
              Restaurant Customer Inquiries{" "}
              <i className="fas fa-arrow-right ml-1"></i>
            </a>
            <a href="/" className="text-purple-700 hover:underline">
              Contract Entity Extraction{" "}
              <i className="fas fa-arrow-right ml-1"></i>
            </a>
          </div>
        </section>

        <section className="bg-gradient-to-br from-green-100 to-green-300 p-4 rounded-lg border-3 border-black shadow-lg">
          <h2 className="font-semibold mb-2">Documentation</h2>
          <p className="text-sm mb-3">
            The docs is our knowledge base for everything Cohere. Access
            how-tos, sample applications, guides, and API & SDK references.
          </p>
          <button className="bg-green-700 text-white px-4 py-2 rounded flex items-center text-sm hover:translate-y-[-2px] transition-transform duration-300 ease-in-out">
            Go to Docs
            <i className="fas fa-arrow-right ml-2"></i>
          </button>
        </section>
      </div>
    </div>
  );
};

export default DashboardWelcome;
