import axios from "axios";
import { useState } from "react";

export default function HeroeForm() {
  const [heroeName, setHeroeName] = useState("");
  const [heroeScore, setHeroeScore] = useState(0);
  const [heroePower, setHeroePower] = useState("");

  const handleHeroeName = (e) => {
    // it would be great to add unique method for all input fields
    setHeroeName(e.target.value);
  };
  const handleHeroeScore = (e) => {
    setHeroeScore(e.target.value);
  };
  const handleHeroePower = (e) => {
    setHeroePower(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const heroeData = {
      name: heroeName,
      humbleScore: heroeScore,
      superPower: heroePower,
    };
    await axios.post("http://localhost:3000/superheroes", heroeData);
    window.location.reload();
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col backdrop-blur-lg gap-5 border-2 border-gray-300 items-center justify-center rounded h-96 p-10"
    >
      <span className="font-bold">Create a new Heroe</span>
      <input
        className="border border-gray-500 rounded-sm px-2"
        type="text"
        name="name"
        placeholder="Name"
        value={heroeName}
        onChange={handleHeroeName}
        required
      />
      <input
        className="border border-gray-500 rounded-sm px-2"
        type="number"
        name="humbleScore"
        placeholder="Humility"
        value={heroeScore}
        onChange={handleHeroeScore}
        required
      />
      <input
        className="border border-gray-500 rounded-sm px-2"
        type="text"
        name="superPower"
        placeholder="Super Power"
        value={heroePower}
        onChange={handleHeroePower}
        required
      />
      <button
        type="submit"
        className="bg-green-300 w-24 px-2 hover:bg-green-400 active:bg-green-600 rounded"
      >
        Create Heroe
      </button>
    </form>
  );
}
