import { useQuery ,QueryFunctionContext} from "@tanstack/react-query";
import api from "../api/gitHub";
import { Repository } from "./types";

async function fetchRepos(ctx:QueryFunctionContext) {
const[_,gitUser]=ctx.queryKey
    const {data} = await api.get<Repository[]>(`/users/${gitUser}/repos`)
    return data
}


export function useFetchRepositori(gitUser:string) {
    return useQuery(['repos',gitUser],fetchRepos)
}