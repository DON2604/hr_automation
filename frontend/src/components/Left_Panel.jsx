import React from "react";

const Left_Panel = () => {
  return (
    <>
      {/* LEFT: GRADIENT / INFO PANEL */}
      <div className="relative hidden lg:flex overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-teal-600 via-blue-700 to-slate-900" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(20,184,166,0.45),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(37,99,235,0.35),transparent_65%)]" />
        <div className="absolute inset-0 bg-linear-to-t from-slate-900/95 via-slate-900/60 to-transparent" />

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-end p-12 text-white">
          <div className="mb-6 flex items-center gap-2 text-sm opacity-90">
            <span className="material-symbols-outlined text-base">school</span>
            <span>University Administration</span>
          </div>

          <h1 className="text-3xl font-bold leading-tight">
            Empowering Research & <br /> Academic Excellence
          </h1>

          <p className="mt-4 max-w-md text-sm text-slate-300">
            Secure access to tenure files, grant management, and campus benefits
            for over 15,000 faculty and staff members.
          </p>

          {/* Avatars */}
          <div className="mt-6 flex items-center gap-3 text-sm text-slate-300">
            <div className="flex -space-x-2">
              <img
                src="/person1.png"
                className="h-8 w-8 rounded-full border-2 border-slate-900"
              />
              <img
                src="/person2.png"
                className="h-8 w-8 rounded-full border-2 border-slate-900"
              />
              <img
                src="/person3.png"
                className="h-8 w-8 rounded-full border-2 border-slate-900"
              />
            </div>
            <span>Trusted by your colleagues</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Left_Panel;
