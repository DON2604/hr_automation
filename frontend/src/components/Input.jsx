export default function Input({ label, value }) {
  return (
    <div>
      <label className="text-sm font-medium">{label}</label>
      <input
        className="mt-1 w-full border rounded-lg p-2 text-sm bg-gray-50"
        value={value}
        readOnly
      />
    </div>
  );
}
