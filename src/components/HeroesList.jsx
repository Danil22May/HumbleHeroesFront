import axios from "axios";
import { useEffect, useState } from "react";
import HeroeCard from "./HeroeCard";

export default function HeroesList() {
  const [heroes, setHeroes] = useState([]);
  const fetchHeroes = async () => {
    const response = await axios.get("http://localhost:3000/superheroes");
    setHeroes(response.data);
  };
  useEffect(() => {
    fetchHeroes();
  }, []);
  console.log(heroes);
  if (heroes.length === 0) {
    return <div>Loading...</div>;
  }
  return (
    <div className=" m-10">
      <div className="text-2xl p-2">Heroes: </div>
      {heroes.map((hero) => {
        return <HeroeCard key={hero.name} hero={hero} />;
      })}
    </div>
  );
}
