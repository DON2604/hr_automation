import { SendHorizontal } from "lucide-react";
import Input from "../../components/Input";
import Card from "../../components/Card";
import Stat from "../../components/Stat";
import Sidebar from "../../components/Sidebar";

export default function LeaveManagement() {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />

      <main className="flex-1 p-4 sm:p-6 lg:p-8">
        <header className="mb-6">
          <h1 className="text-2xl font-semibold">Apply for Leave</h1>
          <p className="text-sm text-gray-500">
            Faculty members can request leave and generate AI-assisted
            notifications.
          </p>
        </header>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          {/* LEFT COLUMN */}
          <div className="xl:col-span-2 space-y-6">
            {/* Application Details */}
            <section className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="font-semibold mb-4">Application Details</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input label="Leave Type" value="Casual Leave (CL)" />
                <Input
                  label="Department"
                  value="Department of Computer Science"
                />
                <Input label="Start Date" value="21/10/2024" />
                <Input label="End Date" value="25/10/2024" />
              </div>

              <div className="mt-4">
                <label className="text-sm font-medium">Reason for Leave</label>
                <textarea
                  className="mt-1 w-full border rounded-lg p-3 text-sm focus:ring-2 focus:ring-blue-500"
                  rows={4}
                  defaultValue="Attending a research conference on Distributed Systems in Zurich."
                />
              </div>

              <div className="mt-4 p-3 rounded-lg bg-blue-50 text-blue-600 text-xs">
                Your request will be forwarded to the Head of Department for
                initial review, followed by Registrar approval.
              </div>
            </section>
          </div>

          {/* RIGHT COLUMN */}
          <aside className="space-y-6">
            <Card title="Leave Computation">
              <Stat label="Total Calendar Days" value="5 Days" />
              <Stat label="Excl. Weekends/Holidays" value="0 Days" negative />
              <Stat label="Net Deductions" value="05 Days" highlight />
            </Card>

            <Card title="University Calendar Insights">
              <ul className="text-xs text-gray-600 space-y-2 list-disc pl-4">
                <li>No university holidays detected between Oct 21–25.</li>
                <li>Reading week starts in 2 weeks.</li>
              </ul>
            </Card>

            <div className="flex flex-col gap-3">
              <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 font-semibold flex items-center justify-center gap-2">
                <SendHorizontal size={18} />
                Submit for Approval
              </button>
              <button className="w-full border py-2 rounded-lg font-semibold">
                Save as Draft
              </button>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
