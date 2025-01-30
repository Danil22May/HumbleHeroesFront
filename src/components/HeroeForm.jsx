export default function HeroeForm() {
  return (
    <div className="flex flex-col backdrop-blur-lg gap-5 border-2 border-gray-400 items-center justify-center rounded h-96 p-10">
      <span className="font-bold">Create a new Heroe</span>
      <input
        className="border border-gray-500 rounded-sm px-2"
        type="text"
        placeholder="Name"
        required
      />
      <input
        className="border border-gray-500 rounded-sm px-2"
        type="number"
        placeholder="Humility"
        required
      />
      <input
        className="border border-gray-500 rounded-sm px-2"
        type="text"
        placeholder="Super Power"
        required
      />
      <button className="bg-green-300 w-24 px-2 hover:bg-green-400 active:bg-green-600 rounded">
        Create Heroe
      </button>
    </div>
  );
}
