export default function NavItem({ icon, label, active, onClick }) {
  return (
    <div
      onClick={onClick}
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
