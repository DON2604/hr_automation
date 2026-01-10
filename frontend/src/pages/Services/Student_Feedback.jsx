import Sidebar from "../../components/Sidebar";
import FeedbackCard from "../../components/FeedbackCard";

export default function StudentFeedbackPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />

      {/* MAIN CONTENT */}
      <main className="flex-1 p-4 sm:p-6 lg:p-8 lg:ml-64">
        <header className="mb-6 pl-12 lg:pl-0">
          <h1 className="text-2xl font-semibold text-gray-900">
            Student Feedback Portal
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Your voice matters. Help us improve your academic experience.
          </p>
        </header>

        <div className="mt-6 grid grid-cols-1 xl:grid-cols-3 gap-6">
          {/* LEFT SECTION */}
          <div className="xl:col-span-2 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="font-semibold text-gray-800">
                Pending Feedback
              </h2>
              <span className="text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded-full">
                3 REQUIRED
              </span>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <FeedbackCard
                code="CS101"
                title="Intro to Programming"
                instructor="Dr. Robert Wilson"
              />
              <FeedbackCard
                code="MAT202"
                title="Calculus II"
                instructor="Dr. Sarah Miller"
              />
              <FeedbackCard
                code="PHY105"
                title="Applied Physics"
                instructor="Prof. James Chen"
              />

              <div className="bg-white rounded-xl shadow-sm ring-1 ring-dashed ring-gray-300 flex items-center justify-center text-sm text-gray-400 p-6">
                More feedbacks will appear as courses progress
              </div>
            </div>

            {/* CONFIDENTIALITY NOTE */}
            <div className="bg-blue-50 rounded-xl shadow-sm ring-1 ring-blue-200 p-4 text-sm text-blue-700">
              <p className="font-semibold mb-1">
                CONFIDENTIALITY NOTE
              </p>
              All feedback is strictly anonymous. Faculty members only
              receive aggregated data and cannot identify individual
              student responses.
            </div>
          </div>

          {/* RIGHT PANEL */}
          <div className="space-y-6">
            {/* RECENT SUBMISSIONS */}
            <div className="bg-white rounded-xl shadow-sm ring-1 ring-gray-200 p-5">
              <h3 className="font-semibold mb-4 text-gray-800">
                Recent Submissions
              </h3>

              {[
                ["ENG101", "Communication"],
                ["ECO110", "Economics"],
                ["BIO101", "Life Science"],
              ].map(([code, name]) => (
                <div
                  key={code}
                  className="flex items-center justify-between text-sm mb-4"
                >
                  <div>
                    <p className="font-medium text-gray-800">
                      {code}: {name}
                    </p>
                    <p className="text-xs text-gray-400">
                      Submitted Jan 2024
                    </p>
                  </div>
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                    COMPLETED
                  </span>
                </div>
              ))}

              <button className="w-full text-sm text-blue-600 mt-2 hover:underline">
                View All History
              </button>
            </div>

            {/* SEMESTER PROGRESS */}
            <div className="bg-white rounded-xl shadow-sm ring-1 ring-gray-200 p-5">
              <h3 className="font-semibold mb-4 text-gray-800">
                Semester Progress
              </h3>

              <p className="text-xs text-gray-500 mb-2">
                FEEDBACK COMPLETION
              </p>

              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full w-[60%]" />
              </div>

              <p className="text-xs text-gray-400 mt-1">
                3 of 5 courses reviewed
              </p>

              <div className="mt-5 flex items-center gap-3">
                <div className="h-11 w-11 rounded-full ring-1 ring-blue-200 bg-blue-50 flex items-center justify-center font-semibold text-blue-600">
                  12
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-800">
                    Engagement Score
                  </p>
                  <p className="text-xs text-gray-400">
                    Above average for CS Dept
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
