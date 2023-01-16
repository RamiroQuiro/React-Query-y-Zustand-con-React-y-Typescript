import React from "react";
import { useFetchRepositori,useFetchUserData } from "../hooks/useRepo";
import { useFavoriteReposStora } from "../store/favoriteRepos";
import TableBody from "./TableBody";

export default function Table({datos}) {

const {data:data,isLoading,isError}=useFetchRepositori(datos)
const {favoriteReposID}=useFavoriteReposStora()
const {data:dataUser}=useFetchUserData(datos)

if (isLoading) return (
  <div>Loading....</div>
)
if(isError) return(

  <div>{isError}</div>
)
console.log(dataUser)
if (data.length===0)return<div>No se Encontraron Ningun Usuario</div>
  return (
    <>
       <table className="table-auto w-full text-left whitespace-no-wrap">
      <thead>
        <tr >
          <th className="px-2 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
            Nombre Repositorio
          </th>
          <th className="px-2 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
            Lenguaje
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
        
      </tbody>
    </table>
      <div className="w-11/12 flex items-center justify-around py-2 font-medium mx-auto text-neutral-800">
        <img src={dataUser?.avatar_url} alt="avatar" className="w-10 object-cover" />
    <span className="uppercase ">

    {dataUser?.name}
    </span>
          <div className="flex flex-col text-sm items-center justify-center">
          <a href={dataUser?.html_url} target="_blank">{dataUser?.html_url}</a>
          <a href={dataUser?.blog} target="_blank">{dataUser?.blog}</a>
            </div>
<span>
  {dataUser?.followers}
</span>
      </div>
    <table className="table-auto w-full text-left whitespace-no-wrap">
      <thead>
        <tr >
          <th className="px-2 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
            Nombre Repositorio
          </th>
          <th className="px-2 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
            Lenguaje
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
    </>  );
}
