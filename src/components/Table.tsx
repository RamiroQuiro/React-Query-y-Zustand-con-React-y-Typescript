import React from "react";
import { useFetchRepositori } from "../hooks/useRepo";
import { useFavoriteReposStora } from "../store/favoriteRepos";
import TableBody from "./TableBody";

export default function Table({datos}) {

const {data,isLoading}=useFetchRepositori(datos)
const {favoriteReposID}=useFavoriteReposStora()


if (isLoading) return (
  <div>Loading....</div>
)

  return (
    <table className="table-auto w-full text-left whitespace-no-wrap">
      <thead>
        <tr >
          <th className="px-2 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
            Nombre de Repo
          </th>
          <th className="px-2 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
            Lwnguage
          </th>
          <th className="px-2 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
            Direccion
          </th>
          <th className="px-1 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
           Homepage 
          </th>
          <th className="px-1 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
           Descripcion 
          </th>
          <th className=" px-2 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tr rounded-br">
            Favorito
          </th>
        </tr>
      </thead>
      <tbody>

        {data?.map(repo=>(
          <TableBody
          repository={repo}
          isFavorite={favoriteReposID.includes(repo.id)}
          key={repo.id}
          />

        ))}
      </tbody>
    </table>
  );
}
