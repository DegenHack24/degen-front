export default function RangePicker({ value, type, onChange, max }) {
  return (
    <input
      value={value}
      placeholder="placeholder..."
      name="range"
      id="range"
      type={type}
      onChange={onChange}
      min={1}
      max={max}
    />
  );
}
