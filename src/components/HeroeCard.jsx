export default function HeroeCard({ hero }) {
  return (
    <div className=" backdrop-blur-lg border m-2 w-64 h-40 flex flex-col gap-4 border-neutral-200 shadow-sm hover:shadow-md rounded p-2">
      <div className="text-sm ">
        Name:{" "}
        <span className="text-lg text-yellow-800 font-bold">{hero.name}</span>{" "}
      </div>
      <div className="text-sm">
        Humble Score:{" "}
        <span className="text-lg font-bold">{hero.humbleScore}</span>
      </div>
      <div className="text-sm">
        Super Power:{" "}
        <span className="text-lg text-yellow-600 font-bold">
          {hero.superPower}
        </span>
      </div>
    </div>
  );
}
