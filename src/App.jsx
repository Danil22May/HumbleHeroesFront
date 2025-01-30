import "./App.css";
import HeroeForm from "./components/HeroeForm";
import HeroesList from "./components/HeroesList";
// I would add a "Service" for api request and call it if i had more time
function App() {
  return (
    <>
      <svg
        className=" absolute top-0 -z-10"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#a2d9ff"
          d="M0,224L60,240C120,256,240,288,360,277.3C480,267,600,213,720,186.7C840,160,960,160,1080,138.7C1200,117,1320,75,1380,53.3L1440,32L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        ></path>
      </svg>
      <div className="flex h-screen justify-center items-center">
        <HeroeForm />
        <HeroesList />
      </div>
      <svg
        className=" absolute bottom-0 -z-10"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#00cba9"
          d="M0,224L48,229.3C96,235,192,245,288,224C384,203,480,149,576,149.3C672,149,768,203,864,192C960,181,1056,107,1152,80C1248,53,1344,75,1392,85.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </>
  );
}

export default App;
