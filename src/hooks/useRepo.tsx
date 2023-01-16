import { useQuery ,QueryFunctionContext} from "@tanstack/react-query";
import api from "../api/gitHub";
import { Repository,DataUser } from "./types";

async function fetchRepos(ctx:QueryFunctionContext) {
const[_,gitUser]= ctx.queryKey
    const {data} = await api.get<Repository[]>(`/users/${gitUser}/repos`)
    return data
}



export async function fetchUserData(ctx:QueryFunctionContext){
    const [_,gitUser]=ctx.queryKey
    const {data}=await api.get<DataUser>(`/users/${gitUser}`)
    return data
}

export function useFetchRepositori(gitUser:string) {
    return useQuery(['repos',gitUser],fetchRepos)
}

export function useFetchUserData(gitUser:string) { 
    return useQuery(['dataUser',gitUser],fetchUserData)
}