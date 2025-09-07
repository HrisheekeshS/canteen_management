import React from "react";
import { useNavigate } from "react-router-dom";
import { UtensilsCrossed, User } from "lucide-react"; // nice icons

const First = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-100 via-white to-green-100">
      {/* Header */}
      <header className="w-full p-6 bg-gradient-to-r from-blue-600 to-green-500 text-white text-center text-3xl font-extrabold shadow-md tracking-wide">
        🍴 College Canteen
      </header>

      {/* Main Section */}
      <main className="flex flex-col items-center justify-center flex-grow gap-8 mt-12">
        <h1 className="text-2xl md:text-3xl font-semibold text-gray-700 text-center">
          Welcome to the College Canteen
        </h1>
        <p className="text-gray-500 text-center max-w-md">
          Choose your preferred option to continue
        </p>
        <p className="text-gray-500 text-center max-w-md">If you are a student of our college login to your profile using college email ID to avail offers</p>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Student Login */}
          <button
            onClick={() => navigate("/login")}
            className="flex items-center gap-3 px-8 py-4 bg-green-500 text-white text-lg rounded-2xl shadow-lg hover:bg-green-600 hover:scale-105 transition-transform duration-300"
          >
            <User className="w-6 h-6" />
            Student Login
          </button>

          {/* Customer View */}
          <button
            onClick={() => navigate("/CustomerMenu")}
            className="flex items-center gap-3 px-8 py-4 bg-blue-500 text-white text-lg rounded-2xl shadow-lg hover:bg-blue-600 hover:scale-105 transition-transform duration-300"
          >
            <UtensilsCrossed className="w-6 h-6" />
            Customer View
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-auto w-full p-3 bg-gray-200 text-center text-sm text-gray-600 shadow-inner">
        © 2025 College Canteen · All Rights Reserved
      </footer>
    </div>
  );
};

export default First;
