import { useState } from "react";
import Background from "./Background";
import Datos from "./Datos";
import gitIcon from "./img/git6.svg";
function App() {
  const [user, setUser] = useState({
    name: "",
    userName: "",
  });

  const handleUser = (e: object) => {
    setUser({
      name: e.target.value,
    });
  };

  const handleButton = (e: any) => {
    setUser({ ...user, userName: user.name });
  };

  return (
    <div className="w-screen bg-gradient-to-tr  from-neutral-800 to-neutral-700 h-screen text-gray-200 flex flex-col gap-5 items-center justify-center">
      <Background />
      <div className="bg-gray-200 rounded-lg border mt-32 p-5 text-neutral-800 z-50 flex flex-col">
        <div className="w-full inline-flex gap-5 items-center mb-5">
          <img src={gitIcon} alt="gitIcon" className="w-10 " />
          <h2 className=" ">Buscar Repositorio de Github</h2>
        </div>
        <input
          onChange={handleUser}
          type="text"
          name="usuarioName"
          id="usiarioName"
          className="rounded"
        />
        <button className=" font-medium font-thin ml-5 text-xs uppercase mt-5">
          buscar
        </button>
      </div>
      <div className="z-50 bg-gray-300/70 w-10/12 rounded-lg ">
        {user.name}
        <Datos />
      </div>
    </div>
    // <>
    // <input onChange={handleUser} name="nameUser" className="py-2 bg-gray-100 rounded-lg border" type="text" />
    // <button>Ingresar</button>
    // <label htmlFor="nameUser"> ingrese Usuario a buscar REepo</label>

    //
    // </>
  );
}

export default App;
