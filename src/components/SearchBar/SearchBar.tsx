type Props = {
  value: string;
  onChange: (value: string) => void;
};

export default function SearchBar({ value, onChange }: Props) {
  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Pesquise cartas do Magic: The Gathering"
        className="w-full p-2 rounded border border-gray-700 bg-gray-800 text-gray-100 focus:outline-none focus:ring-2 focus:ring-pink-400"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
