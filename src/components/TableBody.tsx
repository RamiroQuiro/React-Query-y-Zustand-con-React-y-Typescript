import { Repository } from "../hooks/types";
import { useFavoriteReposStora } from "../store/favoriteRepos";
type CardProps = {
  repository: Repository;
  isFavorite: boolean;
};

export default function TableBody({ repository, isFavorite }: CardProps) {
  const addFavoriteRepo = useFavoriteReposStora(
    (state) => state.addFavoriteRepo
  );
  const removeFavoriteRepo = useFavoriteReposStora(
    (state) => state.removeFavoriteRepo
  );

  const handleFavorite = () => {
    if (isFavorite) {
      removeFavoriteRepo(repository.id);
      return;
    }
    addFavoriteRepo(repository.id);
  };

  return (
    <tr className="border-y border-orange-500/50 bg-neutral-100/80 text-neutral-700">
      <td className="px-2 py-3">{repository.name}</td>
      <td className="px-2 py-3">{repository.language}</td>
      <td className="px-2 py-3  hover:text-blue-800 duration-100">
        <a href= {repository.html_url} target="_blank">
        {repository.html_url}</a></td>
      <td className="px-1 py-3 text-sm text-gray-900 hover:text-blue-800  duration-100">
      <a href= {repository.homepage} target="_blank">
        {repository.homepage}</a>
      </td>
      <td className="px-1 py-3 text-sm text-gray-900">
        {repository.description}
      </td>
      <td className="px-2 py-3 font-light text-xs cursor-pointer duration-100 text-center hover:bg-gray-500/50" onClick={handleFavorite}>
        {isFavorite ? "No Me Gusta" : "ME gusta"}
      </td>
    </tr>
  );
}
