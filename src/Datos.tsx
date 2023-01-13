import React from 'react'
import Cards from './components/Card';
import { useFetchRepositori } from './hooks/useRepo';
import { useFavoriteReposStora } from './store/favoriteRepos';

export default function Datos() {

const { data, isLoading } = useFetchRepositori("ramiroQuiro");
const { favoriteReposID } = useFavoriteReposStora();

if (isLoading) return (
    <div className="animate-pulse">Loading...</div>
)

  return (
    <div className="flex w-11/12 mx-auto mt-20 flex-wrap justify-around items-center text-center gap-5">
      {data?.map((e) => (
        <Cards repository={e}
        isFavorite={favoriteReposID.includes(e.id)}
        key={e.id}
        />
      ))}
    </div>
  )
}
