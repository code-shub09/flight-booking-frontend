import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function DateField({ label, selected, onChange }) {
  return (
    <div className="flex-1">
      <label className="text-xs text-gray-500 block mb-1">{label}</label>
      <DatePicker
        selected={selected}
        onChange={onChange}
        dateFormat="dd/MM/yyyy"
        placeholderText="Select date"
        className="w-full border border-gray-300 rounded-md px-2 py-1 text-sm font-medium focus:ring-2 focus:ring-teal-500 focus:outline-none"
      />
    </div>
  );
}
