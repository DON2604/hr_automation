import {
  CalendarRange,
  Medal,
  BookOpenText,
  MessageSquareCode,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import NavItem from "./NavItem";

export default function Sidebar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (path) => {
    navigate(path);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(true)}
        className="fixed top-4 left-4 z-50 lg:hidden bg-white p-2 rounded-lg shadow-md hover:bg-gray-50"
      >
        <Menu size={24} className="text-gray-700" />
      </button>

      {/* Overlay for mobile */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`w-64 bg-white flex flex-col shadow-sm border-r border-gray-200 fixed left-0 top-0 h-screen z-50 transition-transform duration-300 ease-in-out
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
        <div className="p-6 flex items-center gap-2 font-semibold text-lg relative">
          <div className="flex items-center justify-center text-blue-600">
            <span className="material-symbols-outlined text-3xl">school</span>
          </div>
          <span className="flex-1">University HR Portal</span>
          {/* Close button for mobile */}
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="lg:hidden absolute right-1 top-6 p-1 hover:bg-gray-100 rounded"
          >
            <X size={20} className="text-gray-600" />
          </button>
        </div>

        <nav className="flex-1 px-3 space-y-1.5 text-sm">
          <NavItem
            icon={<Medal size={18} />}
            label="Performance & Promotion Evaluation "
            active={location.pathname === "/performance"}
            onClick={() => handleNavigation("/performance")}
          />
          <NavItem
            icon={<CalendarRange size={18} />}
            label="Leave Management"
            active={location.pathname === "/leave-mgmt"}
            onClick={() => handleNavigation("/leave-mgmt")}
          />
          <NavItem
            icon={<MessageSquareCode size={18} />}
            label="Student Feedback"
            active={location.pathname === "/student-feedback"}
            onClick={() => handleNavigation("/student-feedback")}
          />
          <NavItem
            icon={<BookOpenText size={18} />}
            label="Teaching Progress"
            active={location.pathname === "/teaching-progress"}
            onClick={() => handleNavigation("/teaching-progress")}
          />
        </nav>

        <div className="p-4 border-t border-gray-200">
          <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 transition">
            <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-semibold">
              PN
            </div>
            <div className="flex-1 text-left">
              <div className="text-sm font-medium text-gray-900">
                Profile Name
              </div>
              <div className="text-xs text-gray-500">View Profile</div>
            </div>
          </button>
        </div>
      </aside>
      <footer></footer>
    </>
  );
}
