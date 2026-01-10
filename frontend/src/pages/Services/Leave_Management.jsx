import { SendHorizontal, FileText } from "lucide-react";
import { useState } from "react";
import Input from "../../components/Input";
import Card from "../../components/Card";
import Stat from "../../components/Stat";
import Sidebar from "../../components/Sidebar";

export default function LeaveManagement() {
  const [leaveType, setLeaveType] = useState("Casual Leave (CL)");
  const [department, setDepartment] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [medicalDocument, setMedicalDocument] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setMedicalDocument(file);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />

      <main className="flex-1 p-4 sm:p-6 lg:p-8 lg:ml-64">
        <header className="mb-6 pl-12 lg:pl-0">
          <h1 className="text-2xl font-semibold">Apply for Leave</h1>
          <p className="text-sm text-gray-500">
            Students can request for leaves
          </p>
        </header>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          {/* LEFT COLUMN */}
          <div className="xl:col-span-2 space-y-6">
            {/* Application Details */}
            <section className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="font-semibold mb-4">Application Details</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Leave Type Dropdown */}
                <div>
                  <label className="text-sm font-medium block mb-1">Leave Type</label>
                  <select
                    value={leaveType}
                    onChange={(e) => setLeaveType(e.target.value)}
                    className="w-full border rounded-lg p-3 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  >
                    <option value="Casual Leave (CL)">Casual Leave (CL)</option>
                    <option value="Medical Leave (ML)">Medical Leave (ML)</option>
                    <option value="Family Leave (FL)">Family Leave (FL)</option>
                    <option value="Emergency Leave (EL)">Emergency Leave (EL)</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* Department Dropdown */}
                <div>
                  <label className="text-sm font-medium block mb-1">Department</label>
                  <select
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                    className="w-full border rounded-lg p-3 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  >
                    <option value="">Select Department</option>
                    <option value="Department of Computer Science">Department of Computer Science</option>
                    <option value="Department of Electrical Engineering">Department of Electrical Engineering</option>
                    <option value="Department of Mechanical Engineering">Department of Mechanical Engineering</option>
                    <option value="Department of Civil Engineering">Department of Civil Engineering</option>
                    <option value="Department of Business Administration">Department of Business Administration</option>
                    <option value="Department of Mathematics">Department of Mathematics</option>
                    <option value="Department of Physics">Department of Physics</option>
                    <option value="Department of Chemistry">Department of Chemistry</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* Start Date Picker */}
                <div>
                  <label className="text-sm font-medium block mb-1">Start Date</label>
                  <input
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="w-full border rounded-lg p-3 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>

                {/* End Date Picker */}
                <div>
                  <label className="text-sm font-medium block mb-1">End Date</label>
                  <input
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    className="w-full border rounded-lg p-3 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>
              </div>

              <div className="mt-4">
                <label className="text-sm font-medium">Reason for Leave</label>
                <textarea
                  className="mt-1 w-full border rounded-lg p-3 text-sm focus:ring-2 focus:ring-blue-500"
                  rows={4}
                  defaultValue="eg. Attending a research conference on Distributed Systems in Zurich."
                />
              </div>

              {/* Conditional Medical Document Upload */}
              {leaveType === "Medical Leave (ML)" && (
                <div className="mt-4">
                  <label className="text-sm font-medium block mb-2">Upload Medical Document</label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 hover:border-blue-400 transition-colors">
                    <input
                      type="file"
                      id="medical-document"
                      onChange={handleFileChange}
                      accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                      className="hidden"
                    />
                    <label
                      htmlFor="medical-document"
                      className="flex flex-col items-center justify-center cursor-pointer"
                    >
                      <FileText className="text-gray-400 mb-2" size={32} />
                      {medicalDocument ? (
                        <div className="text-sm text-center">
                          <p className="text-green-600 font-medium">{medicalDocument.name}</p>
                          <p className="text-xs text-gray-500 mt-1">Click to change file</p>
                        </div>
                      ) : (
                        <div className="text-sm text-center">
                          <p className="text-gray-600 font-medium">Click to upload medical certificate</p>
                          <p className="text-xs text-gray-500 mt-1">PDF, JPG, PNG, DOC (Max 5MB)</p>
                        </div>
                      )}
                    </label>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    * Medical certificate is required for medical leave applications
                  </p>
                </div>
              )}

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

            <Card title="Balance Summary">
              <div className="space-y-4">
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Current Balance</p>
                    <p className="text-2xl font-semibold">22.0</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-500 mb-1">New Balance</p>
                    <p className="text-2xl font-semibold text-blue-600">17.0</p>
                  </div>
                </div>
                <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="absolute h-full bg-blue-600 rounded-full" style={{ width: '77%' }}></div>
                </div>
              </div>
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
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
