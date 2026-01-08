import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Left_Panel from "../../components/Left_Panel";

const Login = () => {
  const [userType, setUserType] = useState("student");
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full grid grid-cols-1 lg:grid-cols-2">
      <Left_Panel/>
      {/* RIGHT: LOGIN FORM */}
      <div className="flex items-center justify-center px-6 sm:px-10">
        <div className="w-full max-w-md">
          {/* Top Right Help */}
          <div className="mb-6 flex justify-end text-sm text-slate-500">
            <span className="flex items-center gap-1 cursor-pointer hover:text-blue-600">
              <span className="material-symbols-outlined text-base">
                help
              </span>
              Help & Support
            </span>
          </div>

          {/* Logo */}
          <div className="mb-8 flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-white">
              <span className="material-symbols-outlined">
                school
              </span>
            </div>
            <span className="font-semibold text-slate-900">
              University HR Portal
            </span>
          </div>

          {/* Form */}
          <h2 className="text-2xl font-bold text-slate-900">
            Sign In
          </h2>
          <p className="mt-1 text-sm text-slate-500">
            Please enter your university credentials to access the portal.
          </p>

          <form className="mt-6 space-y-4">
            {/* User Type Dropdown */}
            <div>
              <label className="text-sm font-medium text-slate-700">
                I am a
              </label>
              <select
                value={userType}
                onChange={(e) => setUserType(e.target.value)}
                className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 cursor-pointer"
              >
                <option value="student">Student</option>
                <option value="faculty">Faculty / Staff</option>
              </select>
            </div>

            <div>
              <label className="text-sm font-medium text-slate-700">
                {userType === "student" ? "Enrollment Number" : "Employee ID"}
              </label>
              <input
                type="text"
                placeholder={userType === "student" ? "e.g. 800123456" : "e.g. EMP123456"}
                className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
              />
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-slate-700">
                  Password
                </label>
                <span className="cursor-pointer text-sm text-blue-600 hover:underline">
                  Forgot password?
                </span>
              </div>
              <input
                type="password"
                className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
              />
            </div>

            <button
              type="submit"
              className="mt-2 w-full rounded-lg bg-blue-600 py-2.5 text-sm font-semibold text-white hover:bg-blue-700 transition"
            >
              Sign In
            </button>

            <div className="text-center text-xs text-slate-400">
              Don't have access?
            </div>

            <button
              type="button"
              className="w-full rounded-lg border border-slate-300 py-2 text-sm font-medium hover:bg-slate-50 transition"
              onClick={()=>navigate("/get-access")}
            >
              Get Access To Your Credentials
            </button>

            <div className="text-center">
              <button
                type="button"
                onClick={() => navigate("/")}
                className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:underline"
              >
                <span className="material-symbols-outlined text-base">
                  arrow_back
                </span>
                Back to Home
              </button>
            </div>
          </form>

          {/* Footer */}
          <p className="mt-6 text-center text-xs text-slate-400">
            Protected by reCAPTCHA and subject to University Privacy Policy
            and Terms of Service.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
