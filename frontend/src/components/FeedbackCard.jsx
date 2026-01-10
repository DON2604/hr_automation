export default function FeedbackCard({ code, title, instructor }) {
  return (
    <div className="bg-white rounded-xl shadow-sm ring-1 ring-gray-200 p-4 flex flex-col justify-between">
      <div>
        <p className="text-xs text-gray-400 mb-2">SPRING 2024</p>
        <h3 className="font-semibold text-gray-800">
          {code}: {title}
        </h3>
        <p className="text-sm text-gray-500 mt-1">
          {instructor}
        </p>
      </div>

      <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white text-sm py-2 rounded-lg transition">
        Give Feedback
      </button>
    </div>
  );
}
