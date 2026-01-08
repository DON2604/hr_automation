import React from "react";

const Landing = () => {
  return (
    <div className="flex min-h-screen w-full flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-white bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-2 sm:px-1 lg:px-0">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center text-blue-600">
              <span className="material-symbols-outlined text-3xl">school</span>
            </div>
            <h2 className="text-lg font-bold tracking-tight text-slate-900">
              University HR Portal
            </h2>
          </div>
          <button className="group flex items-center justify-center gap-2 rounded-lg bg-slate-100 px-4 py-2 text-sm font-bold text-slate-900 transition-colors hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700">
            <span className="material-symbols-outlined text-[20px]">help</span>
            <span className="hidden sm:inline">IT Support &amp; Help</span>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="grow flex items-center justify-center">
        <div className="mx-auto max-w-7xl w-full px-4 py-12 sm:px-6 lg:px-8">
          <div className="@container">
            <div className="flex flex-col-reverse gap-12 lg:flex-row lg:items-center lg:gap-16">
              {/* Left Column */}
              <div className="flex flex-1 flex-col items-start gap-8 lg:max-w-xl">
                <div className="space-y-4">
                  <div className="inline-flex items-center rounded-full bg-blue-600/10 px-3 py-1 text-sm font-semibold text-blue-600">
                    <span className="material-symbols-outlined mr-1 text-sm">
                      campaign
                    </span>
                    <span>Academic Year 2025-26 Updates</span>
                  </div>

                  <h1 className="text-3xl font-extrabold leading-[1.15] tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                    Faculty &amp; Staff{" "}<br/>
                    <span className="text-blue-600">Resource Hub</span>
                  </h1>

                  <p className="text-lg leading-relaxed text-slate-600 sm:text-base">
                    Welcome to the centralized portal for faculty, researchers,
                    and administrative staff. Manage your tenure files, benefits
                    enrollment, and campus payroll securely.
                  </p>
                </div>

                {/* CTA Buttons */}
                <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-center">
                  <button className="flex h-12 min-w-40 items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 text-base font-bold text-white shadow-lg shadow-blue-600/25 transition-all hover:-translate-y-0.5 hover:bg-blue-600/90 hover:shadow-xl active:translate-y-0">
                    <span className="material-symbols-outlined text-[20px]">
                      id_card
                    </span>
                    <span>University Login</span>
                  </button>

                  <button className="flex h-12 min-w-40 items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-6 text-base font-bold text-slate-700 transition-all hover:bg-slate-700 hover:text-white">
                    <span className="material-symbols-outlined text-[20px]">
                      contact_support
                    </span>
                    <span>Get Access</span>
                  </button>
                </div>

                {/* User Stats */}
                <div className="flex items-center gap-4 text-sm text-slate-500">
                  <div className="flex -space-x-2">
                    <div
                      className="h-8 w-8 rounded-full border-2 border-white bg-cover bg-center"
                      style={{ backgroundImage: 'url("/person1.png")' }}
                    />
                    <div
                      className="h-8 w-8 rounded-full border-2 border-white bg-cover bg-center"
                      style={{ backgroundImage: 'url("/person2.png")' }}
                    />
                    <div
                      className="h-8 w-8 rounded-full border-2 border-white bg-cover bg-center"
                      style={{ backgroundImage: 'url("/person3.png")' }}
                    />
                  </div>
                  <p>Supporting 15,000+ Staff &amp; Faculty</p>
                </div>
              </div>

              {/* Right Column */}
              <div className="flex-1">
                <div className="group relative aspect-4/3 w-full overflow-hidden rounded-2xl bg-white shadow-2xl">
                  <div className="absolute inset-0 bg-linear-to-tr from-blue-600/20 to-transparent opacity-50" />
                  <div
                    className="h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: 'url("/laptop.png")' }}
                  />
                  <div className="absolute bottom-6 left-6 right-6 rounded-xl bg-white/95 p-4 shadow-lg backdrop-blur sm:bottom-10 sm:left-10 sm:right-auto sm:w-72">
                    <div className="mb-3 flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-100 text-green-600">
                        <span className="material-symbols-outlined text-lg">
                          school
                        </span>
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-900">
                          Grant Approval
                        </p>
                        <p className="text-xs text-slate-500">
                          Processed today
                        </p>
                      </div>
                    </div>
                    <div className="h-1.5 w-full rounded-full bg-slate-100">
                      <div className="h-1.5 w-full rounded-full bg-green-500" />
                    </div>
                  </div>
                </div>
              </div>
              {/* End Right */}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <p className="text-sm text-slate-500">
              © 2026 University Administration. All rights reserved.
            </p>
            <div className="flex gap-8">
              <a
                className="text-sm font-medium text-slate-500 hover:text-blue-600"
                href="#"
              >
                Privacy Policy
              </a>
              <a
                className="text-sm font-medium text-slate-500 hover:text-blue-600"
                href="#"
              >
                Academic Calendar
              </a>
              <a
                className="text-sm font-medium text-slate-500 hover:text-blue-600"
                href="#"
              >
                Staff Handbook
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating AI Chat Button */}
      <button className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg shadow-blue-600/30 transition-all hover:-translate-y-1 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/40 active:translate-y-0 sm:h-16 sm:w-16">
        <span className="material-symbols-outlined text-[28px] sm:text-[32px]">
          smart_toy
        </span>
      </button>
    </div>
  );
};

export default Landing;
