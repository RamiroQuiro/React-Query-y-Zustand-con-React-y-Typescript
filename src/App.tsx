import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Cards from "./components/Card";
import { useFetchRepositori } from "./hooks/useRepo";
import { useFavoriteReposStora } from "./store/favoriteRepos";

function App() {
const [user,setUser]=useState({
  name:"",
  userName:""
})

  const { data, isLoading } = useFetchRepositori("ramiroQuiro");
const {favoriteReposID }=useFavoriteReposStora()

const handleUser=(e)=>{
  setUser({
    "name":e.target.value
  })
  console.log(user.name)
}

const handleButton=(e)=>{
  setUser({...user,userName:user.name})
}
  if (isLoading)
    return <div className="text-3xl text-orange-500 font-bold">Loading...</div>;

  console.log(data);
  return (
    <>
    <input onChange={handleUser} name="nameUser" className="py-2 bg-gray-100 rounded-lg border" type="text" />
    <button>Ingresar</button>
    <label htmlFor="nameUser"> ingrese Usuario a buscar REepo</label>

    <div className="flex w-11/12 flex-wrap justify-around items-center text-center gap-5">
      {data?.map((e) => (
        <Cards repository={e} 
        isFavorite={favoriteReposID.includes(e.id)}
        key={e.id}
        />
      ))}
    </div>
    </>
  );
}

export default App;
