import { Repository } from "../hooks/types";
import { useFavoriteReposStora } from "../store/favoriteRepos";
type CardProps = {
  repository: Repository;
  isFavorite:boolean
};

export default function Cards({ repository,isFavorite }: CardProps) {


const addFavoriteRepo=useFavoriteReposStora(state=>state.addFavoriteRepo)
const removeFavoriteRepo=useFavoriteReposStora(state=>state.removeFavoriteRepo)

const handleFavorite=()=>{
  if(isFavorite){
    removeFavoriteRepo(repository.id)
    return
  }
  addFavoriteRepo(repository.id)
}

  return (
    <div className="border rounded-lg text-center p-5">
      <div className="p-4 w-full">
      <h1>{repository.name}</h1>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
          {repository.language}
          </h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">
          {repository.archived}
          </h2>
        </div>
      <button
      onClick={handleFavorite}
      >{
      
      isFavorite?'No Me Gusta':"ME gusta"
      }</button>
      </div>

     
    </div>
  );
}
