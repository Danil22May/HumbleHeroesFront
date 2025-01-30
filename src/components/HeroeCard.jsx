export default function HeroeCard({ hero }) {
  return (
    <div className="bg-neutral-100 border m-2 w-60 h-40 flex flex-col gap-4 border-neutral-200 shadow-sm hover:shadow-md rounded p-2">
      <div>
        Name: <span className="text-blue-600 font-bold">{hero.name}</span>{" "}
      </div>
      <div>
        Humble Score: <span className="font-bold">{hero.humbleScore}</span>
      </div>
      <div>
        Super Power:{" "}
        <span className="text-yellow-600 font-bold">{hero.superPower}</span>
      </div>
    </div>
  );
}
