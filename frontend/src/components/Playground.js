// src/components/Playground.js
import React, { useState } from "react";

const Playground = () => {
  const [activeTab, setActiveTab] = useState("api");

  const tabs = [
    { id: "api", label: "API request builder" },
    { id: "chat", label: "Chat" },
    { id: "classify", label: "Classify" },
    { id: "embed", label: "Embed" },
    { id: "generate", label: "Generate" },
    { id: "legacy", label: "LEGACY", disabled: true },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case "api":
        return (
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-4">API Request Builder</h3>
            <div className="space-y-4">
              <div>
                <label className="block mb-1">Endpoint</label>
                <select className="w-full p-2 border rounded">
                  <option>Select an endpoint</option>
                  <option>Generate</option>
                  <option>Classify</option>
                  <option>Embed</option>
                </select>
              </div>
              <div>
                <label className="block mb-1">Parameters</label>
                <textarea
                  className="w-full p-2 border rounded"
                  rows="4"
                  placeholder="Enter JSON parameters"
                ></textarea>
              </div>
              <button className="bg-blue-500 text-white px-4 py-2 rounded">
                Send Request
              </button>
            </div>
          </div>
        );
      // Additional tab cases here
      default:
        return <div>Select a tab</div>;
    }
  };

  return (
    <div className="w-full bg-gray-100 p-4">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="bg-purple-200 py-2 px-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img
              src="https://placehold.co/20x20?text=C"
              alt="Cohere icon"
              className="h-5"
            />
            <span className="text-sm font-semibold">cohere playground</span>
          </div>
          <div className="text-sm text-center">
            Try Command in any of 10 supported languages in the Chat playground!
            <button className="ml-2 text-gray-600 hover:text-gray-800">
              ×
            </button>
          </div>
        </div>
        <nav className="border-b flex space-x-4 px-4 text-sm bg-gray-50">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`py-2 px-3 ${
                activeTab === tab.id
                  ? "font-semibold border-b-2 border-black"
                  : ""
              } ${
                tab.disabled
                  ? "text-gray-400 cursor-not-allowed"
                  : "hover:text-gray-800"
              }`}
              onClick={() => !tab.disabled && setActiveTab(tab.id)}
              disabled={tab.disabled}
            >
              {tab.label}
            </button>
          ))}
        </nav>
        <div className="p-4 h-96 overflow-y-auto">{renderTabContent()}</div>
      </div>
    </div>
  );
};

export default Playground;
