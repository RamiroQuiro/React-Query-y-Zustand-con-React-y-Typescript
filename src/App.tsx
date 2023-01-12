import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Cards from "./components/Card";
import { useFetchRepositori } from "./hooks/useRepo";
import { useFavoriteReposStora } from "./store/favoriteRepos";

function App() {


  const { data, isLoading } = useFetchRepositori();
const {favoriteReposID }=useFavoriteReposStora()


  if (isLoading)
    return <div className="text-3xl text-orange-500 font-bold">Loading...</div>;

  console.log(data);
  return (
    <div className="flex w-11/12 flex-wrap justify-around items-center text-center gap-5">
      {data?.map((e) => (
        <Cards repository={e} 
        isFavorite={favoriteReposID.includes(e.id)}
        key={e.id}
        />
      ))}
    </div>
  );
}

export default App;
