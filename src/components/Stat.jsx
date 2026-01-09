export default function Stat({ label, value, negative, highlight }) {
  return (
    <div
      className={`flex justify-between text-sm ${
        highlight ? "mt-4 pt-3 border-t" : ""
      }`}
    >
      <span
        className={
          highlight ? "text-lg font-semibold text-blue-600" : "text-gray-600"
        }
      >
        {label}
      </span>
      <span
        className={
          negative
            ? "text-red-500"
            : highlight
            ? "text-lg font-semibold text-blue-600"
            : "font-medium"
        }
      >
        {value}
      </span>
    </div>
  );
}
