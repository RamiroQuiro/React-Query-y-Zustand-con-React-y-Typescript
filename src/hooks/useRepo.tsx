import { useQuery } from "@tanstack/react-query";
import api from "../api/gitHub";
import { Repository } from "./types";

async function fetchRepos() {
    const {data} = await api.get<Repository[]>('/users/ramiroQuiro/repos')
    return data
}


export function useFetchRepositori() {
    return useQuery(['repos'],fetchRepos)
}