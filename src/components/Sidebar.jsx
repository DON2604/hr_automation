import {
  CalendarRange,
  Medal,
  BookOpenText,
  MessageSquareCode,
} from "lucide-react";

function NavItem({ icon, label, active }) {
  return (
    <div
      className={`flex items-center gap-3 px-4 py-2.5 rounded-lg cursor-pointer transition
        ${
          active
            ? "bg-blue-50 text-blue-600 font-medium"
            : "text-gray-600 hover:bg-gray-100"
        }`}
    >
      <span className={active ? "text-blue-600" : "text-gray-500"}>{icon}</span>
      {label}
    </div>
  );
}

export default function Sidebar() {
  return (
    <>
    <aside className="w-64 bg-white hidden lg:flex flex-col shadow-sm border-r border-gray-200">
      <div className="p-6 flex items-center gap-2 font-semibold text-lg">
        <div className="flex items-center justify-center text-blue-600">
          <span className="material-symbols-outlined text-3xl">school</span>
        </div>
        University HR Portal
      </div>

      <nav className="flex-1 px-3 space-y-1.5 text-sm">
        <NavItem
          icon={<Medal size={18} />}
          label="Performance & Promotion
Evaluation "
        />
        <NavItem
          icon={<CalendarRange size={18} />}
          label="Leave Management"
          active
        />
        <NavItem
          icon={<MessageSquareCode size={18} />}
          label="Student Feedback"
        />
        <NavItem icon={<BookOpenText size={18} />} label="Teaching Progress" />
      </nav>

      <div className="p-4 border-t border-gray-200">
        <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 transition">
          <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-semibold">
            PN
          </div>
          <div className="flex-1 text-left">
            <div className="text-sm font-medium text-gray-900">Profile Name</div>
            <div className="text-xs text-gray-500">View Profile</div>
          </div>
        </button>
      </div>
    </aside>
    <footer>
        
    </footer>
    </>
  );
}
