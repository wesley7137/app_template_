import React from "react";
import { Link } from "react-router-dom";

const Error504 = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            504 Gateway Timeout
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Oops! It looks like our server is taking too long to respond.
          </p>
        </div>
        <div className="bg-white shadow sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              What you can do:
            </h3>
            <div className="mt-2 max-w-xl text-sm text-gray-500">
              <ul className="list-disc pl-5 space-y-1">
                <li>Refresh the page</li>
                <li>Try again in a few minutes</li>
                <li>Check your internet connection</li>
                <li>Contact our support team if the problem persists</li>
              </ul>
            </div>
            <div className="mt-5">
              <Link
                to="/"
                className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Go to Homepage
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error504;
