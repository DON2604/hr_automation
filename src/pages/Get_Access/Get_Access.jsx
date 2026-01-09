import React from "react";
import { useNavigate } from "react-router-dom";
import Left_Panel from "../../components/Left_Panel";

const Get_Access = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full grid grid-cols-1 lg:grid-cols-2">
      <Left_Panel />

      <div className="flex items-center justify-center px-6 sm:px-10">
        <div className="w-full max-w-md">
          {/* Top Right Help */}
          <div className="mb-6 mt-6 flex justify-end text-sm text-slate-500">
            <span className="flex cursor-pointer items-center gap-1 hover:text-blue-600">
              <span className="material-symbols-outlined text-base">help</span>
              Help & Support
            </span>
          </div>

          {/* Logo */}
          <div className="mb-8 flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-white">
              <span className="material-symbols-outlined">school</span>
            </div>
            <span className="font-semibold text-slate-900">
              University HR Portal
            </span>
          </div>

          {/* Header */}
          <h2 className="text-2xl font-bold text-slate-900">Request Access</h2>
          <p className="mt-1 text-sm text-slate-500">
            Submit your details below to request portal access.
          </p>

          {/* Form */}
          <form className="mt-6 space-y-4">
            <div>
              <label className="text-sm font-medium text-slate-700">
                Full Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-slate-700">
                University ID
              </label>
              <input
                type="text"
                placeholder="e.g. 800123456"
                className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-slate-700">
                Role
              </label>
              <select className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20">
                <option value="student">Student</option>
                <option value="faculty">Faculty / Staff</option>
              </select>
            </div>

            <button
              type="submit"
              className="mt-2 w-full rounded-lg bg-blue-600 py-2.5 text-sm font-semibold text-white hover:bg-blue-700 transition"
            >
              Send Access Mail
            </button>

            <div className="text-center">
              <button
                type="button"
                onClick={() => navigate("/login")}
                className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:underline"
              >
                <span className="material-symbols-outlined text-base">
                  arrow_back
                </span>
                Back to Login
              </button>
            </div>
          </form>

         
        </div>
      </div>
    </div>
  );
};

export default Get_Access;
